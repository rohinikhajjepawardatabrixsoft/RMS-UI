import React from 'react';
import { FetchDataRole } from '../../Global Api/Api';

const User = () => {
    const data= FetchDataRole();
    console.log(data);
  return (
    <div className="w-screen h-screen flex flex-1">
     
    </div>
  );
};
export default User;