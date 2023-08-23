import { useEffect, Fragment, useRef, useState } from "react";
import ChatContainer from "../components/ChatContainer";
import UserContainer from "../components/UserContainer";
import { useMediaQuery } from "react-responsive";
import ProfileIcon from "../components/ProfileIcon";
import { useNavigate } from "react-router-dom";


const Chats = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 856px)" });
  let token = JSON.parse(localStorage.getItem("token"));
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
        {!isTabletOrMobile && <UserContainer />}
        <ChatContainer
        // reciever={reciever}
        // setSendMessage={setSendMessage}
        // receivedMessage={receivedMessage}
        // currentUser={id}
        // receiverId={params.id}
        // chatId= {chatId}
        // messages={messages}
        // setMessages ={setMessages}
        />
      </div>
    </Fragment>
  );
};
export default Chats;
