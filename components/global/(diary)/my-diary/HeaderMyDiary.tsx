"use client";
import React, { useState } from "react";
import AddDiaryForm from "@/components/auth/AddDiaryForm";

const HeaderMyDiary = () => {
  const [showModal, setShowModal] = useState(false);

  const handleAddDiary = () => {
    setShowModal(true);
  };

  return (
    <>
      <div className="flex flex-row mb-3 py-1">
        <h1 className="flex flex-1 items-center text-2xl font-bold">
          My Repository...
        </h1>
        <div>
          <button className="btn btn-ghost" onClick={handleAddDiary}>
            + Add New Diary
          </button>
        </div>
      </div>
      {showModal && <AddDiaryForm onClose={() => setShowModal(false)} />}
    </>
  );
};

export default HeaderMyDiary;
