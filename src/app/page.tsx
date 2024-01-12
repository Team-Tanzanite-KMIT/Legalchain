'use client';

import {
  Card,
  Typography,
  IconButton,
  Carousel,
  Button,
} from '@material-tailwind/react';
// import 'animate.css/animate.min.css';
export default function HorizontalCard() {
  return (
    <div className="flex flex-col mb-4 w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-800">
      <div className="md:max-w-[1600px] md:max-h-[1200] flex flex-col md:flex-row mb-5 mt-8 mx-auto md:rounded-lg p-8 bg-white ">
  <div className="order-2 w-full md:w-3/5 mb-8 md:mb-0 flex flex-col justify-center">
    <Typography
      variant="h6"
      color="black"
      className="mb-4 text-4xl md:text-4xl font-sans-serif lg:text-6xl text-center"
    >
      EVAULT: The future of <span style={{ color: 'red' }}>Legal records</span> keeping
    </Typography>
    <Typography color="black" className="mb-8 font-sans-serif text-lg lg:text-xl text-center">
      Revolutionize legal record keeping - Secure, transparent, accessible for all.
      Upload, share, track your cases with confidence. The blockchain-powered
      justice revolution starts here.
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


      <Typography
        variant="h4"
        color="white"
        className="font-bold text-xl md:text-2xl lg:text-3xl mb-8 mx-auto font-serif"
      >
        Design and Architecture of the EVault System
      </Typography>

      <Carousel  transition={{ duration: 2 }} className="rounded-xl">
        <div className="w-3/4 md:max-w-[300px] md:max-h-[300px] flex flex-col md:flex-row mb-5 mt-8 mx-auto md:rounded-lg p-8 bg-tranparent relative">
          <img
            src="/images/arch.jpg"
            className="h-full w-full object-cover"
            alt="Blockchain Architecture"
            style={{ backgroundColor: 'transparent' }}
          />
        </div>

        <div className="w-3/4 md:max-w-[300px] flex flex-col md:flex-row mb-5 mt-8 mx-auto md:rounded-lg p-8 bg-tranparent relative">
          <img
            src="/images/datast.jpg"
            className="h-full w-full object-cover"
            alt="Data storage"
            style={{ backgroundColor: 'transparent' }}
          />
        </div>

        <div className="w-3/4 md:max-w-[300px] flex flex-col md:flex-row mb-5 mt-8 mx-auto md:rounded-lg p-8 bg-tranparent relative">
          <img
            src="/images/access.jpg"
            className="h-full w-full object-cover"
            alt="Access control"
            style={{ backgroundColor: 'transparent' }}
          />
        </div>
      </Carousel>

      <div className="w-full text-center max-w-[70rem] bg-grey mb-4 mt-8 mx-auto rounded-lg p-8">
        <Typography
          variant="h4"
          color="white"
          className="font-bold text-3xl mb-8 mx-auto"
        >
          What can you do with eVault?
        </Typography>
        <div className="flex flex-wrap justify-between">
          <Card className="w-full md:w-[30%] bg-gray-200 mb-4 p-4">
            <Typography variant="h5" color="black" className="mb-4 text-1xl ">
              UPLOAD DOCUMENTS
            </Typography>
            <Typography color="black" className="text-md text-xl font-normal">
              Seamlessly upload your legal documents to LegalChain eVault, where they will
              be stored securely and permanently.
            </Typography>
          </Card>
          <Card className="w-full md:w-[30%] bg-teal-500 mb-4 p-4">
            <Typography variant="h6" color="black" className="mb-4 text-1xl ">
              SHARE DOCUMENTS
            </Typography>
            <Typography color="black" className="text-md text-xl font-normal">
              Collaborate effortlessly by sharing legal documents with authorized
              stakeholders, promoting efficient communication within your legal team.
            </Typography>
          </Card>
          <Card className="w-full md:w-[30%] bg-gray-200 mb-4 p-4">
            <Typography variant="h6" color="black" className="mb-4 text-1xl ">
              TRACK HISTORY
            </Typography>
            <Typography color="black" className="text-md text-xl font-normal">
              Track the complete history of your legal documents on the blockchain,
              benefiting from a tamper-resistant and auditable record of all transactions
              and changes.
            </Typography>
          </Card>
        </div>
      </div>
      <footer className="flex w-full md:w-10/10 flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t py-6 text-center md:justify-center bg-white text-white shadow-md ">
      {/* <Chip value="LegalChain" className="mr-10" /> */}
        <Typography color="black" className="font-normal">
          &copy; 2024 LEGAL CHAIN- All Rights Reserved
        </Typography>
        <ul className="flex flex-wrap items-center gap-y-20 gap-x-10">
          <li >
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
