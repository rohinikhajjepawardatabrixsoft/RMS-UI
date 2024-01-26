import React from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const ConfirmationPopup = ({
  message,
  subMessage,
  onHide,
  handleConfirm,
  buttonText,
  buttonColor,
}: {
  onHide: () => void;
  message: string;
  buttonText: string;
  subMessage: string;
  handleConfirm: () => void;
  buttonColor?: string;
}) => {
  return (
    <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-opacity-30 bg-[#34333333] transition-opacity"></div>

      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left transition-all p-4 flex flex-col">
            <div className="flex justify-end cursor-pointer text-lg" onClick={onHide}>
              <FontAwesomeIcon icon={faXmark} size="xl" />
            </div>
            <div className="bg-white">
              <div className="sm:flex ">
                <div className="text-center pl-8 pr-14 py-4">
                  <h3
                    className="text-lg font-medium leading-6 text-gray-900 w-[26rem]"
                    id="modal-title"
                  >
                    {message}
                  </h3>
                  <div className="mt-2 ml-4">
                    <p className="text-sm text-gray-500">{subMessage}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-[#FFFFFF] border-gray-400 px-4 py-2 h-8 text-base font-medium text-[#8e8a8a] shadow-sm  sm:w-auto sm:text-sm mr-4"
                onClick={onHide}
              >
                Cancel
              </button>
              <button
                type="button"
                className={`inline-flex w-full items-center justify-center rounded-md border border-transparent ${
                  buttonColor ? 'bg-[#dc2626]' : 'bg-indigo-500/90'
                } 
                 px-4 py-2 h-8 text-base font-medium text-[#FFFFFF] shadow-sm  sm:w-auto sm:text-sm `}
                onClick={handleConfirm}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
