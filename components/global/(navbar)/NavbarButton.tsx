"use client";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const NavbarButton = (): React.ReactElement => {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded)
    return (
      <div className="w-3 justify-center">
        <span className="loading loading-spinner loading-xs"></span>
      </div>
    );

  return isSignedIn ? (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1 items-center">
        {/* <li>
          <Link href={"/dashboard"}>Dashboard</Link>
        </li> */}
        {/* <li>
          <details>
            <summary>Manage Diary</summary>
            <ul className="p-2 bg-base-100 rounded-t-none">
              <li>
                <Link href={"/dashboard/my-diary"}>List Diary</Link>
              </li>
            </ul>
          </details>
        </li> */}
        <li>
          <Link href={"/dashboard/my-diary"}>My Diary</Link>
        </li>
        <li>
          <Link href={"/dashboard/profile"}>Profile</Link>
        </li>
        <li>
          <UserButton afterSignOutUrl="/" />
        </li>
      </ul>
    </div>
  ) : (
    <div className="flex-none">
      <ul className="menu menu-horizontal items-center px-1">
        <li>
          <Link href="/sign-in">Sign in</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavbarButton;
