"use client";

import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
} from "@chakra-ui/react";
import classnames from "classnames";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Skeleton from "react-loading-skeleton";

const NavBar = () => {
  const currentPath = usePathname();
  const { status, data: session } = useSession();

  const links = [
    { label: "Buy", href: "/listings/lists" },
    { label: "Sell", href: "/sell" },
    { label: "Rent", href: "/rent" },
  ];

  if (status === "loading") return <Skeleton width="3rem" />;

  return (
    <>
      <Stack direction="row" justify="space-between" bgColor="gray.100" pt="5">
        <Stack direction="row" align="center">
          <Link href="/" className="mr-5 ml-10 pb-2">
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

        <Stack direction="row">
          {status === "authenticated" && (
            <Menu autoSelect={false}>
              <MenuButton>
                <Avatar src={session.user!.image!} ignoreFallback mr="10" />
              </MenuButton>
              <MenuList>
                <MenuItem _hover={{ bg: "white" }}>
                  {session.user?.email}
                </MenuItem>
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
          )}
          {status === "unauthenticated" && (
            <Stack direction="row">
              <Link href="/api/auth/signup">
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
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default NavBar;
