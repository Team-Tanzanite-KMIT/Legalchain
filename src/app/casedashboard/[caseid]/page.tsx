"use client";

import Image from "next/image";

import { ChangeEvent } from "react";
import { Card, Typography } from "@/components/MtComponents";

import { getServerSession } from "next-auth";
import SidebarWithLogo from "@/components/sidebar";

import getLoginDetails from "@/components/getLoginDetails";

interface FileUploadProps {
  onFileUpload?: (base64: string | null) => void;
}

// const getLoginDetails = async () => {
//   return await getServerSession();
// };

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  // const [fileBase64, setFileBase64] = useState<string | null>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    let session = await getLoginDetails();

    if (!event.target.files || event.target.files.length === 0) {
      return; // User canceled file selection
    }
    const file = event.target.files?.[0];

    sendFileToApi(
      file.name,
      Buffer.from(await file.arrayBuffer()).toString("base64"),
      session?.user?.email!
    );

  };

  const sendFileToApi = (filename: string, base64Data: string, email: string) => {
    const apiEndpoint = "/api/documents";

    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: base64Data,
        filename: filename,
        owner: email,
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
    <div className="my-8 flex flex-col items-center justify-center">
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
        className="flex cursor-pointer items-center justify-center rounded-md border border-solid border-blue-700 px-3 py-2"
      >
        <div className="text-center text-sm font-medium text-blue-700">Upload</div>
      </label>
      {/* {fileBase64} */}
    </div>
  );
};

export default function caseDashboard() {
  const cases = ["Case 1", "Case 2", "Case 3"];

  const handleFileUpload = (base64: string | null) => {
    // console.log("Uploaded file ", base64);
  };
  return (
    <div className="flex">
      <SidebarWithLogo />
      <div className="bg-grey rounded--lg mx-auto mb-4 mt-8 w-full max-w-[70rem] p-8 text-center">
        <Card className="mb-4 w-full bg-gray-200 p-4 md:w-[30%]">
          <Typography variant="h3" color="black" className="mb-4 text-xl">
            Upcoming events
          </Typography>

          <>
            <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-20">
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
          </>
        </Card>

        <div className="mt-8 flex w-full flex-1 flex-col items-center justify-start gap-[42px] md:mt-0">
          <div className="mt-[13px] flex w-full flex-row items-center justify-between md:gap-10">
            <h1 className="text-[28px] font-bold sm:text-2xl md:text-[26px]">
              Attached Docs
            </h1>
            <FileUpload onFileUpload={handleFileUpload} />
          </div>

          {/* <div className="flex w-full flex-col items-center justify-start gap-6">
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
                  <div className="font-medium text-blue-A700 text-left text-sm">
                    Upload
                  </div>
                </button>
              </div> 
          </div> */}
        </div>
      </div>
    </div>
  );
}
