import React from 'react';

interface InputFieldInterface {
  text: string;
  value: any;
  onChange: (value: any) => void;
}

function Select(props: InputFieldInterface) {
  const { text, value, onChange } = props;
  return (
    <select
      value={value}
      onChange={onChange}
      className="text-xs font-poppins bg-[#f8f8f8] text-gray-700 font-normal border-none focus:outline-none rounded mb-2 block w-full px-3 py-2"
    >
      <option className="font-medium text-gray-500">{text}</option>
    </select>
  );
}

export default Select;
