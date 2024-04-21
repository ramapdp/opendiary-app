import { SignIn } from "@clerk/nextjs";
import React from "react";

const page = (): React.ReactElement => {
  return (
    <div className="container flex mx-auto justify-center">
      <SignIn />
    </div>
  );
};

export default page;
