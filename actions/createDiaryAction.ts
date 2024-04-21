"use server";
import { getUserData } from "@/utils/clerk";
import { IDiaries, supabase } from "@/utils/supabase";
import { Redirect } from "next";
import { redirect } from "next/navigation";

/**
! REQUIREMENT of Diary Table:
  USER: email, username, avatar
  DIARY: title, content, comments, created_at

 */

export const createDiaryAction = async (
  formData: FormData
): Promise<Redirect> => {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const { username, avatar, email } = await getUserData();

  const data: IDiaries = { title, content, username, avatar, email };

  await supabase.from("diaries").insert(data);

  redirect("/dashboard/my-diary");
};
