import AddCommentForm from "@/components/auth/AddCommentForm";
import CommentList from "@/components/global/(diary)/CommentList";
import Wrapper from "@/components/global/Wrapper";
import { supabase } from "@/utils/supabase";
import Image from "next/image";
import React from "react";

type ParamsProps = {
  params: {
    id: string;
  };
};

const page = async ({ params }: ParamsProps): Promise<React.ReactElement> => {
  const { id } = params;
  const { data, error } = await supabase
    .from("diaries")
    .select("*")
    .eq("id", id)
    .single();

  const posted_at = new Date(data.created_at).toLocaleString();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Wrapper>
      <>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col mx-auto justify-center">
            <Image
              src={data.avatar}
              alt={data.avatar}
              width={250}
              height={250}
            />
            <i className="text-center">posted at {posted_at}</i>
          </div>
          <h3 className="italic">~{data.username || data.email}</h3>
          <p>{data.content}</p>
        </div>
        {data.comments && data.comments.length > 0 && (
          <CommentList diary_id={id} />
        )}
        <AddCommentForm diary_id={id} />
      </>
    </Wrapper>
  );
};

export default page;
