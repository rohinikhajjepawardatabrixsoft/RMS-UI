import React from 'react';

interface ModalProps {
  // setAddInstruct: React.Dispatch<React.SetStateAction<boolean>>;
  removemodule: (value?: any) => void;
  showDeleteModal: (value?: any) => void;
  delId: any;
}

const DeleteModal: React.FC<ModalProps> = (props: ModalProps) => {
  const { removemodule, showDeleteModal, delId } = props;
  return (
    <React.Fragment>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0  h-full bg-white opacity-70"
          onClick={() => showDeleteModal(false)}
        ></div>
        <div className="flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 items-center min-h-screen px-4 py-6">
          <div className="relative w-full max-w-md p-2 mx-auto rounded-lg bg-white shadow-2xl border border-gray-400">
            <div className="mx-auto">
              <div className="flex justify-end">
                <button
                  className="bg-white p-1"
                  onClick={() => {
                    showDeleteModal(false);
                    removemodule(delId);
                    // ondelsetstate(true, namemodule);
                  }}
                >
                  <svg
                    className="fill-current w-4 h-4 border-none text-black"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
              <div className="mt-2 font-medium text-center text-sm mx-3">
                <p className="text-black font-medium font-md font-poppins mb-0">
                  Are you sure you want to permanently delete this Record!
                </p>
                <p className="text-xs leading-relaxed text-gray-500">
                  After delete you are not able to recover it.
                </p>
              </div>
              <div className="items-center gap-2 mt-4 sm:flex mx-auto justify-end">
                <button
                  className="ml-2 font-semibold text-gray-500 py-1 px-4 border border-blue-500 rounded shadowm-sm"
                  onClick={() => showDeleteModal(false)}
                >
                  <span className="font-medium text-sm font-bold">Cancel</span>
                </button>
                <button
                  className="ml-2 bg-red-500 text-white font-semibold py-1 px-4 border border-red rounded shadow-sm"
                  onClick={() => {
                    showDeleteModal(false);
                    removemodule(delId);
                    // ondelsetstate(true, namemodule);
                  }}
                >
                  <span className="font-medium text-sm font-bold">Delete</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DeleteModal;
