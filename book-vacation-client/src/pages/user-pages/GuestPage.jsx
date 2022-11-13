import { useDispatch, useSelector } from "react-redux";
import HeaderLayout from "../../components/header/HeaderLayout";
import SubmitButton from "../../components/shared-components/SubmitButton";
import PlaceCard from "../../components/shared-components/PlaceCard";
import { useEffect, useState } from "react";
import { getUserBookings } from "../../redux/api-requests/userRequests";

const GuestPage = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const userBookings = useSelector(state => state.user.userBookings);


  useEffect(() => {
    dispatch(getUserBookings());
  }, [userBookings]);


  return (
    <div>
      <HeaderLayout />
      <div className="text-center font-extrabold italic mt-4 ">
        {`Hey ${user.user.userName}!, Check out your bookings !!`}
      </div>
         <div className="grid grid-cols-3 mt-2">
          {userBookings.map((item, key) => (
            <PlaceCard
              marginTop={"mt-3"}
              page={"guest"}
              key={key}
              id={item.property._id}
              name={item.property.name}
              city={item.property.city}
              state={item.property.state}
              country={item.property.country}
              pricePerNight={item.property.pricePerNight}
              startDate={item.dates[0]}
              endDate={item.dates[item.dates.length - 1]}
            />
          ))}
        </div>
    </div>
  );
};

export default GuestPage;
