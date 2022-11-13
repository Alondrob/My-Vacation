import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import HeaderLayout from "../../components/header/HeaderLayout";
import { uploadImage } from "../../redux/api-requests/propertyRequests";


const UploadImagePage = () => {
  const [imageFile, setImageFile] = useState();
    const params = useParams();
  const formData = new FormData();

  const uploadFile = (e) => {
    console.log(e.target.files[0]);
    const file = e.target.files[0];
    setImageFile(file);
  };

  formData.append("file", imageFile);
    formData.append("property_id", (params.id));

    const data = {
        file: imageFile,
        id: params.id
    }
    const postImage = () => {
        uploadImage(formData)
    };

  return (
    <>
      <HeaderLayout />
      <div>
        <div className="flex mb-8 mt-8">
          <input
            className="mt-4 ml-4 w-64"
            type="file"
            accept="image/png, image/jpeg"
            onChange={uploadFile}
          />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
            onClick={postImage}
          >
            Upload
          </button>
        </div>
        <div className="h-20 w">
          <input className="mt-4 ml-4 w-64" type="file" />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
          >
            Upload
          </button>
        </div>
        <div className="h-20 w">
          <input className="mt-4 ml-4 w-64" type="file" />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
          >
            Upload
          </button>
        </div>
        <div className="h-20 w">
          <input className="mt-4 ml-4 w-64" type="file" />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
          >
            Upload
          </button>
        </div>
        <div className="h-20 w">
          <input className="mt-4 ml-4 w-64" type="file" />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
          >
            Upload
          </button>
        </div>
        <div className="h-20 w">
          <input className="mt-4 ml-4 w-64" type="file" />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
          >
            Upload
          </button>
        </div>
        <div className="h-20 w">
          <input className="mt-4 ml-4 w-64" type="file" />
          <button
            className="border-4 border-blue-800  bg-yellow-100 mt-4
                      rounded-xl w-36 font-bold"
          >
            Upload
          </button>
        </div>
      </div>
    </>
  );
};

export default UploadImagePage;
