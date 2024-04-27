import Wrapper from "@/components/global/Wrapper";
import PostContent from "@/components/global/(diary)/PostContent";
import { getUserData } from "@/utils/clerk";
import { supabase } from "@/utils/supabase";
import React from "react";
import HeaderMyDiary from "@/components/global/(diary)/my-diary/HeaderMyDiary";

const page = async (): Promise<React.ReactElement> => {
  const { email } = await getUserData();

  const { data, error } = await supabase
    .from("diaries")
    .select("*")
    .order("created_at", { ascending: false })
    .eq("email", email);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Wrapper>
      <>
        <HeaderMyDiary />
        <div className="grid md:grid-cols-3 gap-4">
          {data?.map((diary) => (
            <PostContent key={diary.id} diary_id={diary.id} {...diary} />
          ))}
        </div>
      </>
    </Wrapper>
  );
};

export default page;
