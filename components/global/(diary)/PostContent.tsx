import React from "react";
import Image from "next/image";
import { IDiaries } from "@/utils/supabase";
import Link from "next/link";

const PostContent = (props: IDiaries): React.ReactElement => {
  const { diary_id, title, username, email, content, avatar } = props;
  return (
    <Link href={`/diary/${diary_id}`}>
      <div className="flex flex-col card card-body card-bordered shadow-lg bg-base-300 cursor-pointer duration-300 ease-in-out hover:shadow-xl hover:bg-secondary hover:scale-[101%] hover:text-base-300 h-48 max-h-48">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center overflow-hidden">
            <Image
              src={(avatar as string) || "https://via.placeholder.com/150"}
              alt="User Image"
              width={48}
              height={48}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">
              {username ? (
                username
              ) : (
                <span className="italic text-base">(No username)</span>
              )}
            </p>
            <p className="text-sm font-medium italic">{email}</p>
          </div>
        </div>
        <div className="flex-1 w-full overflow-hidden">
          <h3 className="text-lg font-semibold mb-1">
            {title ? (
              title
            ) : (
              <span className="italic text-base">(No Title)</span>
            )}
          </h3>
          <p className="leading-normal max-w-full truncate">{content}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostContent;
