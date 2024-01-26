import React from 'react';

type Props = {
  title: string;
  body: string;
};

const Toast = ({ title, body }: Props) => {
  return (
    <div className="w-64">
      <div className="text-sm font-medium leading-4 text-left py-0.5">{title}</div>
      <div className="text-[0.68rem] font-medium leading-[0.81rem] opacity-60 py-0.5">{body}</div>
    </div>
  );
};

export default Toast;
