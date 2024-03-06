"use client";

import Image from "next/image";

import { ChangeEvent } from "react";
import { Card, Typography } from "@/components/MtComponents";

import { getServerSession } from "next-auth";
import SidebarWithLogo from "@/components/sidebar";

import { PdfCard } from "@/components/pdfCard";

import getLoginDetails from "@/components/getLoginDetails";
import { Asset } from "@/chaincode/types";

interface FileUploadProps {
  onFileUpload?: (base64: string | null) => void;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    let session = await getLoginDetails();

    if (!event.target.files || event.target.files.length === 0) {
      return; // User canceled file selection
    }
    const file = event.target.files?.[0];

    sendFileToApi(
      file.name,
      Buffer.from(await file.arrayBuffer()).toString("base64"),
      // @ts-ignore
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

        <div className="mt-8 flex w-full flex-1 flex-col items-start justify-start gap-[42px] md:mt-0">
          <div className="mt-[13px] flex w-full flex-row items-center justify-between md:gap-10">
            <h1 className="text-[28px] font-bold sm:text-2xl md:text-[26px]">
              Attached Docs
            </h1>
            <FileUpload onFileUpload={handleFileUpload} />
          </div>
        </div>
        <PdfCard
          pdfInfo={
            { ID: "casedoc1", AccessList: ["user1", "user2"], fileType: "pdf" } as Asset
          }
        ></PdfCard>
      </div>
    </div>
  );
}
