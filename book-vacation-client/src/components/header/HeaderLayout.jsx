import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import Icon from "../shared-components/general/Icon";
import { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const HeaderLayout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [currentUser, setCurrentUser] = useState({});

  const token = useSelector((state) => state.user.token);
  const user = useSelector((state) => state.user.user);
 
  const handleIconClick = (name) => {
    
    switch (name) {
      case "home": {
        navigate("/");
        break;
      }
      case "login": {
        navigate("/sign-in");
        break;
      }
      case "logout": {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.reload();
        navigate("/");
        break;
      }
      case "register": {
        navigate("/register");
        break;
      }
      case "host": {
        navigate("/post-property");
        break;
      }
      case "my bookings": {
        navigate("/guest-page");
        break;
      }
      case "my hosting spots": {
        navigate("/host-page");
        break;
      }
    }
  };

  return (
    <>
      <div className=" flex items-center justify-center  h-24  bg-lime-100 border-b-4 border-gray-300  ">
        <Icon
          name={"home"}
          size={48}
          absolute={"absolute left-4"}
          propFunction={handleIconClick}
        />
        <Icon
          name={"my bookings"}
          size={48}
          absolute={"absolute left-24"}
          propFunction={handleIconClick}
        />
        {user &&
          <Icon
            name={"my hosting spots"}
            size={48}
            absolute={"absolute left-48"}
            propFunction={handleIconClick}
          />
        }
        <SearchBar />
        {!token && (
          <Icon
            name={"login"}
            size={32}
            absolute={"absolute right-36"}
            marginLeft={"ml-12"}
            propFunction={handleIconClick}
          />
        )}
        {!token && (
          <Icon
            name={"register"}
            size={32}
            absolute={"absolute right-20"}
            marginLeft={"ml-12"}
            propFunction={handleIconClick}
          />
        )}

        {token && (
          <Icon
            name="user"
            size={32}
            absolute={"absolute right-36"}
            marginLeft={"ml-20"}
            user={user}
          />
        )}
        {token && (
          <Icon
            name="host"
            size={32}
            absolute={"absolute right-24"}
            marginLeft={"ml-20"}
            propFunction={handleIconClick}
          />
        )}
        {token && (
          <Icon
            name="logout"
            size={32}
            absolute={"absolute right-8"}
            marginLeft={"ml-12"}
            propFunction={handleIconClick}
          />
        )}
      </div>
    </>
  );
};

export default HeaderLayout;
