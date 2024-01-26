import React from 'react';
import { Bars } from 'react-loader-spinner';

const LoaderComponent = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Bars
        height="40"
        width="40"
        color="#747cf4"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};
export default LoaderComponent;
