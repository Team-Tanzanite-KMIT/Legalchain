"use client";

import { Card, Typography, IconButton, Carousel, Button } from "@material-tailwind/react";
// import 'animate.css/animate.min.css';
export default function HorizontalCard() {
  return (
    <div className="mb-4 flex w-full flex-col bg-black">
      <div className="mx-auto mb-5 mt-8 flex flex-col bg-white p-8 md:max-h-[1200] md:max-w-[1600px] md:flex-row md:rounded-lg ">
        <div className="order-2 mb-8 flex w-full flex-col justify-center md:mb-0 md:w-3/5">
          <Typography
            variant="h6"
            color="black"
            className="font-sans-serif mb-4 text-center text-4xl md:text-4xl lg:text-6xl"
          >
            EVAULT: The future of <span style={{ color: "red" }}>Legal records</span>{" "}
            keeping
          </Typography>
          <Typography
            color="black"
            className="font-sans-serif mb-8 text-center text-lg lg:text-xl"
          >
            Revolutionize legal record keeping - Secure, transparent, accessible for all.
            Upload, share, track your cases with confidence. The blockchain-powered
            justice revolution starts here.
          </Typography>
        </div>
        <div className="order-1 flex w-full items-center justify-center md:order-2 md:w-2/5">
          <img
            src="/images/img_group665.png"
            className="h-4/5 w-auto rounded-lg object-cover md:h-4/5"
            alt="Legal Records"
          />
        </div>
      </div>

      <Typography
        variant="h4"
        color="yellow"
        className="mx-auto mb-8 font-serif text-xl font-bold md:text-2xl lg:text-3xl"
      >
        Design and Architecture of the EVault System
      </Typography>

      <Carousel transition={{ duration: 2 }} className="rounded-xl">
        <div className="bg-tranparent relative mx-auto mb-5 mt-8 flex w-3/4 flex-col p-8 md:max-h-[300px] md:max-w-[300px] md:flex-row md:rounded-lg">
          <img
            src="/images/arch.jpg"
            className="h-full w-full object-cover"
            alt="Blockchain Architecture"
            style={{ backgroundColor: "transparent" }}
          />
        </div>

        <div className="bg-tranparent relative mx-auto mb-5 mt-8 flex w-3/4 flex-col p-8 md:max-w-[300px] md:flex-row md:rounded-lg">
          <img
            src="/images/datast.jpg"
            className="h-full w-full object-cover"
            alt="Data storage"
            style={{ backgroundColor: "transparent" }}
          />
        </div>

        <div className="bg-tranparent relative mx-auto mb-5 mt-8 flex w-3/4 flex-col p-8 md:max-w-[300px] md:flex-row md:rounded-lg">
          <img
            src="/images/access.jpg"
            className="h-full w-full object-cover"
            alt="Access control"
            style={{ backgroundColor: "transparent" }}
          />
        </div>
      </Carousel>

      <div className="bg-grey mx-auto mb-4 mt-8 w-full max-w-[70rem] rounded-lg p-8 text-center">
        <Typography
          variant="h4"
          color="yellow"
          className="mx-auto mb-8 text-3xl font-bold"
        >
          What can you do with eVault?
        </Typography>
        <div className="flex flex-wrap justify-between">
          <Card className="mb-4 w-full bg-gray-200 p-4 md:w-[30%]">
            <Typography variant="h5" color="black" className="text-1xl mb-4 ">
              UPLOAD DOCUMENTS
            </Typography>
            <Typography color="black" className="text-md text-xl font-normal">
              Seamlessly upload your legal documents to LegalChain eVault, where they will
              be stored securely and permanently.
            </Typography>
          </Card>
          <Card className="mb-4 w-full bg-teal-500 p-4 md:w-[30%]">
            <Typography variant="h6" color="black" className="text-1xl mb-4 ">
              SHARE DOCUMENTS
            </Typography>
            <Typography color="black" className="text-md text-xl font-normal">
              Collaborate effortlessly by sharing legal documents with authorized
              stakeholders, promoting efficient communication within your legal team.
            </Typography>
          </Card>
          <Card className="mb-4 w-full bg-gray-200 p-4 md:w-[30%]">
            <Typography variant="h6" color="black" className="text-1xl mb-4 ">
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
      <footer className="md:w-10/10 flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 border-t bg-white py-6 text-center text-white shadow-md md:justify-center ">
        {/* <Chip value="LegalChain" className="mr-10" /> */}
        <Typography color="black" className="font-normal">
          &copy; 2024 LEGAL CHAIN- All Rights Reserved
        </Typography>
        <ul className="flex flex-wrap items-center gap-x-10 gap-y-20">
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
