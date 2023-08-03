import {Link} from "react-router-dom"
const Register =()=>{
    return(
        <div className="register-container">
             <div className="register-page-inner-container">
                <h3>Register</h3>
                <div className="register-name">
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                </div>
                <br/>
                 <input type="email" placeholder="your email"/>
                 <br/>
                 <br/>
                 <input type="password" placeholder="password"/>
                 <br/>
                 <br/>
                 <button style={{width:"100%"}}>Register</button>
                 <div className="login-right-bottom-div">
                 <Link to="/login"><p>login</p></Link>
                 <Link to="/forgot-password"> <p>forgot-password</p></Link>
                 </div>
            </div>
        </div>
    )
}
export default Register;