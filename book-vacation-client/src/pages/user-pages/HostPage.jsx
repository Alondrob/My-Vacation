import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderLayout from "../../components/header/HeaderLayout";
import PlaceCard from "../../components/shared-components/PlaceCard";
import { getUserProperties } from "../../redux/api-requests/userRequests";

const HostPage = () => {
  const dispatch = useDispatch();
  const userProperties = useSelector((state) => state.user.userProperties);

  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    dispatch(getUserProperties(user));
  }, []);



  return (
    <div>
      <HeaderLayout />
      <div>
        <div className="text-center font-extrabold italic mt-4 ">
          {`Hey ${user.user.userName}!, Check out your hosting spots !!`}
        </div>

        <div className="grid grid-cols-3 mt-2">
          {userProperties.map((item, key) => (
            <PlaceCard
              marginTop={"mt-3"}
              key={key}
              id={item._id}
              name={item.name}
              city={item.city}
              state={item.state}
              country={item.country}
              pricePerNight={item.pricePerNight}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostPage;
