"use client";

import {
  Avatar,
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Skeleton from "react-loading-skeleton";
import ImageSkeleton from "./components/ImageSkeleton";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <Stack direction="row" justify="space-between" bgColor="gray.100" pt="5">
        <NavLinks />
        <AuthStatus />
      </Stack>
    </>
  );
};

const NavLinks = () => {
  const currentPath = usePathname();
  const links = [
    { label: "Buy", href: "/dashboard/listings/lists" },
    { label: "Sell", href: "/sell" },
    { label: "Rent", href: "/rent" },
  ];
  return (
    <Stack direction="row" align="center">
      <Link href="/" className="mr-5 ml-10 pb-2">
        {/* <ImageSkeleton
     src="https://res.cloudinary.com/dcmbyy4e7/image/upload/v1697264845/congo-estate/rcnp3oogsmrzdbzbv92n.jpg"
     width={70}
     height={170}
     alt="Logo"
   /> */}
        <Image
          src="https://res.cloudinary.com/dcmbyy4e7/image/upload/v1697264845/congo-estate/rcnp3oogsmrzdbzbv92n.jpg"
          width={70}
          height={170}
          alt="Logo"
        />
      </Link>
      <div className="tabs">
        <ul className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              className={classnames({
                "tab tab-bordered tab-active": link.href === currentPath,
                "tab tab-border-none": link.href !== currentPath,
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          ))}
        </ul>
      </div>
    </Stack>
  );
};
const AuthStatus = () => {
  const { status, data: session } = useSession();

  if (status === "loading")
    return (
      <Box mr="5">
        <Skeleton circle={true} width="4rem" height={60} />
      </Box>
    );

  if (status === "unauthenticated")
    return (
      <Stack direction="row">
        <Link href="/register">
          <Button fontWeight={400} fontSize={"sm"}>
            Sign up
          </Button>
        </Link>
        <Link href="/api/auth/signin">
          <Button fontWeight={400} fontSize={"sm"}>
            Log in
          </Button>
        </Link>
      </Stack>
    );

  return (
    <Stack direction="row">
      <Menu autoSelect={false}>
        <MenuButton>
          <Avatar src={session!.user!.image!} ignoreFallback mr="10" />
        </MenuButton>
        <MenuList>
          <MenuItem _hover={{ bg: "white" }}>{session!.user?.email}</MenuItem>
          <MenuItem _hover={{ bg: "white" }}>
            <Link href="/api/auth/signout">
              {" "}
              <Button
                fontWeight={400}
                fontSize={"sm"}
                colorScheme="teal"
                width="100"
                // _hover={{ bg: "teal.300" }}
              >
                Log out
              </Button>
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Stack>
  );
};
export default NavBar;
