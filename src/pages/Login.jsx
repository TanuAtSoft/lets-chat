import ChatIcon from "../components/ChatIcon";
const Login =()=>{
    return(
        <div className= "login-container">
            <div className="login-page-left-container">
                <ChatIcon/>
             <h1>Let's Chat</h1>
             <p>Where world connects..</p>
            </div>
            <div className="login-page-right-container">
                <h3>Login</h3>
                 <input type="email" placeholder="  your email"/>
                 <br/>
                 <br/>
                 <input type="password" placeholder="  password"/>
                 <div className="login-right-bottom-div">
                    <p>register</p>
                    <p>forgot-password</p>
                 </div>
            </div>
        </div>
    )
}
export default Login;