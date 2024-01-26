import React from 'react';

interface InputFieldInterface {
  text: string;
  subtext: string;
}
function Card(props: InputFieldInterface) {
  const { text, subtext } = props;
  return (
    <a
      href="#"
      className="block min-w-[100px]  px-3 py-2 bg-[#f8f8f8] border border-gray-200 rounded-md shadow-md"
    >
      <p className="mb-1 text-xs font-normal font-poppins tracking-tight text-black">{text}</p>
      <p className="font-medium m-0 text-black font-poppins  text-sm ">{subtext}</p>
    </a>
  );
}

export default Card;
