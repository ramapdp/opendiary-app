import AddDiaryForm from "@/components/auth/AddDiaryForm";
import Wrapper from "@/components/global/Wrapper";
import React from "react";

const page = (): React.ReactElement => {
  return (
    <Wrapper>
      <AddDiaryForm />
    </Wrapper>
  );
};

export default page;
