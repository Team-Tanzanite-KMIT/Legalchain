"use client";

import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

const Header: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-[50rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-3/5 shrink-0 rounded-r-none"
        >
          <img
            src="/images/aboutus.jpeg"
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h6" color="gray" className="mb-4 uppercase">
            Our Moment
          </Typography>
          <Typography color="gray" className="mb-8 font-normal">
            In the intricate tapestry of legal innovation, our team of six dedicated
            individuals stands united, each weaving their unique thread into the creation
            of something extraordinary — the LegalChain eVault. Our journey began with a
            shared vision: to revolutionize legal record-keeping through the power of
            blockchain.
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default Header;
