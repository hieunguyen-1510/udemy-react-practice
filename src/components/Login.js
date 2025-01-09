import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { loginApi } from "../services/UserService";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [loadingAPI, setLoadingAPI] = useState(false);

  const navigate = useNavigate();

  const { loginContext } = useContext(UserContext);

  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     navigate("/");
  //   }
  // }, [])

  const handleLogin = async () => {
    if (!email || !password) {
      toast.error("Email/Password is required!");
      return;
    }
    setLoadingAPI(true);
    let res = await loginApi(email.trim(), password);
    if (res && res.token) {
      // success
      loginContext(email, res.token);
      navigate("/");
    } else {
      // error
      if (res && res.status === 400) {
        toast.error(res.data.error);
      }
    }
    setLoadingAPI(false);
    // console.log(">>> check res:", res.token);
  };

  const handleGoBack = () => {
    navigate("/");
  };

  const handlePressEnter = async (event) => {
    if (event && event.key === "Enter") 
    await handleLogin();
    // console.log(">>> event:", event);
  };

  return (
    <>
      <div className="login-container col-12 col-sm-4">
        <div className="title">Log in</div>
        <div className="text">Email or username (eve.holt@reqres.in) </div>
        <input
          type="text"
          placeholder="Email or username..."
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className="input-2">
          <input
            type={isShowPassword === true ? "text" : "password"}
            placeholder="Password..."
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            onKeyDown={(event) => handlePressEnter(event)}
          />
          <i
            className={
              isShowPassword === true
                ? "fa-solid fa-eye"
                : "fa-solid fa-eye-slash"
            }
            onClick={() => setIsShowPassword(!isShowPassword)}
          ></i>
        </div>
        <button
          className={email && password ? "active" : ""}
          disabled={email && password ? false : true}
          onClick={() => handleLogin()}
        >
          {loadingAPI && <i className="fa-solid fa-spinner"></i>}
          &nbsp; Log in
        </button>
        <div className="back">
          <i className="fa-solid fa-angles-left"></i>
          <span onClick={() => handleGoBack()}>&nbsp;Go back</span>
        </div>
      </div>
    </>
  );
};
export default Login;
