import { useState } from "react";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { useSelector } from "react-redux";

const PropertyDetails = ({ id }) => {
  const [renderInfo, setRenderInfo] = useState(false);
  const userProperties = useSelector((state) => state.user.userProperties);
  // const selectedProperty = userProperties.filter(
  //   (property) => property._id === id
  // )[0];
  const properties = useSelector(state => state.property.properties);
  const selectedProperty = properties.filter(property => property._id === id);
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
  console.log(selectedProperty[0]?.description)

  return (
    <div>
      {!renderInfo && (
        <div className="flex justify-center border-4 border-black w-96 ml-3 mb-20 bg-black">
          <h2 className="h-12  text-white font-bold text-center italic ">
            {" "}
            {selectedProperty[0]?.description}{" "}
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
              Address: {selectedProperty[0]?.address}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              City: {selectedProperty[0]?.city}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              State: {selectedProperty[0]?.state.toUpperCase()}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Zip-Code: {selectedProperty[0]?.zipCode}
            </h3>
          </div>
          {/* ***************- Features Info - *********************** */}
          <div className="block mt-4 ,mb-2">
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Bedrooms: {selectedProperty[0]?.bedrooms}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Beds: {selectedProperty[0]?.noOfBeds}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Bathrooms: {selectedProperty[0]?.bathrooms}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Guests: {selectedProperty[0]?.guests}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              {" "}
              Amenities:{" "}
              {selectedProperty[0]?.amenities.map((item) => (
                <p>{item}</p>
              ))}
            </h3>
            <h3 className="block mb-2 text-white font-bold  text-center ">
              Price per : ${selectedProperty[0]?.pricePerNight}
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