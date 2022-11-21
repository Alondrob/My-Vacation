import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../shared-components/Card";
import { useEffect } from "react";
import { selectProperties } from "../../redux/slices/propertySlice";
import { getAllProperties } from "../../redux/api-requests/propertyRequests";
import PlaceCard from "../shared-components/PlaceCard";

const Feed = () => {
  const dispatch = useDispatch();
  const { properties, loading, error } = useSelector(selectProperties);

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  
  return (
    <div className="grid grid-cols-3 gap-3 ml-6 m-2 bg-backgroundImage  ">
      {/* {testData.map((item, key) => <Card value={item} key={key} />)} */}
      {loading && <span>Loading...</span>}
      {error && <span>{error}</span>}
      {!loading &&
        properties?.map((property, key) => {
          return <PlaceCard id={property._id} page={"guest"} key={key} />;
        })}
    </div>
  );
};

export default Feed;
