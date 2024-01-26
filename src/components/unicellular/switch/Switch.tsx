import React from 'react';

interface Prop {
  size: 'big' | 'small';
  value: true | false;
}

const SwitchOffSmall = () => {
  return (
    <svg
      width="2.8rem"
      height="1.8rem"
      viewBox="0 0 31 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        x="11"
        y="5"
        width="16"
        height="8"
        viewBox="0 0 16 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="15" height="7" rx="3.5" fill="#D0D0D0" stroke="white" />
      </svg>
      <svg
        x="0"
        y="0"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="10.5" cy="8.5" r="6.5" fill="#D0D0D0" />
          <circle cx="10.5" cy="8.5" r="6" stroke="white" />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="21"
            height="21"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </svg>
  );
};

const SwitchOffBig = () => {
  return (
    <svg
      width="3.6rem"
      height="2.4rem"
      viewBox="0 0 36 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        x="11"
        y="5"
        width="20"
        height="10"
        viewBox="0 0 20 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="19" height="9" rx="4.5" fill="#D0D0D0" stroke="#D0D0D0" />
      </svg>
      <svg
        x="0"
        y="-1"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="12" cy="10" r="8" fill="#D0D0D0" />
          <circle cx="12" cy="10" r="7.5" stroke="white" />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="24"
            height="24"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </svg>
  );
};

const SwitchOnSmall = () => {
  return (
    <svg
      width="2.8rem"
      height="1.8rem"
      viewBox="0 0 31 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        x="4"
        y="5"
        width="16"
        height="8"
        viewBox="0 0 16 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="15" height="7" rx="3.5" fill="#49A8EE" stroke="#9DD6FF" />
      </svg>
      <svg
        x="10"
        y="0"
        width="21"
        height="21"
        viewBox="0 0 21 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="10.5" cy="8.5" r="6.5" fill="#49A8EE" />
          <circle cx="10.5" cy="8.5" r="6" stroke="white" />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="21"
            height="21"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </svg>
  );
};

const SwitchOnBig = () => {
  return (
    <svg
      width="3.6rem"
      height="2.4rem"
      viewBox="0 0 36 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <svg
        x="4"
        y="5"
        width="20"
        height="10"
        viewBox="0 0 20 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="19" height="9" rx="4.5" fill="#49A8EE" stroke="#9DD6FF" />
      </svg>
      <svg
        x="13"
        y="0"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <circle cx="12" cy="10" r="8" fill="#49A8EE" />
          <circle cx="12" cy="10" r="7.5" stroke="white" />
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="24"
            height="24"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            />
            <feOffset dy="2" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
          </filter>
        </defs>
      </svg>
    </svg>
  );
};

const Switch: React.FC<Prop> = (props: Prop) => {
  const { value, size } = props;
  if (size === 'big') {
    if (value) {
      return <SwitchOnBig />;
      // <img src={SwitchOnBig} alt="" />;
    }
    if (!value) {
      return <SwitchOffBig />;
      // <img src={SwitchOffBig} alt="" />;
    }
    return <></>;
  }
  if (size === 'small') {
    if (value) {
      return <SwitchOnSmall />;
    }
    if (!value) {
      return <SwitchOffSmall />;
    }
    return <></>;
  }
  return <></>;
};
export default Switch;
