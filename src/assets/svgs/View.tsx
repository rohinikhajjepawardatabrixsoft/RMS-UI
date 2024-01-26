import React from 'react';

interface EditInterFace {
  color?: string;
}

export default function View(props: EditInterFace) {
  const { color } = props;
  return (
    <div>
      <svg
        width="14"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.73437 7C6.73437 7.58016 6.96483 8.13656 7.37507 8.5468C7.78531 8.95703 8.3417 9.1875 8.92187 9.1875C9.50203 9.1875 10.0584 8.95703 10.4687 8.5468C10.8789 8.13656 11.1094 7.58016 11.1094 7C11.1094 6.41984 10.8789 5.86344 10.4687 5.4532C10.0584 5.04297 9.50203 4.8125 8.92187 4.8125C8.3417 4.8125 7.78531 5.04297 7.37507 5.4532C6.96483 5.86344 6.73437 6.41984 6.73437 7V7ZM17.4023 6.49609C15.5508 2.5957 12.7519 0.632812 8.99999 0.632812C5.24608 0.632812 2.44921 2.5957 0.597647 6.49805C0.52338 6.65531 0.484863 6.82706 0.484863 7.00098C0.484863 7.17489 0.52338 7.34665 0.597647 7.50391C2.44921 11.4043 5.24804 13.3672 8.99999 13.3672C12.7539 13.3672 15.5508 11.4043 17.4023 7.50195C17.5527 7.18555 17.5527 6.81836 17.4023 6.49609V6.49609ZM8.92187 10.4375C7.02343 10.4375 5.48437 8.89844 5.48437 7C5.48437 5.10156 7.02343 3.5625 8.92187 3.5625C10.8203 3.5625 12.3594 5.10156 12.3594 7C12.3594 8.89844 10.8203 10.4375 8.92187 10.4375Z"
          fill={color || 'Black'}
        />
      </svg>
    </div>
  );
}