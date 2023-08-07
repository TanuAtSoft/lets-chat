import { Link } from "react-router-dom";
import { useState } from "react";
import { signUp } from "../apis/signUp/signUp";

const Register = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

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
      const res = await signUp(user);
      console.log("res", res);
    }
  };
  return (
    <div className="register-container">
      <div className="register-page-inner-container">
        <h3>Register</h3>
        <div className="register-name">
          <input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={(e) => handleChange(e)}
          />
        </div>
        <br />
        <input
          type="email"
          placeholder="your email"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <button style={{ width: "100%" }} onClick={(e)=>handleSumbit(e)}>Register</button>
        <div className="login-right-bottom-div">
          <Link to="/login">
            <p>login</p>
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
export default Register;
