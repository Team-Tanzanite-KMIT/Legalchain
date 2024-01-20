import * as grpc from "@grpc/grpc-js";
import {
  connect,
  Contract,
  Gateway,
  Identity,
  Signer,
  signers,
} from "@hyperledger/fabric-gateway";
import * as crypto from "crypto";
import { promises as fs } from "fs";
import * as path from "path";
import { TextDecoder } from "util";

import { Asset, FileParams } from "./types";

// const channelName = envOrDefault('CHANNEL_NAME', 'mychannel');
// const chaincodeName = envOrDefault('CHAINCODE_NAME', 'filebasic');
// const mspId = envOrDefault('MSP_ID', 'Org1MSP');

const channelName = "mychannel";
const chaincodeName = "filebasic";
const mspId = "Org1MSP";

// Path to crypto materials.
const cryptoPath = envOrDefault(
  "CRYPTO_PATH",
  path.resolve(
    __dirname,
    "..",
    "..",
    "..",
    "test-network",
    "organizations",
    "peerOrganizations",
    "org1.example.com"
  )
);

// Path to user private key directory.
const keyDirectoryPath = envOrDefault(
  "KEY_DIRECTORY_PATH",
  path.resolve(cryptoPath, "users", "User1@org1.example.com", "msp", "keystore")
);

// Path to user certificate.
const certPath = envOrDefault(
  "CERT_PATH",
  path.resolve(
    cryptoPath,
    "users",
    "User1@org1.example.com",
    "msp",
    "signcerts",
    "cert.pem"
  )
);

// Path to peer tls certificate.
const tlsCertPath = envOrDefault(
  "TLS_CERT_PATH",
  path.resolve(cryptoPath, "peers", "peer0.org1.example.com", "tls", "ca.crt")
);

// Gateway peer endpoint.
const peerEndpoint = envOrDefault("PEER_ENDPOINT", "localhost:7051");

// Gateway peer SSL host name override.
const peerHostAlias = envOrDefault("PEER_HOST_ALIAS", "peer0.org1.example.com");

const utf8Decoder = new TextDecoder();
const assetId = `Mathematics for Computer Science`;

async function main(): Promise<void> {
  await displayInputParameters();

  // The gRPC client connection should be shared by all Gateway connections to this endpoint.
  const client = await newGrpcConnection();

  const gateway = connect({
    client,
    identity: await newIdentity(),
    signer: await newSigner(),
    // Default timeouts for different gRPC calls
    evaluateOptions: () => {
      return { deadline: Date.now() + 5000 }; // 5 seconds
    },
    endorseOptions: () => {
      return { deadline: Date.now() + 15000 }; // 15 seconds
    },
    submitOptions: () => {
      return { deadline: Date.now() + 5000 }; // 5 seconds
    },
    commitStatusOptions: () => {
      return { deadline: Date.now() + 60000 }; // 1 minute
    },
  });

  try {
    // Get a network instance representing the channel where the smart contract is deployed.
    const network = gateway.getNetwork(channelName);

    // Get the smart contract from the network.
    const contract = network.getContract(chaincodeName);

    // Initialize a set of asset data on the ledger using the chaincode 'InitLedger' function.
    await initLedger(contract);

    // Return all the current assets on the ledger.
    await getAllFiles(contract);

    // Create a new asset on the ledger.
    await createFile(contract, {
      content: "ss",
      filename: "testfile.pdf",
      owner: "newOwner",
    });

    await getAllFiles(contract);

    // Update an existing asset asynchronously.
    await transferFileAsync(contract, "ss", "nextowner");

    await getAllFiles(contract);

    // Get the asset details by assetID.
    await readFileByID(contract, "ss");

    // // Update an asset which does not exist.
    // await updateNonExistentAsset(contract)
  } finally {
    gateway.close();
    client.close();
  }
}

// main().catch((error) => {
//   console.error('******** FAILED to run the application:', error);
//   process.exitCode = 1;
// });

export async function getContract() {
  const client = await newGrpcConnection();

  const gateway = connect({
    client,
    identity: await newIdentity(),
    signer: await newSigner(),
    // Default timeouts for different gRPC calls
    evaluateOptions: () => {
      return { deadline: Date.now() + 5000 }; // 5 seconds
    },
    endorseOptions: () => {
      return { deadline: Date.now() + 15000 }; // 15 seconds
    },
    submitOptions: () => {
      return { deadline: Date.now() + 5000 }; // 5 seconds
    },
    commitStatusOptions: () => {
      return { deadline: Date.now() + 60000 }; // 1 minute
    },
  });

  // try {
  // Get a network instance representing the channel where the smart contract is deployed.
  const network = gateway.getNetwork(channelName);

  // Get the smart contract from the network.
  const contract = network.getContract(chaincodeName);

  return { contract, gateway, client };

  // } finally {
  gateway.close();
  client.close();
  // }
}

async function closeConnection(gateway: Gateway, client: grpc.Client) {
  gateway.close();
  client.close();
}

async function newGrpcConnection(): Promise<grpc.Client> {
  const tlsRootCert = await fs.readFile(tlsCertPath);
  const tlsCredentials = grpc.credentials.createSsl(tlsRootCert);
  return new grpc.Client(peerEndpoint, tlsCredentials, {
    "grpc.ssl_target_name_override": peerHostAlias,
  });
}

async function newIdentity(): Promise<Identity> {
  const credentials = await fs.readFile(certPath);
  return { mspId, credentials };
}

async function newSigner(): Promise<Signer> {
  const files = await fs.readdir(keyDirectoryPath);
  const keyPath = path.resolve(keyDirectoryPath, files[0]);
  const privateKeyPem = await fs.readFile(keyPath);
  const privateKey = crypto.createPrivateKey(privateKeyPem);
  return signers.newPrivateKeySigner(privateKey);
}

/**
 * This type of transaction would typically only be run once by an application the first time it was started after its
 * initial deployment. A new version of the chaincode deployed later would likely not need to run an "init" function.
 */
export async function initLedger(contract: Contract): Promise<void> {
  console.log(
    "\n--> Submit Transaction: InitLedger, function creates the initial set of assets on the ledger"
  );

  await contract.submitTransaction("InitLedger");

  console.log("*** Transaction committed successfully");
}

/**
 * Evaluate a transaction to query ledger state.
 */
export async function getAllFiles(contract: Contract): Promise<string> {
  console.log(
    "\n--> Evaluate Transaction: GetAllAssets, function returns all the current assets on the ledger"
  );

  const resultBytes = await contract.evaluateTransaction("GetAllFiles");

  const resultJson = utf8Decoder.decode(resultBytes);
  const result = JSON.parse(resultJson);
  console.log("*** Result:", result);
  return resultJson;
}

/**
 * Submit a transaction synchronously, blocking until it has been committed to the ledger.
 */
export async function createFile(contract: Contract, file: FileParams): Promise<boolean> {
  console.log("\n--> Submit Transaction: Createfile, creates new file");

  await contract.submitTransaction("CreateFile", file.filename, file.content, file.owner);

  console.log("*** Transaction committed successfully");

  return true;
}

/**
 * Submit transaction asynchronously, allowing the application to process the smart contract response (e.g. update a UI)
 * while waiting for the commit notification.
 */
export async function transferFileAsync(
  contract: Contract,
  id: string,
  newOwner: string
): Promise<Asset> {
  console.log(
    "\n--> Async Submit Transaction: TransferAsset, updates existing asset owner"
  );

  const commit = await contract.submitAsync("TransferFile", {
    arguments: [id, newOwner],
  });
  const oldOwner = utf8Decoder.decode(commit.getResult());

  console.log(
    `*** Successfully submitted transaction to transfer ownership from ${oldOwner} to ${newOwner}`
  );
  console.log("*** Waiting for transaction commit");

  const status = await commit.getStatus();
  if (!status.successful) {
    throw new Error(
      `Transaction ${status.transactionId} failed to commit with status code ${status.code}`
    );
  }

  console.log("*** Transaction committed successfully");

  return JSON.parse(oldOwner);
}

export async function readFileByID(contract: Contract, id: string): Promise<Asset> {
  console.log("\n--> Evaluate Transaction: ReadAsset, function returns asset attributes");

  const resultBytes = await contract.evaluateTransaction("ReadFile", id);

  const resultJson = utf8Decoder.decode(resultBytes);
  const result: Asset = JSON.parse(resultJson);
  console.log("*** Result:", result);

  return result;
}

// export async function readMultipleFiles(
//   contract: Contract,
//   IDs: string[],
//   requestBy: string
// ): Promise<Asset[]> {

// }

/**
 * submitTransaction() will throw an error containing details of any error responses from the smart contract.
 */
export async function Update(
  contract: Contract,
  oldID: string,
  newAsset: Asset
): Promise<void> {
  console.log("\n--> Submit Transaction: UpdateAsset");

  try {
    await contract.submitTransaction(
      "UpdateFile",
      oldID,
      newAsset.Content != undefined ? newAsset.Content : "",
      newAsset.Owner != undefined ? newAsset.Owner : "",
      newAsset.AccessList != undefined ? JSON.stringify(newAsset.AccessList) : "[]"
    );
    // console.log('******** FAILED to return an error');
  } catch (error) {
    console.log("*** Successfully caught the error: \n", error);
  }
}

/**
 * envOrDefault() will return the value of an environment variable, or a default value if the variable is undefined.
 */
function envOrDefault(key: string, defaultValue: string): string {
  return process.env[key] || defaultValue;
}

/**
 * displayInputParameters() will print the global scope parameters used by the main driver routine.
 */
async function displayInputParameters(): Promise<void> {
  console.log(`channelName:       ${channelName}`);
  console.log(`chaincodeName:     ${chaincodeName}`);
  console.log(`mspId:             ${mspId}`);
  console.log(`cryptoPath:        ${cryptoPath}`);
  console.log(`keyDirectoryPath:  ${keyDirectoryPath}`);
  console.log(`certPath:          ${certPath}`);
  console.log(`tlsCertPath:       ${tlsCertPath}`);
  console.log(`peerEndpoint:      ${peerEndpoint}`);
  console.log(`peerHostAlias:     ${peerHostAlias}`);
}
