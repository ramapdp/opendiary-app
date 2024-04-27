"use client";
import Link from "next/link";
import React from "react";
import NavbarButton from "./NavbarButton";
import { usePathname } from "next/navigation";

const Navbar = (): React.ReactElement => {
  const pathname = usePathname();

  if (pathname === "/sign-in") {
    return <></>;
  }

  return (
    <div className="navbar bg-base-100">
      <div className="container flex mx-auto">
        <div className="flex-1">
          <Link href={"/"} className="font-bold text-xl">
            OpenDiary
          </Link>
        </div>
        <NavbarButton />
      </div>
    </div>
  );
};

export default Navbar;
