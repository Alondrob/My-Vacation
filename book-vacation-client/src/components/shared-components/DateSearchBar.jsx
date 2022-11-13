import React from "react";

const DateSearchBar = ({ name, handleDate, type }) => {
  const setDate = (e) => {
    handleDate(name, e.target.value);
  };
  return (
    <div>
      <div className="mb-2">
        <input
          className="block text-center italic 
           hover:bg-purple-200 font-bold 
           rounded-2xl border-2
            border-sky-900 w-96 
            h-16 space-y-4 "
          type="date"
          // onChange={(e) => setDate(e)}
        />
      </div>
    </div>
  );
};

export default DateSearchBar;
