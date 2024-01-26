import React from 'react';

interface InputFieldInterface {
  text: string;
  bgColor?: string;
  textStyle?: string;
  classstyle?: string;
  onClick: (value?: any) => void;
}

function Button(props: InputFieldInterface) {
  const { text, bgColor, textStyle, classstyle, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`bg-${bgColor} w-full  ${textStyle}  ${classstyle} text-sm border-none text-white`}
    >
      {text}
    </button>
  );
}

export default Button;
