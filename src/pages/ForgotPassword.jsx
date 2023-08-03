import { Link } from "react-router-dom";

const ForgotPassword =()=>{
    return (
        <div className="register-container">
             <div className="register-page-inner-container">
                <div className="forgot-password-text">
                <h3>Enter Your Registered email I'd</h3>
                <p>We will send you reset link to your email</p>
                </div>
                <br/>
                 <input type="email" placeholder="your email"/>
                 <br/>
                 <br/>
                 <button style={{width:"100%"}}>Send</button>
                 <div className="login-right-bottom-div">
                 <Link to="/login"><p>login</p></Link>
                 <Link to="/register"> <p>register</p></Link>
                 </div>
            </div>
        </div>
    )
}
export default ForgotPassword;