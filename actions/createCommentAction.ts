"use server";

import { getUserData } from "@/utils/clerk";
import { IComment, supabase } from "@/utils/supabase";
import { randomUUID } from "crypto";
import { Redirect } from "next";
import { redirect } from "next/navigation";

export const createCommentAction = async (
  formData: FormData
): Promise<Redirect> => {
  const content = formData.get("comment") as string;
  const diary_id = formData.get("diary_id");
  const comment_id = randomUUID();
  const { username, avatar, email } = await getUserData();

  const data: IComment = {
    comment_id,
    username,
    avatar,
    email,
    content,
  };

  const { data: getComments } = await supabase
    .from("diaries")
    .select("comments")
    .eq("id", diary_id)
    .single();

  const existingComments: Array<IComment> = getComments?.comments || [];

  const newComments = [...existingComments, data];

  await supabase
    .from("diaries")
    .update({ comments: newComments })
    .eq("id", diary_id);

  redirect(`/diary/${diary_id}`);
};
