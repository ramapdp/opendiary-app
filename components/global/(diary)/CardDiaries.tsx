import React from "react";
import PostContent from "./PostContent";
import { supabase } from "@/utils/supabase";

const CardDiaries = async (): Promise<React.ReactElement> => {
  const { data, error } = await supabase
    .from("diaries")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="grid md:grid-cols-3 gap-4">
      {data?.map((diary) => (
        <PostContent key={diary.id} diary_id={diary.id} {...diary} />
      ))}
    </div>
  );
};

export default CardDiaries;
