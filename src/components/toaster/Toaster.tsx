import React, { ReactElement } from 'react';
import toast, { ToastBar, Toaster as ReactHotToaster } from 'react-hot-toast';

const Toaster = (): ReactElement => {
  return (
    <ReactHotToaster
      toastOptions={{
        className: 'w-fit h-20 bg-[#323947] text-white rounded',
        success: {
          className: 'w-fit h-20 bg-[#323947] text-white rounded border-emerald-500 border-2',
          duration: 3000,
          // icon: <SuccessIcon />,
        },
        error: {
          className: 'w-[25rem] h-20 bg-[#323947] text-white rounded border-custom-red-3 border-2',
          duration: 3000,
          // icon: <ErrorIcon />,
        },
      }}
    >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div className="flex justify-center items-center w-full h-full ">
              <div className="w-10 flex pl-5 justify-center mr-1">{icon}</div>
              <div className="toast-body grow h-full flex items-center">{message}</div>
              <div className="w-10 h-full flex justify-end items-start">
                {t.type !== 'loading' && (
                  <button
                    className="mr-3 p-[0rem] bg-inherit border-none"
                    onClick={() => toast.dismiss(t.id)}
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>
          )}
        </ToastBar>
      )}
    </ReactHotToaster>
  );
};

export default Toaster;
