import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../shared-components/Card";
import { useEffect } from "react";
import { selectProperties } from "../../redux/slices/propertySlice";
import { getAllProperties } from "../../redux/api-requests/propertyRequests";
import PlaceCard from "../shared-components/PlaceCard";
import GuestPropertyCard from "../shared-components/GuestPropertyCard";

const Feed = () => {
  const dispatch = useDispatch();
  const { properties, loading, error } = useSelector(selectProperties);

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  return (
    <div className="bg-night-theme w-full h-screen">
      <div className=" grid grid-cols-3 px-18 gap-4 ml-2 mb-24 bg-night-theme ">
        {/* {testData.map((item, key) => <Card value={item} key={key} />)} */}
        {loading && <span>Loading...</span>}
        {error && <span>{error}</span>}
        {!loading &&
          properties?.map((property, key) => {
            return <GuestPropertyCard property={property} key={key} />;
          })}
      </div>
    </div>
  );
};

export default Feed;
