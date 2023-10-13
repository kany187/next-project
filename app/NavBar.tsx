"use client";

import Link from "next/link";
import React from "react";
import logo from "../public/logo.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classnames from "classnames";
import { Button, Stack } from "@chakra-ui/react";

const NavBar = () => {
  const currentPath = usePathname();

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
          <Link href="/login">
            <Button fontWeight={400} fontSize={"sm"}>
              Log in
            </Button>
          </Link>
          <Link href="/signup">
            {" "}
            <Button
              fontWeight={400}
              fontSize={"sm"}
              colorScheme="teal"
              _hover={{ bg: "teal.300" }}
            >
              Sign in
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
};

export default NavBar;
