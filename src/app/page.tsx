"use client"
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
// import 'animate.css/animate.min.css';
export default function HorizontalCard() {
  return (
    <div className="flex flex-wrap mb-4 bg-black w-full">
      <div className="w-full md:max-w-[900px] flex flex-col md:flex-row mb-5 mt-8 mx-auto md:rounded-lg p-8 bg-gray-200">
  <div className="order-2 w-full md:w-3/5 md:order-1">
    <Typography variant="h6" color="black" className="mb-4 text-2xl md:text-4xl font-sans-serif">
      EVAULT: The future of <span style={{ color: 'red' }}>Legal records</span> keeping
    </Typography>
    <Typography color="black" className="mb-8 font-sans-serif">
      Revolutionize legal record keeping - Secure, transparent, accessible for all. Upload, share, track your cases with confidence. The blockchain-powered justice revolution starts here.
    </Typography>
  </div>
  <div className="order-1 w-full md:w-2/5 md:order-2 flex items-center justify-center">
    <img
      src="/images/img_group665.png"
      className="h-4/5 md:h-4/5 w-auto object-cover rounded-lg"
      alt="Legal Records"
    />
  </div>
</div>

      <Typography variant="h4" color="white" className="font-bold text-xl md:text-2xl lg:text-3xl mb-8 mx-auto font-serif">
        Design and Architecture of the eVault System
      </Typography>
      <div className="flex flex-wrap justify-between ">
       
        <div className="w-full md:w-[30%] mb-4 p-4 md:flex-grow animate__animated animate__slideInLeft">
          <Card>
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-full h-40 md:h-auto shrink-0 rounded-r-none flex items-center justify-center"
              style={{ backgroundColor: 'transparent' }}
            >
              <img
                src="/images/img_rectangle16.png"
                className="h-3/4 w-3/4 object-cover"
                alt="Blockchain Architecture"
                style={{ backgroundColor: 'transparent' }}
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h6" color="black" className="mb-4 text-2xl font-sans-serif">
                Blockchain Architecture
              </Typography>
              <Typography color="black" className="mb-8 text-xl font-sans-serif">
                The eVault system consists of a decentralized network of nodes, each of which stores a copy of all legal records.
              </Typography>
            </CardBody>
          </Card>
        </div>

       
        <div className="w-full md:w-[30%] mb-4 p-4 md:flex-grow animate__animated animate__zoomIn">
          <Card>
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-full h-40 md:h-auto shrink-0 rounded-r-none flex items-center justify-center"
              style={{ backgroundColor: 'transparent' }}
            >
              <img
                src="/images/img_rectangle15.png"
                className="h-3/4 w-full object-cover"
                alt="Data Storage"
                style={{ backgroundColor: 'transparent' }}
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h6" color="black" className="mb-4 text-2xl font-sans-serif">
                Data Storage
              </Typography>
              <Typography color="black" className="mb-8 text-xl font-sans-serif">
                Legal records are encrypted and stored in blocks, which are then added to the blockchain in a chronological chain.
              </Typography>
            </CardBody>
          </Card>
        </div>

        
        <div className="w-full md:w-[30%]  mb-4 p-4 md:flex-grow animate__animated animate__slideInRight">
          <Card>
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-full h-40 md:h-auto shrink-0 rounded-r-none flex items-center justify-center"
              style={{ backgroundColor: 'transparent' }}
            >
              <img
                src="/images/img_rectangle17.png"
                className="h-3/4 w-full object-cover"
                alt="Access Control"
                style={{ backgroundColor: 'transparent' }}
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h6" color="black" className="mb-4 text-2xl font-sans-serif">
                Access Control
              </Typography>
              <Typography color="black" className="mb-8 text-xl font-sans-serif">
                Access to the eVault system is controlled using cryptographic keys, which can be granted or revoked by the network administrator.
              </Typography>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="w-full text-center max-w-[70rem] bg-grey mb-4 mt-8 mx-auto rounded-lg p-8">
        <Typography variant="h4" color="white" className="font-bold text-3xl mb-8 mx-auto">
          What can you do with eVault?
        </Typography>
        <div className="flex flex-wrap justify-between">
          <Card className="w-full md:w-[30%] bg-gray-200 mb-4 p-4">
            <Typography variant="h5" color="black" className="mb-4 text-1xl ">
              UPLOAD DOCUMENTS
            </Typography>
            <Typography color="black" className="text-md text-xl font-normal">
              Seamlessly upload your legal documents to LegalChain eVault, where they will be stored securely and permanently.
            </Typography>
          </Card>
          <Card className="w-full md:w-[30%] bg-teal-500 mb-4 p-4">
            <Typography variant="h6" color="black" className="mb-4 text-1xl ">
              SHARE DOCUMENTS
            </Typography>
            <Typography color="black" className="text-md text-xl font-normal">
              Collaborate effortlessly by sharing legal documents with authorized stakeholders, promoting efficient communication within your legal team.
            </Typography>
          </Card>
          <Card className="w-full md:w-[30%] bg-gray-200 mb-4 p-4">
            <Typography variant="h6" color="black" className="mb-4 text-1xl ">
              TRACK HISTORY
            </Typography>
            <Typography color="black" className="text-md text-xl font-normal">
              Track the complete history of your legal documents on the blockchain, benefiting from a tamper-resistant and auditable record of all transactions and changes.
            </Typography>
          </Card>
        </div>
      </div>
      <footer className="flex w-full md:w-10/10 flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t py-6 text-center md:justify-between bg-white text-white shadow-md" >
        <Typography color="black" className="font-normal">
          &copy; 2024 LEGAL CHAIN- All Rights Reserved
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="/about"
              color="black"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="/contact"
              color="black"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact us
            </Typography>
          </li>
        </ul>
      </footer>
    </div>
  );
}
