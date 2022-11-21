import React from "react";
import { useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteProperty } from "../../redux/api-requests/propertyRequests";
import {
  deleteBooking,
  getUserProperties,
  getUserBookings,
} from "../../redux/api-requests/userRequests";
import userSlice from "../../redux/slices/userSlice";
import SubmitButton from "./SubmitButton";
import Image from "./Image";
import PropertyDetails from "./PropertyDetails";

const PlaceCard = ({
  page,
  key,
  id,
  property,
  name,
  city,
  state,
  country,
  pricePerNight,
  startDate,
  endDate,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [renderPage, setRenderPage] = useState(false);
  const user = useSelector((state) => state.user.user);
  const userProperties = useSelector((state) => state.user.userProperties);
  const selectedProperty = userProperties.filter((item) => item._id === id);
  console.log(selectedProperty)
  const dateConverter = (dateStr) => {
    const convertedDate = dateStr.split(/[T]/)[0].split(/[-]/);
    return convertedDate[2] + "-" + convertedDate[2] + "-" + convertedDate[0];
  };

  const checkImages = () => {
    if (selectedProperty[0]?.image.length > 0) return true;
 }

  console.log(property)
  const handleClick = (name, id) => {
    switch (name) {
      case "Edit":
        navigate(`/edit-property/${id}`);
        break;
      case "Delete":
        dispatch(deleteProperty(id));
        const user = JSON.parse(localStorage.getItem("user"));
        dispatch(getUserProperties(user));
        break;
      case "Book":
        //dispatch booking action
        break;
      case "Cancel Booking":
        window.confirm("Are you sure?") && dispatch(deleteBooking(id));
        dispatch(getUserBookings());
        break;
      case "Save":
        //dispatch saving action
        break;
      case "Upload Photos":
        navigate(`/images/${id}`);
        break;
    }
  };
  return (
    <div className=" h-36 mb-24">
      {checkImages() && <Image id={id} />}
   
      <PropertyDetails id={id} /> 
      <div className="bg-black w-96 ml-3 flex justify-center">
        <div
          className="grid grid-cols-3 gap-4
       text-center content-center"
        >
          {page != "guest" && (
            <SubmitButton
              functionProp={handleClick}
              id={id}
              name={"Edit"}
              width={"w-20"}
              marginTop={"mt-0"}
              marginLeft={"ml-3"}
              rounded={"rounded-small"}
              background={"bg-black"}
              textColor={"text-white"}
              onHover={"hover:bg-gray-500"}
            />
          )}
          {page != "guest" && (
            <SubmitButton
              functionProp={handleClick}
              id={id}
              name={"Delete"}
              width={"w-20"}
              marginTop={"mt-0"}
              marginLeft={"ml-3"}
              rounded={"rounded-small"}
              background={"bg-black"}
              textColor={"text-white"}
              onHover={"hover:bg-gray-500"}
            />
          )}
          {page != "guest" && (
            <SubmitButton
              functionProp={handleClick}
              id={id}
              name={"Upload Photos"}
              width={"w-20"}
              marginTop={"mt-0"}
              marginLeft={"ml-3"}
              rounded={"rounded-small"}
              background={"bg-black"}
              textColor={"text-white"}
              onHover={"hover:bg-gray-500"}
            />
          )}
          
          {page === "guest" && (
            <SubmitButton
              functionProp={handleClick}
              id={id}
              name={"Book"}
              width={"w-20"}
              marginTop={"mt-0"}
              marginLeft={"ml-3"}
              rounded={"rounded-small"}
              background={"bg-black"}
              textColor={"text-white"}
              onHover={"hover:bg-gray-500"}
            />
          )}
          {page === "guest" && (
            <SubmitButton
              functionProp={handleClick}
              id={id}
              name={"Cancel Booking"}
              width={"w-20"}
              marginTop={"mt-0"}
              marginLeft={"ml-3"}
              rounded={"rounded-small"}
              background={"bg-black"}
              textColor={"text-white"}
              onHover={"hover:bg-gray-500"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;