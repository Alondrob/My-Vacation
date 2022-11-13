import { useState } from "react";
import axios from "axios";
import { BsImages } from "react-icons/bs";
import { apiRoutes } from "../redux/routes/routes";
import { uploadImage } from "../redux/api-requests/propertyRequests";

const TryOut = () => {
  const [image, setImage] = useState([]);
  const url = "http://localhost:3001/property/images";

    const uploadFile = (e) => {
      console.log(e.target.files[0])
    const file = e.target.files[0];
      setImage(file);
  };

    const formData = new FormData();
   formData.append("file", image);



  const submitPics =  () => {
      uploadImage(formData)
  };


  return (
    <div className="flex justify-center mt-4">
      <input
        type="file"
        accept="image/png, image/jpeg"
        onChange={uploadFile}
      />
      <button
        onClick={submitPics}
        className="h-12 w-12 border-2 border-blue-200"
      >
        Click
          </button>
          {/* <img src="https://bookvacation.s3.amazonaws.com/ac47362a9f185036fd7e7a820dc55646"/> */}
    </div>
  );
};

export default TryOut;

// router.post("/upload-image", uploadImage);
