import React from "react";
import { createDiaryAction } from "@/actions/createDiaryAction";

const AddDiaryForm = (): React.ReactElement => {
  return (
    <form action={createDiaryAction}>
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            Title <span className="italic">(optional)</span>
          </span>
        </label>
        <input type="title" name="title" className="input input-bordered" />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Diary</span>
        </label>
        <textarea className="input input-bordered textarea h-52" name="content" />
      </div>
      <div className="form-control mt-6">
        <button className="btn btn-primary" type="submit">
          + Add New Diary
        </button>
      </div>
    </form>
  );
};

export default AddDiaryForm;
