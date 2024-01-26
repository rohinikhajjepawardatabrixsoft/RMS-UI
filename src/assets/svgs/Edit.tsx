import React from 'react';

interface EditInterFace {
  color: string;
  width?: string;
  height?: string;
}

export default function Edit(props: EditInterFace) {
  const { color, width, height } = props;
  return (
    <div>
      <svg
        width={width || '14'}
        height={height || '14'}
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.8 0H4.2C1.8837 0 0 1.8837 0 4.2V13.3C0 13.4857 0.0737498 13.6637 0.205025 13.795C0.336301 13.9263 0.514348 14 0.7 14H9.8C12.1163 14 14 12.1163 14 9.8V4.2C14 1.8837 12.1163 0 9.8 0ZM4.8993 10.5H3.5V9.1007L7.371 5.2353L8.7703 6.6346L4.8993 10.5ZM9.4304 5.9745L8.0311 4.5752L9.0979 3.5091L10.4972 4.9084L9.4304 5.9745Z"
          fill={color}
        />
      </svg>
    </div>
  );
}
