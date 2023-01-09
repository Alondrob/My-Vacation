import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from "../../components/header/HeaderLayout";
import FormField from "../../components/shared-components/user-register/FormField";
import RegistrationButton from "../../components/shared-components//user-register/RegistrationButton";
import { loginUser } from "../../redux/api-requests/userRequests";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { token } = useSelector((state) => state.token);
  const token = useSelector((state => state.user.token));
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
    useEffect(() => {
    if (token) {
      navigate("/");
    }
  },[token])

  const handleInput = (stateName, value) => {
    switch (stateName) {
      case "email": {
        setFormData({ ...formData, email: value });
        break;
      }
      case "password": {
        setFormData({ ...formData, password: value });
        break;
      }
    }
  };

  const login = () => {
    dispatch(loginUser(formData));
    navigate("/");
  }
  return (
    <div className=" h-screen bg-vacation-pattern">
      <Header />

      <FormField
        stateName={"email"}
        placeholder={"Email..."}
        type={"email"}
        marginTop={"mt-36"}
        handleInput={handleInput}
      />
      <FormField
        stateName={"password"}
        placeholder={"Password..."}
        type={"password"}
        handleInput={handleInput}
      />
      <RegistrationButton
        name={"Login"}
        marginTop={"mt-12"}
        submitFunction={login}
      />
    </div>
  );
};

export default SignIn;
