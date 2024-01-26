import React from 'react';

interface InputFieldInterface {
  placeholder: string;
  value: any;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function Textarea(props: InputFieldInterface) {
  const { placeholder, value, onChange } = props;
  return (
    <textarea
      className="
            form-control
            block
            w-full
            resize-none
            px-3
            py-2
            text-sm
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border-none border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Textarea;
