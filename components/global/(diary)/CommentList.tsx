import { IComment, supabase } from "@/utils/supabase";
import Image from "next/image";
import React from "react";

type ParamsProps = {
  diary_id: string;
};

const CommentList = async ({ diary_id }: ParamsProps) => {
  const { data, error } = await supabase
    .from("diaries")
    .select("*")
    .eq("id", diary_id)
    .single();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col gap-4 py-4 w">
      {data.comments.map((comment: IComment) => {
        return (
          <div
            className="ml-4 card card-body card-bordered p-4 bg-base-200"
            key={comment.comment_id}
          >
            <Image
              src={comment.avatar as string}
              alt={comment.avatar as string}
              width={50}
              height={50}
              className="rounded-full bg-primary"
            />
            <p>{comment.content}</p>
            <p>{comment.username || comment.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CommentList;
