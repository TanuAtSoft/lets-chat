import { Fragment, useEffect,useState } from "react";
import UserContainer from "../components/UserContainer";
import ChatContainer from "../components/ChatContainer";
import DefaultChatContainer from "../components/DefaultChatContainer";
import ProfileIcon from "../components/ProfileIcon";
import { useMediaQuery } from 'react-responsive'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 856px)' })
    const navigate = useNavigate()
   
  return (
    <Fragment>
      <div className="header">
        <div className="profile-icon" onClick={()=> navigate("/profile")}>
          {" "}
          <ProfileIcon />
        </div>
      </div>
      <div className="container">
     <UserContainer />
      {!isTabletOrMobile && <DefaultChatContainer/>}
      </div>
    </Fragment>
  );
};
export default Dashboard;
