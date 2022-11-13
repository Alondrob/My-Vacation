import { useState } from "react";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { useSelector } from "react-redux";

const PropertyDetails = ({ id }) => {
  const [renderInfo, setRenderInfo] = useState(false);
  const userProperties = useSelector((state) => state.user.userProperties);
  const selectedProperty = userProperties.filter(
    (property) => property._id === id
  )[0];
  const upperCaseFirstLetter = (str) => {
    let firstLetter = str[0];
    let newStrArr = str.shift();
    let newStr = "";
    let i = 0;
    while (newStrArr.length > i) {
      newStr += newStrArr[i];
      i++;
    }
    return firstLetter.toUpperCase() + newStr;
  };
  return (
    <div>
      {!renderInfo && (
        <div className="flex justify-center border-4 border-black w-96 ml-3 bg-black">
          <h2 className="  text-white font-bold ">
            {" "}
            {selectedProperty.description}{" "}
          </h2>
          <button className="ml-4 mb-3" onClick={() => setRenderInfo(!renderInfo)}>
            <MdOutlineUnfoldMore size={24} color="white" />
          </button>
        </div>
      )}
      {/* ******************************** */}

      {renderInfo && (
        <div className="block border-4 border-black w-96 ml-3 bg-black">
          {/* ***************- Location Infor - *********************** */}
          <div className="block mt-2 ,mb-2">
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Address: {selectedProperty.address}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              City: {selectedProperty.city}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              State: {selectedProperty.state.toUpperCase()}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Zip-Code: {selectedProperty.zipCode}
            </h3>
          </div>
          {/* ***************- Features Info - *********************** */}
          <div className="block mt-4 ,mb-2">
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Bedrooms: {selectedProperty.bedrooms}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Beds: {selectedProperty.noOfBeds}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Bathrooms: {selectedProperty.bathrooms}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Guests: {selectedProperty.guests}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Amenities:{" "}
              {selectedProperty.amenities.map((item) => (
                <p>{item}</p>
              ))}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              Price per : ${selectedProperty.pricePerNight}
            </h3>
          </div>
          <div className="block border-4 border-black w-80 bg-black">
            <div className="flex justify-center">
              <h2 className="  text-white font-bold ml-14 "> Hide </h2>
              <button
                className=" ml-12 "
                onClick={() => setRenderInfo(!renderInfo)}
              >
                <MdOutlineUnfoldMore size={24} color="white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetails;