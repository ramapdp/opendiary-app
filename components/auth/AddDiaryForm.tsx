import React from "react";
import { createDiaryAction } from "@/actions/createDiaryAction";
import Modal from "../global/Modal";

type ParamsProps = {
  onClose: () => void;
};

const AddDiaryForm = ({ onClose }: ParamsProps): React.ReactElement => {
  const onSubmit = () => {
    onClose();
  };
  
  return (
    <Modal onClose={onClose} title="Add New Diary">
      <form action={createDiaryAction} className="w-[500px]">
        <div className="form-control">
          <label className="label">
            <span className="label-text">
              Title <i>(optional)</i>
            </span>
          </label>
          <input type="title" name="title" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Diary</span>
          </label>
          <textarea
            className="input input-bordered textarea h-52"
            name="content"
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" type="submit" onSubmit={onSubmit}>
            + Add New Diary
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddDiaryForm;
