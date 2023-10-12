"use client";

import Link from "next/link";
import React from "react";
import logo from "../public/logo.jpg";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const NavBar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Buy", href: "/listings" },
    { label: "Sell", href: "/sell" },
    { label: "Rent", href: "/rent" },
  ];
  return (
    <>
      <div className=" bg-gray-100 text-black">
        <div className="navbar max-w-7x1 m-auto flex-col sm:flex-row gap-2">
          <div className="flex-1 ml-40">
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
          </div>
          <div className="flex space-x-4 mr-40">
            <Link href="/login">Log in</Link>
            <Link href="/signup" className="btn btn-ghost normal-case">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
