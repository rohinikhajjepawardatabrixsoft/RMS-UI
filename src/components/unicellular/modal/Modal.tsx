import React from 'react';

type Props = {
  children: React.ReactNode;
  id: string;
  className: string;
  open?: boolean;
};

const Modal = ({ children, id, className, open }: Props) => {
  return (
    <div>
      <input type="checkbox" id={id} checked={open} readOnly className="modal-toggle" />
      <label htmlFor={id} className="modal cursor-pointer">
        <label
          className={`modal-box ${className} relative rounded-md border border-black border-solid`}
          htmlFor=""
        >
          {children}
        </label>
      </label>
    </div>
  );
};

export default Modal;
