"use client";
import { createCommentAction } from "@/actions/createCommentAction";
import React, { RefObject, useRef } from "react";

type ParamsProps = {
  diary_id: string;
};
const AddCommentForm = ({ diary_id }: ParamsProps) => {
  const formRef: RefObject<HTMLFormElement> = useRef<HTMLFormElement>(null);
  
  const resetForm = (): void => {
    setTimeout(() => {
      formRef.current?.reset();
    }, 1000);
  };

  return (
    <form action={createCommentAction} onSubmit={resetForm} ref={formRef}>
      <div className="form-control">
        <input type="hidden" value={diary_id} name="diary_id" />
        <textarea
          className="input input-bordered h-52 textarea"
          placeholder="Write your comment here..."
          name="comment"
        />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit">
          + Add Comment
        </button>
      </div>
    </form>
  );
};

export default AddCommentForm;
