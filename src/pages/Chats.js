import { Fragment } from "react";
import ChatContainer from "../components/ChatContainer";
import UserContainer from "../components/UserContainer";
import { useMediaQuery } from "react-responsive";

const Chats = () => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 856px)" });
  return (
    <Fragment>
      <div className="header"></div>
      <div className="container">
        {!isTabletOrMobile && <UserContainer />}
        <ChatContainer />
      </div>
    </Fragment>
  );
};
export default Chats;
