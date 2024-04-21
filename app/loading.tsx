import Wrapper from "@/components/global/Wrapper";
import React from "react";

const loading = () => {
  return (
    <Wrapper>
      <div className="flex items-center justify-center h-full">
        <span className="loading loading-ring loading-lg"></span>
      </div>
    </Wrapper>
  );
};

export default loading;
