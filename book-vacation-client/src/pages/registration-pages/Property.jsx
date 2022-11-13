import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { testData } from "../../utils/mockData";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyById } from "../../redux/api-requests/propertyRequests";
import { bookProperty } from "../../redux/api-requests/userRequests";
import { selectProperties } from "../../redux/slices/propertySlice";

import HeaderLayout from "../../components/header/HeaderLayout";
import DateSearchBar from "../../components/shared-components/DateSearchBar";
import SubmitButton from "../../components/shared-components/SubmitButton";
import PropertyInputField from "../../components/shared-components/PropertyInputField";

const Property = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { property, loading, error } = useSelector(selectProperties);
  const [bookingData, setBookingData] = useState({
    fromDate: "",
    toDate: "",
    guests: null,
  });

  useEffect(() => {
    dispatch(getPropertyById(params.id));
  }, []);

  const handleInput = (stateName, value) => {
    switch (stateName) {
      case "fromDate":
        setBookingData({ ...bookingData, fromDate: value });
        break;
      case "toDate":
        setBookingData({ ...bookingData, toDate: value });
        break;
      case "guests":
        setBookingData({ ...bookingData, guests: value });
        break;
    }
  };

  const handleSubmit = () => {
    let booking = {
      id: property._id,
      fromDate: bookingData.fromDate ,
      toDate: bookingData.toDate ,
      guests: bookingData.guests ,
    };
    dispatch(bookProperty(booking));
    navigate("/guest-page");
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <HeaderLayout />
      {!loading && property && (
        <div className="grid grid-cols-4 h-screen bg-gray-400">
          <div>
            <div
              className="max-w-sm border-4 border-blue-200 
             absolute left-4 space-x-12 mt-4 "
            >
              <img
                className=" text-center w-96  rounded-md h-4/6"
                src={property.image}
              />
              <p className="h-16">{property.name}</p>
            </div>
          </div>
          <div></div>
          <div className="block mt-24 ">
            <h2 className="text-center font-extrabold">From</h2>
            <PropertyInputField
              type={"date"}
              stateName={"fromDate"}
              name={"From"}
              handleInput={handleInput}
            />
            <h2 className="text-center font-extrabold">To</h2>
            <PropertyInputField
              type={"date"}
              stateName={"toDate"}
              name={"To"}
              handleInput={handleInput}
            />
            <h2 className="text-center font-extrabold">Guests</h2>
            <PropertyInputField
              type={"number"}
              name={"Guests"}
              stateName={"guests"}
              handleInput={handleInput}
            />
            <SubmitButton
              width={"w-72"}
              name={"Submit"}
              functionProp={handleSubmit}
            />
          </div>
          <div></div>
        </div>
      )}
    </div>
  );
};

export default Property;
