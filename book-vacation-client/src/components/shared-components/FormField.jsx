import React from "react";

const FormField = ({
  stateName,
  placeholder,
  type,
  min,
  height,
  width,
  rounded,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  handleInput,
  value
}) => {
  const handleChange = (e) => {
    handleInput(stateName, e.target.value);
  };

  return (
    <div>
      <div className={`flex justify-center
       ${marginTop}
       ${marginLeft}
        ${marginBottom}`
      }>
        <input
          className={` block text-center italic 
           hover:bg-red-200 font-bold 
           border-2 border-sky-900 
           ${width} 
           ${rounded}
           ${height} 
           space-y-4`}
          placeholder={placeholder}
          type={type}
          min={min}
          value={value}
          onChange={(e) => handleChange(e)}
        />
      </div>
    </div>
  );
};

export default FormField;
