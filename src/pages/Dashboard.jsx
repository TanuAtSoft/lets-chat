import { Fragment, useEffect,useState } from "react";
import UserContainer from "../components/UserContainer";
import ChatContainer from "../components/ChatContainer";
import DefaultChatContainer from "../components/DefaultChatContainer";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'

const Dashboard = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 856px)' })
   
  return (
    <Fragment>
      <div className="header"></div>
      <div className="container">
     <UserContainer />
      {!isTabletOrMobile && <DefaultChatContainer/>}
      </div>
    </Fragment>
  );
};
export default Dashboard;
