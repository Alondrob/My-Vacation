import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { bookProperty, deleteBooking, getUserBookings } from "../../../redux/api-requests/userRequests";
import Image from "../general/Image";
import SubmitButton from "../general/SubmitButton";

const FeedCard = ({ property, key }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = (name, id) => {
    switch (name) {
      case "Book":
            // dispatch(bookProperty(property));
            navigate(`/property/${property._id}`)
        break;
      case "Cancel Booking":
        window.confirm("Are you sure?") && dispatch(deleteBooking(id));
        dispatch(getUserBookings());
        break;
      case "Save":
        //dispatch saving action
        break;

    }
  };
  return (
    <div className="h-30 w-96    mt-2">
      GuestPropertyCard
      <div>
        <Image id={property._id} />
        {/* ***** Info par of the card ***** */}
        <div className="border-4 border-black block  ml-3 w-96  mt-0">
          <p className="text-white font-bold ">
            Address: {property?.address}
          </p>
          <p className="text-white font-bold">
            City: {property?.city}
          </p>
          <p className="text-white font-bold">
            State: {property?.state.toUpperCase()}
          </p>
          <p className="text-white font-bold">
            Amenities: {property?.amenities}
          </p>
          <p className="text-white font-bold">Guests: {property?.guests}</p>
          <p className="text-white font-bold">
            Price: ${property?.pricePerNight}.00
          </p>
        </div>
        {/* ***** Buttons ***** */}
        <div className="flex justify-evenly border-2 border-black   ml-3 w-96 h-16  mb-4">
          <SubmitButton
            functionProp={handleClick}
            id={property?._id}
            name={"Book"}
            width={"w-36"}
            marginTop={"mt-2"}
            marginLeft={"ml-3"}
            rounded={"rounded-xl"}
            background={"bg-black"}
            textColor={"text-white"}
            onHover={"hover:bg-pink-500"}
          />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
