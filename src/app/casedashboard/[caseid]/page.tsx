"use client";

import Image from 'next/image';

import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  UserCircleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";


export function SidebarWithLogo() {
  const [open, setOpen] = React.useState(0);
  // const [openAlert, setOpenAlert] = React.useState(true);


  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };


  return (
    <Card className="h-screen w-screen max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-deep-orange-50 ">
      <div className="mb-2 flex items-center gap-4 p-4">
        <Image src="/logo.png" alt="brand" className="h-10 w-10"
        width={100} // Specify the desired width
        height={40} // Specify the desired height
         />
        <Typography color="black" className="text-2xl font-bold">
          Lawyer
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Uploaded Documents
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Shared Documents
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Recent Documents
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>


        <hr className="my-2 border-blue-gray-50" />
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
      </List>
    </Card>
  );
}
export default function caseDashboard() {
  return (
    <div className="flex">
      <SidebarWithLogo />
      <div className="w-full text-center max-w-[70rem] bg-grey mb-4 mt-8 mx-auto rounded--lg p-8">
        <Card className="w-full md:w-[30%] bg-gray-200 mb-4 p-4">
          <Typography variant="h3" color="black" className="mb-4 text-xl">
            Upcoming events
          </Typography>


          <Typography>
            <ul className="flex flex-wrap items-center gap-y-20 gap-x-10">
              <li>
                <Typography
                  as="a"
                  href="#"
                  color="black"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  Case 1
                </Typography>
              </li>


              <li>
                <Typography
                  as="a"
                  href="#"
                  color="black"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  Case 2
                </Typography>
              </li>


              <li>
                <Typography
                  as="a"
                  href="#"
                  color="black"
                  className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                >
                  Case 3
                </Typography>
              </li>
            </ul>
          </Typography>
        </Card>


        <div className="flex flex-1 flex-col gap-[42px] items-center justify-start md:mt-0 mt-8 w-full">
          <header className="flex items-center justify-center w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-full">
              <div className="header-row mt-[13px] mb-3.5">
                <h1 className="sm:text-2xl md:text-[26px] text-[28px] text-blue_gray-900 font-bold">
                  File Attachment
                </h1>
                {/* <div className="mobile-menu">
          <div></div>
          <div></div>
          <div></div>
        </div> */}
              </div>
            </div>
          </header>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="bg-gray-50_01 flex flex-col gap-3 h-[196px] md:h-auto items-center justify-center max-w-[1022px] outline outline-[2px] outline-blue-A700 sm:px-5 px-8 py-[15px] rounded-md w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-[26px] h-[26px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                />
              </svg>


              <p className="text-blue_gray-600 text-lg w-auto font-medium">
                Add a File Here or
              </p>
              <button className="border border-blue-A700 border-solid cursor-pointer flex items-center justify-center min-w-[96px] pr-3 py-2 rounded-md">
                <div className="font-medium text-blue-A700 text-left text-sm">Upload</div>
              </button>
            </div>
            <div className="flex flex-col gap-6 items-center w-full">
              {/* ... rest of the code */}
            </div>
          </div>
        </div>
      </div>


      <div></div>
    </div>
  );
}