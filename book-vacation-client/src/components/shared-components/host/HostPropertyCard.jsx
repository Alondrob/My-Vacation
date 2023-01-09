import Image from "../general/Image";
import SubmitButton from "../general/SubmitButton";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProperty, getUserProperties } from "../../../redux/api-requests/propertyRequests";
const HostPropertyCard = ({
  property,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);
  const userProperties = useSelector((state) => state.user.userProperties);
  const selectedProperty = userProperties.filter((item) => item._id === property._id);
  console.log(selectedProperty);
  const dateConverter = (dateStr) => {
    const convertedDate = dateStr.split(/[T]/)[0].split(/[-]/);
    return convertedDate[2] + "-" + convertedDate[2] + "-" + convertedDate[0];
  };
  const upperCaseFirstLetter = (str) => {
    let strArr = str[0].toUpperCase();
    return strArr + str.slice(1);
  };

  const handleClick = (name, id) => {
    switch (name) {
      case "Edit":
        navigate(`/edit-property/${id}`);
        break;
      case "Delete":
        dispatch(deleteProperty(id));
        const user = JSON.parse(localStorage.getItem("user"));
        navigate("/host-page");
        break;
      // case "Book":
      //   //dispatch booking action
      //   break;
      // case "Cancel Booking":
      //   window.confirm("Are you sure?") && dispatch(deleteBooking(id));
      //   dispatch(getUserBookings());
      //   break;
      // case "Save":
      //   //dispatch saving action
      //   break;
      case "Upload Photos":
        navigate(`/images/${id}`);
        break;
    }
  };

  return (
    <div className="h-30 w-96    mt-2">
      {/* ***** top of the card ***** */}
      <div>
        <Image id={property._id} />
        {/* ***** Info par of the card ***** */}
        <div className="border-4 border-black block  ml-3 w-96  mt-0">
          <p className="text-white font-bold ">
            Address: {upperCaseFirstLetter(property?.address)}
          </p>
          <p className="text-white font-bold">
            City: {upperCaseFirstLetter(property?.city)}
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
            id={property._id}
            name={"Edit"}
            width={"w-20"}
            marginTop={"mt-2"}
            marginLeft={"ml-3"}
            rounded={"rounded-xl"}
            background={"bg-black"}
            textColor={"text-white"}
            onHover={"hover:bg-gray-500"}
          />
          <SubmitButton
            functionProp={handleClick}
            id={property._id}
            name={"Delete"}
            width={"w-20"}
            marginTop={"mt-2"}
            marginLeft={"ml-3"}
            rounded={"rounded-xl"}
            background={"bg-black"}
            textColor={"text-white"}
            onHover={"hover:bg-gray-500"}
          />
          <SubmitButton
            functionProp={handleClick}
            id={property._id}
            name={"Upload Photos"}
            width={"w-20"}
            marginTop={"mt-1"}
            marginLeft={"ml-3"}
            rounded={"rounded-xl"}
            background={"bg-black"}
            textColor={"text-white"}
            onHover={"hover:bg-gray-500"}
          />
        </div>
      </div>
    </div>
  );
};

export default HostPropertyCard;
