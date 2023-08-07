import {resetPasswordRequest} from "../apis/signIn/resetPassword"
import { useState } from "react";
import { useParams ,useNavigate} from "react-router-dom";

const ResetPassword=()=>{
    const [user, setUser] = useState({ password: "", confirmPassword: "" });
    const [perror, setPError] = useState(false);
    const [cperror, setCPError] = useState(false);
    const params =  useParams()
    const navigate = useNavigate()
    const onChangeHandler = (e) => {
      e.preventDefault();
      const name = e.target.name;
      if (name === "password") {
        setPError(false);
      }
      if (name === "confirmPassword") {
        setCPError(false);
      }
      const value = e.target.value;
      user[name] = value;
      setUser({ ...user });
    };
    const handleSubmit = async (event) => {
      event.preventDefault();
      if (user.password === "") {
        setPError(true);
      }
      if (user.password === "") {
        setCPError(true);
      }
  
      if (user.password === "" || user.confirmPassword === "") {
        return;
      }
      if (user.password !== user.confirmPassword) {
        alert("Password and Conform Password doesn't match");
        return;
      } else {
        const res = await resetPasswordRequest(params.token,{ newPassword: user.password });
       
        if (res.data?.statusCode  === 200) {
          alert(res.data.statusMessage);
          navigate("/login")
        }
        if(res.remote === "failure"){
          alert(res.errors.errors)
        }
      }
    };
  
return(
    <div className="register-container">
    <div className="register-page-inner-container"  style={{minWidth:"250px"}}>
       <div className="forgot-password-text">
       <h3>Reset your password</h3>
       </div>
       <br/>
        <input type="password" placeholder="new password" name="password" onChange={(e)=>onChangeHandler(e)}/>
        <br/>
        <br/>
        <input type="password" placeholder="confirm password" name="confirmPassword" onChange={(e)=>onChangeHandler(e)}/>
        <br/>
        <br/>
        <button style={{width:"100%"}} onClick={(e)=>handleSubmit(e)}>Send</button>
        <div className="login-right-bottom-div">
        </div>
   </div>
</div>
)
}
export default ResetPassword;