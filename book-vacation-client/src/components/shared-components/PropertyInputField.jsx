import React from "react";
import { useState, useEffect } from "react";

const PropertyInputField = ({
  name,
  type,
  stateName,
  handleInput,
  height,
  width,
  border,
  hover,
  font,
}) => {
  const [inputField, setInputField] = useState("");

  const setInput = (e) => {
    let inputValue = e.target.value;
    handleInput(stateName, inputValue);
  };

  const isDescription = () => {
    if (name === "Describe Your Property") return true;
  };
  return (
    <div>
      {isDescription() ? (
        <div className="flex justify-center ml-4 mt-0 ">
          <textarea
            className={` block  italic  hover:bg-red-200 
            font-bold rounded-md border-2
             border-sky-900
              w-2/5 h-36 space-y-4`}
            placeholder={name}
            type={type}
            maxLength={350}
            onChange={(e) => setInput(e)}
          />
        </div>
      ) : (
        <div>
          <div className="flex justify-center ml-4 mt-0 mb-2">
            <input
              className={`
              block text-center italic mt-2
             hover:bg-purple-200 font-bold 
             rounded-md border-2 border-sky-900
              ${border}
             w-96 
            h-16 space-y-4 `}
              placeholder={name}
                type={type}
                onChange={(e) => setInput(e)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyInputField;
