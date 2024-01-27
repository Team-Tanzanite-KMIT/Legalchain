"use client"
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@/components/MtComponents";
import { ChangeEvent, useState } from "react";
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
import Link from "next/link";

export default function SidebarWithLogo() {
    const [open, setOpen] = useState(0);
  
    const handleOpen = (value: React.SetStateAction<number>) => {
      setOpen(open === value ? 0 : value);
    };
  
    return (
      <Card className="h-screen w-screen max-w-[20rem] bg-deep-orange-50 p-4 shadow-xl shadow-blue-gray-900/5 ">
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
          <Link href="/profile" >
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
            Profile
          </ListItem>
          </Link>
          <hr className="my-2 border-blue-gray-50" />
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
  