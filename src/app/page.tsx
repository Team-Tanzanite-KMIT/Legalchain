// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
//       <h1>Welcome to Evault</h1>
//     </main>
//   );
// }


"use client"

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";


export default function HorizontalCard() {
  return (
<div className="flex flex-wrap mb-4">
    <Card className="w-full max-w-[700rem] flex-row bg-#b0bec5 mb-4 mt-8 mx-auto rounded-lg p-8">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none"
      >
        <img
          src="/images/img_group665.png"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
      <Typography variant="h6" color="black" className="mb-4 text-6xl font-sans-serif">
  EVAULT: The future of <span style={{ color: 'red' }}>Legal records</span> keeping
</Typography>
        
        <Typography color="black" className="mb-8 font-sans-serif">
        Revolutionize legal record keeping - Secure, transparent, accessible for all. Upload, share, track your cases with confidence. The blockchain-powered justice revolution starts here.
        </Typography >
        </CardBody> 
       </Card>

       <Typography variant="h4" color="white" className="font-bold text-4xl mb-8 mx-auto">
        Design and Architecture of the eVault System
      </Typography>  


      <Card className="w-full md:w-1/3 bg-white mb-4 ">
        
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full h-48 md:w-2/5 md:h-auto shrink-0 rounded-r-none"
      >
        <img
          src="/images/img_rectangle16.png"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <Typography variant="h6" color="black" className="mb-4 text-2xl font-sans-serif">
        Blockchain Architecture
        </Typography>
        
        <Typography color="black" className="mb-8 text-xl font-sans-serif">
        The eVault system consists of a decentralized network of nodes, each of which stores a copy of all legal records.
        </Typography >
        </CardBody>
      </Card>
   
      <Card className="w-full md:w-1/3 bg-white mb-4 ">
        
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full h-48 md:w-2/5 md:h-auto shrink-0 rounded-r-none"
      >
        <img
          src="/images/img_rectangle15.png"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <Typography variant="h6" color="black" className="mb-4 text-2xl font-sans-serif">
        Data Storage
        </Typography>
        
        <Typography color="black" className="mb-8 text-xl font-sans-serif">
        Legal records are encrypted and stored in blocks, which are then added to the blockchain in a chronological chain.
        </Typography >
        </CardBody>
      </Card>

      <Card className="w-full md:w-1/3 bg-white mb-4 ">
        
        <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-full h-48 md:w-2/5 md:h-auto shrink-0 rounded-r-none"
      >
        <img
          src="/images/img_rectangle17.png"
          className="h-full w-full object-cover"
        />
        </CardHeader>
        <CardBody>
        <Typography variant="h6" color="black" className="mb-4 text-2xl font-sans-serif">
        Access Control
        </Typography>
        
        <Typography color="black" className="mb-8 text-xl font-sans-serif">
        Access to the eVault system is controlled using cryptographic keys, which can be granted or revoked by the network administrator.
        </Typography >
        </CardBody>
      </Card>

      <Typography variant="h4" color="white" className="font-bold text-4xl mb-8 mx-auto">
      What we do
      </Typography>  

     <div className="w-full text-center max-w-[70rem] bg-white mb-4 mt-8 mx-auto rounded-lg p-8">
        <Typography variant="h4" color="black" className="font-bold text-4xl mb-8 mx-auto">
          Additional Information
        </Typography>

        {/* Three sections within the rounded box */}
        <div className="flex flex-wrap justify-between">
            
          <Card className="w-full md:w-[30%] bg-gray-200 mb-4 p-4">
        <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-full h-48 md:w-2/5 md:h-auto shrink-0 rounded-r-none"
            >
              <img
                src="/images/upload.jpeg"
                alt="Section 3 Image"
                className="h-full w-full object-cover"
              />
              </CardHeader>
            <Typography variant="h6" color="black" className="mb-4 text-3xl font-sans-serif">
            UPLOAD DOCUMENTS
            </Typography>
            <Typography color="black" className="text-md text-xl font-normal">
            Seamlessly upload your legal documents to LegalChain eVault, where they will be stored securely and permanently.
            </Typography>
          </Card>

          <Card className="w-full md:w-[30%] bg-teal-500 mb-4 p-4">
          <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-full h-48 md:w-2/5 md:h-auto shrink-0 rounded-r-none"
            >
              <img
                src="/images/share.jpeg"
                alt="Section 3 Image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <Typography variant="h6" color="black" className="mb-4 text-3xl font-sans-serif">
            SHARE DOCUMENTS
            </Typography>
            <Typography color="black" className="text-md text-xl font-normal">
            Collaborate effortlessly by sharing legal documents with authorized stakeholders, promoting efficient communication within your legal team.
            </Typography>
          </Card>

          <Card className="w-full md:w-[30%] bg-gray-200 mb-4 p-4">
          <CardHeader
              shadow={false}
              floated={false}
              className="m-0 w-full h-48 md:w-2/5 md:h-auto shrink-0 rounded-r-none"
            >
              <img
                src="/images/history.jpeg"
                alt="Section 3 Image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <Typography variant="h6" color="black" className="mb-4 text-3xl font-sans-serif">
            TRACK HISTORY
            </Typography>
            <Typography color="black" className="text-md text-xl font-normal">
            Track the complete history of your legal documents on the blockchain, benefiting from a tamper-resistant and auditable record of all transactions and changes.
            </Typography>
          </Card>
        </div>
      </div>
      <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t py-6 text-center md:justify-between bg-gray-800 text-white">
        <Typography color="blue-gray" className="font-normal">
          &copy; 2024 LEGAL CHAIN- All Rights Reserved
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
        </ul>
      </footer>
    </div>
            
       
      
    
  );
}