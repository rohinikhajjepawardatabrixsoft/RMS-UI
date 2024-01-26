import React, { ReactElement } from 'react';

const RightArrow = (): ReactElement => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path d="M6 15L11 10L6 5L7 3L14 10L7 17L6 15Z" fill="black" fillOpacity="0.7" />
      </svg>
    </div>
  );
};

export default RightArrow;
