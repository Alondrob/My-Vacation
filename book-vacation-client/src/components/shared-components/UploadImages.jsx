import React from "react";

const UploadImages = ({ handlePics }) => {
  return (
    <div className="grid grid-cols-6  mt-6">
      <div></div>
      <div></div>
      <div className="text-lg font-extrabold ml-16">Upload Photos</div>
      <div>
        <input
          type="file"
          accept="image/png, image/jpeg"
          onChange={(e) => handlePics(e.target.files)}
        />
      </div>
    </div>
  );
};

export default UploadImages;
