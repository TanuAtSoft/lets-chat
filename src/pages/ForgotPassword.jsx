import { Link } from "react-router-dom";
import { useState } from "react";
import { forgotPassword } from "../apis/forgotPassword/forgotPassword";

const ForgotPassword = () => {
  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const onChangeHandler = (e) => {
    e.preventDefault();
    setError(false);
    const name = e.target.name;
    const value = e.target.value;
    user[name] = value;
    setUser({ ...user });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (user.email === "" || !user.email.match(emailRegex)) {
      setError(true);
    } else {
      const res = await forgotPassword({ email: user.email });
      if (res.data.statusCode === 200) {
        alert(res.data.statusMessage);
        setSuccess(true);
      }
    }
  };
  return (
    <div className="register-container">
      <div className="register-page-inner-container">
        <div className="forgot-password-text">
          <h3>Enter Your Registered email I'd</h3>
          <p>We will send you reset link to your email</p>
        </div>
        <br />
        <input type="email" placeholder="your email" name="email" onChange={(e)=>onChangeHandler(e)}/>
        <br />
        <br />
        <button style={{ width: "100%" }} onClick={(e)=>handleSubmit(e)}>Send</button>
        <div className="login-right-bottom-div">
          <Link to="/login">
            <p>login</p>
          </Link>
          <Link to="/register">
            {" "}
            <p>register</p>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
