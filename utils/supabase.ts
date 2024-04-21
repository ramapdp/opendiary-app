import { createClient } from "@supabase/supabase-js";
import { UUID } from "crypto";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.SUPABASE_SECRET_KEY as string
);

export interface IDiaries {
  diary_id?: number;
  title?: string | null;
  content: string;
  username?: string | null;
  email: string | undefined;
  avatar?: string | null;
  comments?: Array<IComment> | null;
  created_at?: string;
}

export interface IComment extends IDiaries {
  comment_id: UUID;
}
