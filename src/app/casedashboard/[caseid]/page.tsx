"use client";

import Image from 'next/image';

import React, { ChangeEvent, useState } from "react";
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
interface FileUploadProps {
  onFileUpload?: (base64: string | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [fileBase64, setFileBase64] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setFileBase64(result.split(",")[1]);

        if (onFileUpload) {
          onFileUpload(result.split(",")[1]);
        }

        sendFileToApi(result.split(",")[1]);
      };
      reader.readAsDataURL(file);
    }
  };

  const sendFileToApi = (base64Data: string) => {
    const apiEndpoint = "/api/documents";

    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: base64Data,
        filename: "test.pdf",
        owner: "r@g.com",
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text();
      })
      .then((data) => {
        console.log("API Response:", data);
      })
      .catch((error) => {
        console.error("Error sending file to API:", error);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center my-8">
      <input
        type="file"
        accept="*/*"
        onChange={handleFileChange}
        className="hidden"
        id="fileInput"
        multiple={true}
      />
      <label
        htmlFor="fileInput"
        className="border border-blue-700 border-solid cursor-pointer flex items-center justify-center px-3 py-2 rounded-md"
      >
        <div className="font-medium text-blue-700 text-center text-sm">Upload</div>
      </label>
      {fileBase64 && (
        <Image
          src={`data:image/png;base64,${fileBase64}`}
          alt="Uploaded"
          className="mt-3 max-w-full"
        />
      )}
    </div>
  );
};

export function SidebarWithLogo() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value: React.SetStateAction<number>) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card className="h-screen w-screen max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-deep-orange-50 ">
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src="/logo.png" alt="brand" className="h-10 w-10" />
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
  const cases = ["Case 1", "Case 2", "Case 3"];

  const handleFileUpload = (base64: string | null) => {
    console.log("Uploaded file ", base64);
  };
  return (
    <div className="flex">
      <SidebarWithLogo />
      <div className="w-full text-center max-w-[70rem] bg-grey mb-4 mt-8 mx-auto rounded--lg p-8">
        <Card className="w-full md:w-[30%] bg-gray-200 mb-4 p-4">
          <Typography variant="h3" color="black" className="mb-4 text-xl">
            Upcoming events
          </Typography>

          <Typography>
            <ul className="flex flex-wrap items-center justify-center gap-y-20 gap-x-10">
              {cases.map((c, i) => (
                <li>
                  <Typography
                    as="a"
                    href="#"
                    color="black"
                    className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
                    key={`case${i}`}
                  >
                    {c}
                  </Typography>
                </li>
              ))}
            </ul>
          </Typography>
        </Card>

        <div className="flex flex-1 flex-col gap-[42px] items-center justify-start md:mt-0 mt-8 w-full">
          <div className="flex flex-row mt-[13px] md:gap-10 items-center justify-between w-full">
            <h1 className="sm:text-2xl md:text-[26px] text-[28px] font-bold">
              Attached Docs
            </h1>
            <FileUpload onFileUpload={handleFileUpload} />
          </div>

          <div className="flex flex-col gap-6 items-center justify-start w-full">
            {/* <div className="bg-gray-50_01 flex flex-col gap-3 h-[196px] md:h-auto items-center justify-center max-w-[1022px] outline outline-[2px] outline-blue-A700 sm:px-5 px-8 py-[15px] rounded-md w-full">
                // <svg
                //   xmlns="http://www.w3.org/2000/svg"
                //   fill="none"
                //   viewBox="0 0 24 24"
                //   strokeWidth={1.5}
                //   stroke="currentColor"
                //   className="w-[26px] h-[26px]"
                // >
                //   <path
                //     strokeLinecap="round"
                //     strokeLinejoin="round"
                //     d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
                //   />
                // </svg>
  
                <p className="text-blue_gray-600 text-lg w-auto font-medium">
                  Add a File Here or
                </p>
                <button className="border border-blue-A700 border-solid cursor-pointer flex items-center justify-center min-w-[96px] pr-3 py-2 rounded-md">
                  <div className="font-medium text-blue-A700 text-left text-sm">
                    Upload
                  </div>
                </button>
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

function setFileBase64(arg0: string) {
  throw new Error("Function not implemented.");
}
