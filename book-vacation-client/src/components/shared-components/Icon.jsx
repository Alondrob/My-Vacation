import { useState } from "react";
import {BsEmojiSunglasses} from "react-icons/bs"
import {
  FaSignInAlt,
  FaSignOutAlt,
  FaUserCircle,
  FaHotel,
  FaAirbnb,
  FaCity
} from "react-icons/fa";

const Icon = ({
  name,
  user,
  size,
  absolute,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  hover,
  propFunction,
}) => {
  const [text, setText] = useState(false);

  const handleClick = () => {
    propFunction(name);
  };
  return (
    <div
      className={`
            ${absolute}
          `}
       
      onMouseEnter={() => setText(true)}
      onMouseLeave={() => setText(false)}
    >
      <button onClick={() => handleClick()}>
        {name === "home" && <FaAirbnb size={size} />}
        {name === "login" && <FaSignInAlt size={size} />}
        {name === "register" && <FaUserCircle size={size} />}
        {name === "host" && <FaHotel size={size} />}
        {name === "logout" && <FaSignOutAlt size={size} />}
        {name === "my hosting spots" && <FaCity size={size} />}
        {name === "my bookings" && <BsEmojiSunglasses size={size} />}
        {name === "user" && <h3 className="font-extrabold">Hello {user.userName}</h3>}
        {/* {name === "login" &&  <FaSignInAlt size={size} />} */}
      </button>
      {text && <p className=" text-center text-xs">{name.toUpperCase()}</p>}
    </div>
  );
};

export default Icon;
