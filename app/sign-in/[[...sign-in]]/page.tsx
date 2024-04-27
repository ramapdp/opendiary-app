import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const page = (): React.ReactElement => {
  return (
    <div className="md:container flex mx-auto justify-center items-center h-screen">
      <div className="flex flex-row p-6 gap-16 rounded-[32px] shadow-lg bg-base-200 hover:shadow-base-300 hover:scale-[100.2%] transition-all ease-in-out duration-300">
        <div className="flex flex-col justify-center">
          <Link href={"/"} className=" cursor-pointer hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </Link>
          <div className="flex flex-col flex-1 justify-center">
            <h1 className="font-semibold text-3xl text-white">Sign In</h1>
            <p className="text-sm text-gray-400">
              Please sign in to your account...
            </p>
          </div>
        </div>
        <SignIn />
      </div>
    </div>
  );
};

export default page;
