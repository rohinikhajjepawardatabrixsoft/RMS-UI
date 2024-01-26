import React from 'react';

interface ViewModalProp {
  removeModal: (value?: any) => void;
  showViewModal: (value?: any) => void;
  TableData: any;
  viewId: any;
}

const ViewModal = ({ TableData, removeModal, showViewModal, viewId }: ViewModalProp) => {
  const formData = TableData.data.find((item: any) => item.id === viewId);

  return (
    <React.Fragment>
      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div
          className="fixed inset-0  h-full bg-white opacity-70"
          onClick={() => showViewModal(false)}
        ></div>
        <div className="flex bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40 items-center min-h-screen px-4 py-6">
          <div className="relative w-2/5 mx-auto rounded-lg bg-white shadow-2xl border border-gray-400">
            <div className="mx-auto p-10">
              <div>
                <h3 className="float-left">View Details</h3>
                <button
                  className="bg-white p-1 float-right"
                  onClick={() => {
                    showViewModal(false);
                    removeModal(viewId);
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
              <br />
              <br />
              {formData ? (
                <form className="space-y-6 mt-4" action="#" key={formData.id}>
                  <div className="grid grid-cols-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Student Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      defaultValue={formData.name}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Grade
                    </label>
                    <input
                      type="text"
                      name="grade"
                      id="grade"
                      defaultValue={formData.grade}
                      placeholder=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Contact
                    </label>
                    <input
                      type="text"
                      name="mobile"
                      id="mobile"
                      defaultValue={formData.mobile}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Status
                    </label>
                    <input
                      type="text"
                      name="status"
                      id="status"
                      defaultValue={formData.status}
                      placeholder=""
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Absents
                    </label>
                    <input
                      type="text"
                      name="absents"
                      id="absents"
                      defaultValue={formData.absent}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder="name@company.com"
                      required
                    />
                  </div>
                </form>
              ) : null}

              <div className="items-center gap-2 mt-5 sm:flex mx-auto justify-end">
                <button
                  className="ml-2 font-semibold text-gray-500 py-1 px-4 border border-blue-500 rounded shadowm-sm"
                  onClick={() => showViewModal(false)}
                >
                  <span className="font-medium text-sm font-bold">Cancel</span>
                </button>
                {/* <button
                  className="ml-2 bg-red-500 text-white font-semibold py-1 px-4 border border-red rounded shadow-sm"
                  onClick={() => {
                    showViewModal(false);
                    removeModal(viewItem);
                    // ondelsetstate(true, namemodule);
                  }}
                    // onClick={removeModal}
                >
                  <span className="font-medium text-sm font-bold">Delete</span>
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ViewModal;
