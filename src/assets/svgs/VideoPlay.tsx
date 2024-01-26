import React from 'react';

function VideoPlay() {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3rem"
        height="3rem"
        viewBox="0 0 24 20"
        fill="none"
      >
        <g filter="url(#filter0_d_4488_1366)">
          <path
            d="M10.4 8L14.552 5.6L10.4 3.2V8ZM19.648 1.736C19.752 2.112 19.824 2.616 19.872 3.256C19.928 3.896 19.952 4.448 19.952 4.928L20 5.6C20 7.352 19.872 8.64 19.648 9.464C19.448 10.184 18.984 10.648 18.264 10.848C17.888 10.952 17.2 11.024 16.144 11.072C15.104 11.128 14.152 11.152 13.272 11.152L12 11.2C8.648 11.2 6.56 11.072 5.736 10.848C5.016 10.648 4.552 10.184 4.352 9.464C4.248 9.088 4.176 8.584 4.128 7.944C4.072 7.304 4.048 6.752 4.048 6.272L4 5.6C4 3.848 4.128 2.56 4.352 1.736C4.552 1.016 5.016 0.552 5.736 0.352C6.112 0.248 6.8 0.176 7.856 0.128C8.896 0.0719999 9.848 0.048 10.728 0.048L12 0C15.352 0 17.44 0.128 18.264 0.352C18.984 0.552 19.448 1.016 19.648 1.736Z"
            fill="white"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_4488_1366"
            x="0"
            y="0"
            width="24"
            height="19.2"
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
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.6 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4488_1366" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_4488_1366"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
}

export default VideoPlay;
