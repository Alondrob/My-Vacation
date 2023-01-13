import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { testData } from "../../utils/mockData";
import { useDispatch, useSelector } from "react-redux";
import { getPropertyById } from "../../redux/api-requests/propertyRequests";
import { bookProperty } from "../../redux/api-requests/userRequests";
import { selectProperties } from "../../redux/slices/propertySlice";

import HeaderLayout from "../../components/header/HeaderLayout";
import DateSearchBar from "../../components/shared-components/general/DateSearchBar";
import SubmitButton from "../../components/shared-components/general/SubmitButton";
import PropertyInputField from "../../components/shared-components/host/PropertyInputField";
import Image from "../../components/shared-components/general/Image";
import FormField from "../../components/shared-components/user-register/FormField";

const Property = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { property, loading, error } = useSelector(selectProperties);
  const [checkout, setCheckout] = useState(false);
  const [bookingData, setBookingData] = useState({
    fromDate: "",
    toDate: "",
    guests: null,
    cardNumber: "",
    cardHolder: "",
    billingZipCode: "",
    cardCvc: "",
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
      case "creditNumber":
        setBookingData({ ...bookingData, creditNumber: value });
        break;
      case "cardHolder":
        setBookingData({ ...bookingData, cardHolder: value });
        break;
      case "billingZipCode":
        setBookingData({ ...bookingData, billingZipCode: value });
        break;
      case "cvc":
        setBookingData({ ...bookingData, cardCvc: value });
        break;
    }
  };

  const handleSubmit = () => {
    let booking = {
      id: property._id,
      fromDate: bookingData.fromDate,
      toDate: bookingData.toDate,
      guests: bookingData.guests,
      cardNumber: bookingData.cardNumber,
      cardHolderName: bookingData.cardHolder,
      billingZipCode: bookingData.billingZipCode,
      cardCvc: bookingData.cardCvc,
    };
    dispatch(bookProperty(booking));
      navigate("/guest-page");
  };

  return (
    <div>
      <HeaderLayout />
      <div className=" w-full h-full grid grid-cols-2  bg-gray-400">
        <div className="mt-24 ml-36">
          <Image property={property} />
          <div className="bg-black text-white  h-20 w-96 ml-3">
            <p className="ml-12 font-bold">{property?.name}</p>
            <p className="ml-12 font-bold">
              Price Per Night: ${property?.pricePerNight}
            </p>
            <p className="ml-12 font-bold">Guests: {property?.guests}</p>
          </div>
        </div>

        <div className="w-full h-screen block mt-20  ">
          <h2 className="text-center font-extrabold">From</h2>
          <FormField
            type={"date"}
            stateName={"fromDate"}
            name={"From"}
            width={"w-80"}
            height={"h-12"}
            rounded={"rounded-xl"}
            handleInput={handleInput}
          />
          <h2 className="text-center font-extrabold">To</h2>
          <FormField
            type={"date"}
            stateName={"toDate"}
            name={"To"}
            width={"w-80"}
            height={"h-12"}
            rounded={"rounded-xl"}
            handleInput={handleInput}
          />

          <h2 className="text-center font-extrabold">Guests</h2>

          <FormField
            type={"number"}
            stateName={"guests"}
            name={"Guests"}
            width={"w-80"}
            height={"h-12"}
            rounded={"rounded-xl"}
            marginBottom={"mb-10"}
            min={0}
            handleInput={handleInput}
          />
          <h2 className="text-center font-extrabold">Credit Card</h2>
          <FormField
            type={"text"}
            placeholder={"Credit Card Number"}
            stateName={"creditNumber"}
            name={"Credit Number"}
            width={"w-80"}
            height={"h-12"}
            rounded={"rounded-xl"}
            min={0}
            handleInput={handleInput}
          />
          <h2 className="text-center font-extrabold">Card Holder Name</h2>
          <FormField
            type={"text"}
            placeholder={"Card Holder Name"}
            stateName={"cardHolder"}
            name={"Card Holder"}
            width={"w-80"}
            height={"h-12"}
            rounded={"rounded-xl"}
            marginBottom={"mb-4"}
            min={0}
            handleInput={handleInput}
          />
          <div className="flex justify-center">
            <FormField
              type={"text"}
              placeholder={"CVC"}
              stateName={"cvc"}
              name={"CVC"}
              width={"w-40"}
              height={"h-12"}
              rounded={"rounded-xl"}
              min={0}
              handleInput={handleInput}
            />
            <FormField
              type={"text"}
              placeholder={"Billing Zip code"}
              stateName={"billingZipCode"}
              name={"CVC"}
              width={"w-40"}
              height={"h-12"}
              rounded={"rounded-xl"}
              min={0}
              handleInput={handleInput}
            />
          </div>
          <div className="grid place-items-center">
            <SubmitButton
              width={"w-48"}
              marginTop={"mt-2"}
              rounded={"rounded-xl"}
              onHover={"hover:bg-blue-200"}
              border={"border-2 border-black"}
              name={"Checkout"}
              functionProp={handleSubmit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
