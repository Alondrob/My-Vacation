import React from "react";

const SubmitButton = ({
  functionProp,
  background,
  id,
  name,
  border,
  width,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  absolute,
  rounded,
  textColor,
  onHover
}) => {

  const handleClick = () => {
    functionProp(name, id)
  }
  return (
    <div className={`flex justify-center   ${width}`}>
      <button
        className={`text-center font-extrabold 
        ${border}
          ${background}
          ${onHover}
             h-12
             ${rounded}
            ${marginTop}
            ${marginRight}
            ${marginLeft}
            ${width}
            ${absolute}
            ${textColor}
             mb-6`}
        onClick={handleClick}
      >
        {name}
      </button>
    </div>
  );
};

export default SubmitButton;


