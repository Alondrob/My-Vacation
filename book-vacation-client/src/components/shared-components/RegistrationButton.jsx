import React from "react";

const RegistrationButton = ({ name, submitFunction, marginTop }) => {
  const clickSubmit = () => {
    submitFunction();
  };
  return (
    <div>
      <div className={`flex justify-center ${marginTop} mb-6`}>
        <button
          className=" block text-center italic 
           hover:bg-red-400 font-bold 
           rounded-full border-2 bg-gray-300
            border-sky-900 w-80 h-12 space-y-4"
          onClick={clickSubmit}
        >
          {name}
        </button>
      </div>
    </div>
  );
};

export default RegistrationButton;
