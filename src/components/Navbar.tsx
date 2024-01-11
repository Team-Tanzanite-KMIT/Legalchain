"use client";
import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
import { Session } from "next-auth";
import Link from "next/link";
function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="h5"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4"><Link href={"/"}>Home</Link></ListItem>
      </Typography>
      {/* <NavListMenu /> */}
      <Typography
        as="a"
        href="/about"
        variant="small"
        color="blue-gray"
        className="font-medium"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">
          About Us
        </ListItem>
      </Typography>
    </List>
  );
}

function SessionManagementButtons({ isInCollapse, session }: { isInCollapse: boolean, session: Session | null }) {
  return (<>
    <Button variant={(isInCollapse) ? "outlined" : "text"} size="md" color="blue-gray" fullWidth onClick={() => {
      // !(session) ? "Log In" : signOut();
      if (session) {
        signOut();
      }
    }}>
      {/* Log In */}
      {!(session) ? <Link href="/login">Log In</Link> : "Sign Out"}
    </Button>
    {!session && <Button variant="gradient" size="md" className="h-max" fullWidth>
      <Link href="/register">Register</Link>
    </Button>}
  </>)
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);

  const { data: session, status } = useSession()

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false),
    );
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2 ">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="/"
          variant="h4"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
        >
          LegalChain
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          <SessionManagementButtons isInCollapse={false} session={session} />

        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <SessionManagementButtons isInCollapse={true} session={session} />
        </div>
      </Collapse>
    </Navbar>
  );
}

export default NavbarWithMegaMenu;