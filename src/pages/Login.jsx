import { Link } from "react-router-dom";
import { signIn } from "../apis/signIn/signIn";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });
  const navigate = useNavigate();
   const token = JSON.parse(localStorage.getItem("token"));

   useEffect(()=>{
   if(token){
    navigate("/dashboard")
   }
   },[navigate, token])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    user[name] = value;
    setUser({ ...user });
  };
  const [errorFields, setErrorFields] = useState([]);
  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele !== value;
    });
  }

  const handleSumbit = async (e) => {
    e.preventDefault();
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (user.email === "" || !user.email.match(emailRegex)) {
      if (!errorFields.includes("email"))
        setErrorFields((prevState) => [...prevState, "email"]);
    }
    if (!user.email || user.email.match(emailRegex)) {
      setErrorFields(arrayRemove(errorFields, "email"));
    }
    if (user.password === "" || !/\S/.test(user.password)) {
      if (!errorFields.includes("password"))
        setErrorFields((prevState) => [...prevState, "password"]);
    }
    if (!user.password || /\S/.test(user.password)) {
      setErrorFields(arrayRemove(errorFields, "password"));
    }
    const testPass =
      user.email !== "" &&
      user.email.match(emailRegex) &&
      user.password !== "" &&
      /\S/.test(user.password);
    if (testPass) {
      const res = await signIn(user);
      if (res?.remote === "success") {
        if (res?.data?.statusCode === 200) {
          localStorage.setItem(
            "token",
            JSON.stringify(res?.data?.data?.user?.token)
          );
          localStorage.setItem("user", JSON.stringify(res?.data?.data?.user?.name));
          localStorage.setItem("id", JSON.stringify(res?.data?.data?.user?.id));
          navigate("/dashboard");
        } else {
          alert(res?.data?.statusMessage);
        }
      }
      if (res?.remote === "failure") {
        alert(res?.errors?.errors);
      }
    }
  };
  return (
    <div className="login-container">
      <div className="icon">
        <img
          src="/loginLogo.png"
          alt="logo"
          style={{ width: "100px", marginRight: "-20px" }}
        />
      </div>
      <div className="login-page-left-container">
        <h1>Let's Chat</h1>
        <p>Where the world connects..</p>
      </div>
      <div className="login-page-right-container">
        <h3>Login</h3>
        <input
          type="email"
          name="email"
          value={user.email}
          placeholder="your email"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <button style={{ width: "100%" }} onClick={(e) => handleSumbit(e)}>
          Login
        </button>
        <div className="login-right-bottom-div">
          <Link to="/register">
            <p>register</p>
          </Link>
          <Link to="/forgot-password">
            {" "}
            <p>forgot-password</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Login;
