import Link from "next/link";
import React from "react";
import NavbarButton from "./NavbarButton";

const Navbar = (): React.ReactElement => {
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
