import { useEffect, Fragment, useRef, useState } from "react";
import ChatContainer from "../components/ChatContainer";
import UserContainer from "../components/UserContainer";
import { useMediaQuery } from "react-responsive";
import { io } from "socket.io-client";
import { getUser } from "../apis/users/getUser";
import { useParams } from "react-router-dom";
import { createChat } from "../apis/chats/createChat";
import { findChat } from "../apis/chats/findChat";
import { getMessages } from "../apis/messages/getMessages";

const Chats = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 856px)" });
  let token = JSON.parse(localStorage.getItem("token"));

  return (
    <Fragment>
      <div className="header"></div>
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
