import React from 'react';

const Calender = () => {
  return (
    <React.Fragment>
      <input
        type="date"
        id="dateOfJoining"
        placeholder="25 Nov 2022"
        maxLength={60}
        // value={values.dateOfJoining}
        // onChange={handleChange}
        className="input w-[10rem] h-[2.5rem] px-[5px] py-[12px] rounded bg-[#F8F8F8] border"
      />
    </React.Fragment>
  );
};

export default Calender;
