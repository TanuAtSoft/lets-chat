import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ChatIcon from "../components/ChatIcon";
import EditIcon from "../components/EditIcon";

const ProfileSettings = () => {
  const navigate = useNavigate();
  return (
    <Fragment>
      <div className="header">
        <div className="profile-icon" onClick={() => navigate("/dashboard")}>
          {" "}
          <ChatIcon />
        </div>
      </div>
      <div className="container">
        <div className="inner-container sideBar-container">
          <div className="sidebar-text">
            <br />
            <div className="settings-inner-img-div">
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.vvmpWt0qBu3LeBgZuUfmGAHaFt&pid=Api&P=0&h=180"
                alt="img profile"
              />
            </div>
            <br />
            <div className="settings-inner-div" style={{lineHeight:"0.4"}}>
              <p>
                <strong>Display Name:</strong>
              </p>
              <div className="justify"><p>Tanuja Gurung</p><EditIcon/></div>
            </div>
            <br/>
            <div className="settings-inner-div" style={{lineHeight:"0.4"}}>
              <p>
                <strong>Email:</strong>
              </p>
              <div className="justify"><p>tanuja_gurung@softprodigy.com</p><EditIcon/></div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
    //     <Fragment>
    //     <div className="header">
    //     <div className="profile-icon" onClick={()=> navigate("/dashboard")}>
    //       {" "}
    //       <ChatIcon />
    //     </div>
    //   </div>
    //   <div className="container" style={{flexDirection:"column",padding:"30px",height:"auto"}}>
    //   <div className="settings-inner-img-div">
    //     <img src="https://tse2.mm.bing.net/th?id=OIP.vvmpWt0qBu3LeBgZuUfmGAHaFt&pid=Api&P=0&h=180" alt = "img profile"/>
    //     </div>
    //     <div className="settings-inner-div">
    //     <p><strong>Display Name:</strong></p>
    //     <p>Tanuja Gurung</p>
    //     <p><strong>Email:</strong></p>
    //     <p>tanuja_gurung@softprodigy.com</p>
    //     </div>
    //     </div>
    //     </Fragment>
  );
};
export default ProfileSettings;
