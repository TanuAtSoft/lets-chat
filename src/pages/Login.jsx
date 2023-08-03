import {Link} from "react-router-dom"
const Login =()=>{
    return(
        <div className= "login-container">
              <div className="icon">
                <img src="/loginLogo.png" alt ="logo" style={{width:"100px",marginRight:"-20px"}}/>
                </div>
            <div className="login-page-left-container">
             <h1>Let's Chat</h1>
             <p>Where the world connects..</p>
            </div>
            <div className="login-page-right-container">
                <h3>Login</h3>
                 <input type="email" placeholder="your email"/>
                 <br/>
                 <br/>
                 <input type="password" placeholder="password"/>
                 <div className="login-right-bottom-div">
                    <Link to="/register"><p>register</p></Link>
                    <Link to="/forgot-password"> <p>forgot-password</p></Link>
                 </div>
            </div>
        </div>
    )
}
export default Login;