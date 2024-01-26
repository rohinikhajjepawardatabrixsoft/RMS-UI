import React from 'react';

function Delete() {
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_4991_925)">
          <rect x="4" width="32" height="32" rx="5" fill="white" />
          <path
            d="M14 23C14 24.1 14.9 25 16 25H24C25.1 25 26 24.1 26 23V11H14V23ZM27 8H23.5L22.5 7H17.5L16.5 8H13V10H27V8Z"
            fill="black"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_4991_925"
            x="0"
            y="0"
            width="40"
            height="40"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4991_925" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4991_925"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default Delete;
