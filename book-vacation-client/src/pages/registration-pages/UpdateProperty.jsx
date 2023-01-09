import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useParams } from "react-router-dom";
import HeaderLayout from "../../components/header/HeaderLayout";
import FormField from "../../components/shared-components/user-register/FormField";
import { getUserProperties } from "../../redux/api-requests/userRequests";
import SubmitButton from "../../components/shared-components/general/SubmitButton";
import { useEffect } from "react";
import { getPropertyById, editProperty } from "../../redux/api-requests/propertyRequests";

const UpdateProperty = () => {
  const dispatch = useDispatch();
  const paramsId = useParams();
  const specificProperty = useSelector((state) => state.property.property);
  const user = JSON.parse(localStorage.getItem("user"));
    const [propertyData, setPropertyData] = useState({
    id: specificProperty?._id,
    name: specificProperty?.name,
    address: specificProperty?.address,
    city: specificProperty?.city,
    state: specificProperty?.state,
    country: specificProperty?.country,
    zipCode: specificProperty?.zipCode,
    propertyType: specificProperty?.propertyType,
    amenities: specificProperty?.amenities,
    guests: specificProperty?.guests,
    bedrooms: specificProperty?.bedrooms,
    noOfBeds: specificProperty?.noOfBeds,
    bathrooms: specificProperty?.bathrooms,
    pricePerNight: specificProperty?.pricePerNight,
    propertyDescription: specificProperty?.description,
    image: [],
  });

  useEffect(() => {
    dispatch(getPropertyById(paramsId.id));
  }, [propertyData]);

  const handleInput = (stateName, value) => {
    switch (stateName) {
      case "propertyName":
        setPropertyData({ ...propertyData, name: value });
        break;
      case "propertyDescription":
        setPropertyData({ ...propertyData, description: value });
        break;
      case "address":
        setPropertyData({ ...propertyData, address: value });
        break;
      case "city":
        setPropertyData({ ...propertyData, city: value });
        break;
      case "state":
        setPropertyData({ ...propertyData, state: value });
        break;
      case "country":
        setPropertyData({ ...propertyData, country: value });
        break;
      case "zipCode":
        setPropertyData({ ...propertyData, zipCode: value });
        break;
      case "propertyType":
        setPropertyData({ ...propertyData, propertyType: value });
        break;
      case "amenities":
        setPropertyData({ ...propertyData, amenities: value });
        break;
      case "guests":
        setPropertyData({ ...propertyData, guests: value });
        break;
      case "bedrooms":
        setPropertyData({ ...propertyData, bedrooms: value });
        break;
      case "noOfBeds":
        setPropertyData({ ...propertyData, noOfBeds: value });
        break;
      case "bathrooms":
        setPropertyData({ ...propertyData, bathrooms: value });
        break;
      case "pricePerNight":
        setPropertyData({ ...propertyData, pricePerNight: value });
        break;
    }
  };

    const updateProperty = (name, id) => {
      dispatch(editProperty(propertyData));
    };

  return (
    <div>
      <HeaderLayout />

      <div
        className="w-full h-screen bg-cover 
                    bg-vacation-pattern
                    bg-no-repeat 
                    grid grid-cols-4  space-x-3"
      >
        {/* Column 1 */}
        <div>
          <FormField
            stateName={"propertyName"}
            type={"text"}
            placeholder={"Name Your Property..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-6"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.name}
          />

          <FormField
            stateName={"address"}
            type={"text"}
            placeholder={"Address..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-2"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.address}
          />
          <FormField
            stateName={"city"}
            type={"text"}
            placeholder={"City..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-2"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.city}
          />
          <FormField
            stateName={"state"}
            type={"text"}
            placeholder={"State..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-2"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.state}
          />
          <FormField
            stateName={"country"}
            type={"text"}
            placeholder={"Country..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-2"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.country}
          />
          <FormField
            stateName={"zipCode"}
            type={"text"}
            placeholder={"Zip Code..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-2"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.zipCode}
          />
          <FormField
            stateName={"propertyType"}
            type={"text"}
            placeholder={"Property Type..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-2"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.propertyType}
          />
        </div>
        {/* Column 2 */}
        <div>
          <FormField
            stateName={"amenities"}
            type={"text"}
            placeholder={"Amenities..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-6"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.amenities}
          />
          <FormField
            stateName={"guests"}
            type={"number"}
            min={0}
            placeholder={"Number Of Guests..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-2"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.guests}
          />
          <FormField
            stateName={"bedrooms"}
            type={"number"}
            min={0}
            placeholder={"Bedrooms..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-2"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.bedrooms}
          />
          <FormField
            stateName={"noOfBeds"}
            type={"number"}
            min={0}
            placeholder={"Number Of Beds..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-2"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.noOfBeds}
          />
          <FormField
            stateName={"bathrooms"}
            type={"number"}
            min={0}
            placeholder={"Number Of Bathrooms..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-2"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.bathrooms}
          />
          <FormField
            stateName={"pricePerNight"}
            type={"number"}
            min={0}
            placeholder={"$ Price Per Night..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-2"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
            value={propertyData.pricePerNight}
          />
          <FormField
            stateName={"image"}
            type={"file"}
            placeholder={"Upload Images..."}
            rounded={"rounded-lg"}
            height={"h-12"}
            width={"w-64"}
            marginTop={"mt-2"}
            marginBottom={"mb-5"}
            marginLeft={"ml-5"}
            handleInput={handleInput}
          />
        </div>
        {/* Column 3 */}
        <div>
          <FormField
            stateName={"propertyDescription"}
            type={"text area"}
            placeholder={"Describe Your Peoperty..."}
            rounded={"rounded-lg"}
            height={"h-80"}
            width={"w-80"}
            marginTop={"mt-6"}
            marginBottom={"mb-5"}
            marginLeft={"ml-20"}
            handleInput={handleInput}
            value={propertyData.propertyDescription}
          />
        </div>
        {/* Column 3 */}
        <div>
          <SubmitButton
            width={"w-48"}
            name={"Update Property"}
                      marginTop={"mt-48"}
                      rounded={"rounded-2xl"}
            functionProp={updateProperty}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateProperty;
