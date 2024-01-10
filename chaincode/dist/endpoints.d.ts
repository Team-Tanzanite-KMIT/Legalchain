import * as grpc from '@grpc/grpc-js';
import { Contract, Gateway } from '@hyperledger/fabric-gateway';
import { Asset, FileParams } from './types';
export declare function getContract(): Promise<{
    contract: Contract;
    gateway: Gateway;
    client: grpc.Client;
}>;
/**
 * This type of transaction would typically only be run once by an application the first time it was started after its
 * initial deployment. A new version of the chaincode deployed later would likely not need to run an "init" function.
 */
export declare function initLedger(contract: Contract): Promise<void>;
/**
 * Evaluate a transaction to query ledger state.
 */
export declare function getAllFiles(contract: Contract): Promise<string>;
/**
 * Submit a transaction synchronously, blocking until it has been committed to the ledger.
 */
export declare function createFile(contract: Contract, file: FileParams): Promise<boolean>;
/**
 * Submit transaction asynchronously, allowing the application to process the smart contract response (e.g. update a UI)
 * while waiting for the commit notification.
 */
export declare function transferFileAsync(contract: Contract, id: string, newOwner: string): Promise<Asset>;
export declare function readFileByID(contract: Contract, id: string): Promise<Asset>;
/**
 * submitTransaction() will throw an error containing details of any error responses from the smart contract.
 */
export declare function updateNonExistentAsset(contract: Contract): Promise<void>;
