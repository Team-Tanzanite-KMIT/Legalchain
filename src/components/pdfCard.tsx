"use client";

import React, { useState } from "react";
import { Asset } from "@/chaincode/types";
import { Card, Typography } from "@/components/MtComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DocumentTextIcon } from "@heroicons/react/24/solid";
import { Button, Menu, MenuHandler, MenuList, MenuItem } from "@material-tailwind/react";

import {
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";


export function PdfCard({ pdfInfo }: { pdfInfo: Asset }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Card className="flex h-36 w-36 cursor-pointer flex-col items-center border-[1px] border-[#363636] bg-[#18212f] duration-150 hover:-translate-y-2 relative">
      <DocumentTextIcon color="#c9d7e3" className="h-24 w-24"></DocumentTextIcon>

      <div className="flex w-[100%] flex-row">
        <Typography className="m-auto flex-auto font-medium" color="white">
          {pdfInfo.ID}
        </Typography>

        <Menu open={menuOpen} handler={handleMenuToggle}>
          <MenuHandler>
            <Button className="flex-auto pl-1 pr-1 bg-transparent">
              <FontAwesomeIcon
                width={5}
                icon={faEllipsisVertical}
                color="white"
                className=""
              ></FontAwesomeIcon>
            </Button>
          </MenuHandler>

          <MenuList className="flex flex-col bg-[#18212f] text-white border-[1px] border-[#363636]">
            <Button className="m-0 bg-transparent hover:bg-[#2d3d57] border-spacing-0 hover:border-none">View</Button>
            <Button className="m-0 bg-transparent hover:bg-[#2d3d57] border-spacing-0 hover:border-none">Edit</Button>
            <Button className="m-0 bg-transparent hover:bg-[#2d3d57] border-spacing-0 hover:border-none">Delete</Button>
          </MenuList>
        </Menu>
      </div>
    </Card>
  );
}