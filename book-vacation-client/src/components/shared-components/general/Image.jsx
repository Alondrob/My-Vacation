import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import SubmitButton from "./SubmitButton";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const Image = ({ id }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const user = JSON.parse(localStorage.getItem("user"));
  const userBookedProperties = useSelector((state) => state.user.userBookings);
  const selectedProperty = userBookedProperties?.filter((item) => item.property._id === id);
  const images = selectedProperty[0]["property"].image;
  // const images = "";

  const nextSlide = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <>
      {images.length > 0 && (
        <div className="flex justify-around border-4 border-black w-96 ml-3 bg-black">
          <div className="mt-36">
            <button>
              <IoIosArrowDropleftCircle
                // className="mt-48 h-8 w-48"
                size={48}
                color={"white"}
                onClick={prevSlide}
              />
            </button>
          </div>

          <div>
            <img className="h-80 w-96 mt-2 mb-2" src={images[currentSlide]} />
          </div>

          <div className="mt-36">
            <button>
              <IoIosArrowDroprightCircle
                // className="mt-4"
                size={48}
                color={"white"}
                onClick={nextSlide}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Image;
