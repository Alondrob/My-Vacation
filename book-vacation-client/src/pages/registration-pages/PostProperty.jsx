import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import HeaderLayout from "../../components/header/HeaderLayout";
import SubmitButton from "../../components/shared-components/general/SubmitButton";
import FormField from "../../components/shared-components/user-register/FormField";
import { createNewProperty } from "../../redux/api-requests/propertyRequests";

import { useDispatch } from "react-redux";

const PostProperty = ({ user }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [propertyData, setPropertyData] = useState({
    name: "",
    address: null,
    city: null,
    state: null,
    country: "",
    zipCode: "",
    guests: 0,
    propertyType: "",
    amenities: [],
    bedrooms: 0,
    noOfBeds: 0,
    bathrooms: 0,
    pricePerNight: null,
    propertyDescription: "",
    image: [],
  });


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

  const submitProperty = () => {
    dispatch(createNewProperty(propertyData));
    navigate('/host-page');
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
          />
         
        </div>
        {/* Column 3 */}
        <div>
          <SubmitButton
            width={"w-48"}
            name={"Post Property"}
            marginTop={"mt-48"}
            functionProp={submitProperty}
          />
        </div>
      </div>
    </div>
  );
};

export default PostProperty;
