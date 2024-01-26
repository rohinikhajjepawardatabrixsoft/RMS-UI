import React from 'react';

interface InputFieldInterface {
  type: string;
  placeholder: string;
  value: any;
  backgroundColor: string;
  name?: string;
  style?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputField(props: InputFieldInterface) {
  const { type, placeholder, name, value, backgroundColor, style, onChange } = props;
  return (
    <input
      type={type}
      name={name}
      className={`
            block
            w-full
            px-3
            text-sm
            font-normal
            text-gray-700
            bg-${backgroundColor} bg-clip-padding
            rounded
            transition
            ease-in-out
            m-0
            ${style}
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none`}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default InputField;
