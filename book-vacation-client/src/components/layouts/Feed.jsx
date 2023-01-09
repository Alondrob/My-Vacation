import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { selectProperties } from "../../redux/slices/propertySlice";
import { getAllProperties } from "../../redux/api-requests/propertyRequests";

import FeedCard from "../shared-components/feed/FeedCard";

const Feed = () => {
  const dispatch = useDispatch();
  const { properties, loading, error } = useSelector(selectProperties);
  // const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  return (
    <div className="bg-night-theme w-full h-screen">
      <div className=" grid grid-cols-3 px-18 gap-4 ml-2 mb-24 bg-night-theme ">
        {loading && <span>Loading...</span>}
        {error && <span>{error}</span>}
        {!loading &&
          properties?.map((property, key) => {
            return <FeedCard property={property} key={key} />;
          })}
      </div>
    </div>
  );
};

export default Feed;
