import { useDispatch, useSelector } from "react-redux";
import HeaderLayout from "../../components/header/HeaderLayout";
import SubmitButton from "../../components/shared-components/general/SubmitButton";
import { useEffect, useState } from "react";
import { getUserBookings } from "../../redux/api-requests/userRequests";
import GuestPropertyCard from "../../components/shared-components/feed/FeedCard";
import { useNavigate, useParams } from "react-router-dom";
import GuestCard from "../../components/shared-components/guest/GuestCard";
import { dateConverter } from "../../utils/dateConverter";

const GuestPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  
  const userBookings = useSelector((state) => state.user.userBookings);

  useEffect(() => {
    dispatch(getUserBookings());
  }, []);

  console.log(userBookings);
  return (
    <div>
      <HeaderLayout />
      <div className="bg-blue-300 ">
        <div className="text-center  font-extrabold italic mt-0 ">
          {`Hey ${user.user.userName}!, Check out your bookings !!`}
        </div>
        <div className="grid grid-cols-3 gap-6 mt-2">
          {userBookings.map((item, key) => (
            <GuestCard
              property={item.property}
              startDate={dateConverter(item.dates[0])}
              endDate={dateConverter(item.dates[item.dates.length - 1])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GuestPage;
