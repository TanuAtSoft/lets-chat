import { useEffect, useState, useContext } from "react";
import SingleUser from "./SingleUser";
import { getChat } from "../apis/chats/getChat";
import { getUsers } from "../apis/users/getUsers";
import { SocketContext } from "../context/service";

const UserContainer = () => {
  const socket = useContext(SocketContext);
  const [users, setUsers] = useState([]);
  let token = JSON.parse(localStorage.getItem("token"));
  let id = JSON.parse(localStorage.getItem("id"));
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);

  useEffect(() => {
    socket.emit("new-user-add", id);
    socket.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [id]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await getUsers(token);
      if (res.data.statusCode === 200) {
        setUsers(res?.data?.data);
      }
    };
    // const fetchChats = async () => {
    //   const res =await getChat(token, id);
    //   if(res.data.statusCode ===  200){
    //     setUsers(res?.data?.data?.chat)
    //   }
    // };
    fetchUsers();
  }, [id, token]);

  return (
    <div className="inner-container sideBar-container">
      <div className="sidebar-text">
        <h3>Chats</h3>
      </div>
      {users.length === 0 && (
        <p style={{ padding: "0px 20px" }}>Connect to your friends</p>
      )}
      <br />
      {users.length > 0 &&
        users.map((item, id) => {
          return <SingleUser key={id} item={item} onlineUsers={onlineUsers} />;
        })}
    </div>
  );
};
export default UserContainer;
