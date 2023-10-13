"use client";

import Link from "next/link";
import React from "react";
import logo from "../public/logo.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Buy", href: "/listings/lists" },
    { label: "Sell", href: "/sell" },
    { label: "Rent", href: "/rent" },
  ];
  return (
    <>
      <Stack direction="row" justify="space-between" bgColor="gray.100" pt="5">
        <Stack direction="row">
          <Link href="/" className="mr-5 ">
            <Image src={logo} alt="Logo" className="h-12 w-auto" />
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

        <Stack direction="row">
          {status === "authenticated" && (
            <Menu>
              <MenuButton>
                <Avatar src={session.user!.image!} ignoreFallback />
              </MenuButton>
              <MenuList>
                <MenuItem></MenuItem>
              </MenuList>
            </Menu>
            // <Link href="/api/auth/signout">
            //   {" "}
            //   <Button
            //     fontWeight={400}
            //     fontSize={"sm"}
            //     colorScheme="teal"
            //     _hover={{ bg: "teal.300" }}
            //   >
            //     Log out
            //   </Button>
            // </Link>
          )}
          {status === "unauthenticated" && (
            <Link href="/api/auth/signin">
              <Button fontWeight={400} fontSize={"sm"}>
                Log in
              </Button>
            </Link>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default NavBar;
