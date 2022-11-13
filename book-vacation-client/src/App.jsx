import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { Provider, useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Register from "./pages/registration-pages/Register";
import Main from "./pages/layout-pages/Main";
import SignIn from "./pages/registration-pages/SignIn";
import Property from "./pages/registration-pages/Property";
import PostProperty from "./pages/registration-pages/PostProperty";
import { auth } from "./redux/slices/userSlice";
import GuestPage from "./pages/user-pages/GuestPage";
import HostPage from "./pages/user-pages/HostPage";
import UpdateProperty from "./pages/registration-pages/UpdateProperty";
import UploadImagePage from "./pages/user-pages/UploadImagePage";
import TryOut from "./pages/TryOut";

const App = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");

  useEffect( () => {
    if (localStorage.getItem('user')) {
      const user =  JSON.parse(localStorage.getItem('user'));
      dispatch(auth(user));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/host-page" element={<HostPage />} />
        <Route path="/guest-page" element={<GuestPage />} />
        <Route path="/edit-property/:id" element={<UpdateProperty />} />
        <Route path="/try" element={<TryOut />} />
        <Route path="/images/:id" element={<UploadImagePage/>}/>

        <Route path="/post-property" element={<PostProperty />} />

        <Route path="/property/:id" element={<Property />} />
      </Routes>
    </Router>
  );
};

export default App;
