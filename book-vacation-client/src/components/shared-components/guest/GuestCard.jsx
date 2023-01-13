import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  bookProperty,
  deleteBooking,
  getUserBookings,
} from "../../../redux/api-requests/userRequests";
import Image from "../general/Image";
import SubmitButton from "../general/SubmitButton";

const GuestCard = ({ property, key, dates }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = property?._id;

  const startDate = dates[0];
  const endDate = dates[dates.length - 1];

  const dateConverter = (date) => {
    if (date) {
      const dateArr = date?.split("-");
      const dayOne = dateArr && dateArr[2].charAt(0);
      const dayTwo = dateArr && dateArr[2].charAt(1);
      return dateArr[1] + "-" + dayOne + dayTwo + "-" + dateArr[0];
    }
  };

  // const startDate = dateConverter(dates[0]);
  // const endDate = dateConverter(dates[dates.length - 1]);

  const handleClick = (id) => {
    window.confirm("Are you sure ?") && dispatch(deleteBooking(id));
    //  dispatch(getUserBookings());
    window.location.reload(false);
  };
  return (
    <div>
      <Image property={property} />
      {/* ***** Info par of the card ***** */}
      <div className="border-4 border-black bg-red-100 block  ml-3 w-96  mt-0">
        <p className=" font-bold ">Address: {property?.address}</p>
        <p className=" font-bold">City: {property?.city}</p>
        <p className=" font-bold">State: {property?.state.toUpperCase()}</p>
        <p className=" font-bold">Amenities: {property?.amenities}</p>
        <p className=" font-bold">Guests: {property?.guests}</p>
        <p className=" font-bold">Price: ${property?.pricePerNight}.00</p>
        <p className=" font-bold">From: {dateConverter(startDate)}</p>
        <p className=" font-bold">Until: {dateConverter(endDate)}</p>
      </div>
      <div className="flex justify-center border-4 border-black bg-red-400 ml-3 w-96  ">
        <SubmitButton
          functionProp={handleClick}
          id={property._id}
          name={"Cancel Booking"}
          width={"w-36"}
          marginTop={"mt-5"}
          rounded={"rounded-xl"}
          background={"bg-black"}
          textColor={"text-white"}
          onHover={"hover:bg-gray-500"}
        />
      </div>
    </div>
  );
};

export default GuestCard;
