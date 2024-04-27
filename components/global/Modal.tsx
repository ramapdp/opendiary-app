import React from "react";
import ReactDOM from "react-dom";

type ParamsProps = {
  onClose: () => void;
  children: React.ReactElement;
  title: string;
};

const Modal = ({
  onClose,
  children,
  title,
}: ParamsProps): React.ReactElement => {
  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = (
    <div className="fixed top-0 left-0 h-full w-full flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="h-fit w-fit">
        <div className="bg-base-300 h-full w-full rounded-[15px] p-4">
          <div className="flex flex-row">
            <h1 className="flex flex-1 font-bold text-lg items-center">{title}</h1>
            <button onClick={handleCloseClick} className="hover:text-primary" title="Close Modal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="pt-4">{children}</div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root") ?? document.body
  );
};

export default Modal;
