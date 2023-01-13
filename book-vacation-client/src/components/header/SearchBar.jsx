import { useDispatch, useSelector } from "react-redux";
import { advanceSearch } from "../../features/misc-slices/searchSlice";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  const dispatch = useDispatch();
  


  return (
    <div className="flex items-center">
      <input
        onClick={() => dispatch(advanceSearch())}
        placeholder="Where Is Your Next Vacation Spot ?"
        className="italic text-center bg-slate-50 hover:bg-red-200 rounded-3xl h-12 w-96"
      />
      
      <FaSearch className="-ml-9" />
    </div>
  );
};

export default SearchBar;
