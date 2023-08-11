import InputEmoji from "react-input-emoji";
import { useState, useRef, useEffect, useContext } from "react";
import { addMessage } from "../apis/messages/addMessage";
import { useParams } from "react-router-dom";
import { findChat } from "../apis/chats/findChat";
import { getMessages } from "../apis/messages/getMessages";
import { createChat } from "../apis/chats/createChat";
import { getUser } from "../apis/users/getUser";
import { SocketContext } from "../context/service";
import moment from "moment"

const ChatContainer = () => {
  const [text, setText] = useState("");
  let token = JSON.parse(localStorage.getItem("token"));
  const scroll = useRef();

  const socket = useContext(SocketContext);
  const [reciever, setReceiver] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const params = useParams();
  let id = JSON.parse(localStorage.getItem("id"));
  const [chatId, setChatId] = useState();
  const [messages, setMessages] = useState([]);
  const [date,setDate] = useState()

  useEffect(()=>{
    setMessages([])
  },[id])

  useEffect(() => {
    const find_chat = async () => {
      const res = await findChat(token, id, params.id);
      if (res.data?.statusCode === 200) {
        if (res?.data?.data) {
          setChatId(res.data.data._id);
          try {
            const { data } = await getMessages(token, res.data.data._id);
            console.log("data from message api",data)
            if(data.length > 0){
              const newDate = moment(data[0].createdAt).format("DD/MM/YY")
              setDate(newDate) 
            }
            setMessages(data);
          } catch (error) {
            console.log(error);
          }
        } else {
          const data = {
            senderId: id,
            receiverId: params.id,
          };
          const res = await createChat(token, data);
          if (res?.data?.statusCode === 200) {
            setChatId(res.data.data._id);
          }
        }
      }
    };
    if (id && params.id) {
      find_chat();
    }
  }, [id,params.id]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const res = await getUser(token, params.id);
      if (res.data.statusCode === 200) {
        setReceiver(res.data.data);
      }
    };
    fetchUserDetails();
  }, [params.id, token]);

  useEffect(() => {
    socket.emit("new-user-add", id);
    if (sendMessage !== null) {
      socket.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  socket.on("recieve-message", (data) => {
    console.log("recieve-message", data);
    setReceivedMessage(data);
  });

  useEffect(() => {
    const handler = (message) => {
      console.log("recieve-message", message);
      setReceivedMessage(message);
    };
    socket.on("recieve-message", handler);
    return () => socket.off("recieve-message", handler); // assuming `.off` deregisters a callback
  }, [socket]);

  useEffect(() => {
    console.log("Message Arrived: ", receivedMessage);
    if (receivedMessage !== null && receivedMessage.chatId === chatId) {
      setMessages([...messages, receivedMessage]);
    }
  }, [receivedMessage]);

  function handleOnEnter(text) {
    setText(text);
  }

  // Send Message
  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: id,
      text: text,
      chatId: chatId,
    };
    //const receiverId = chat.members.find((id)=>id!==currentUser);
    // send message to socket server
    const receiverId = params.id;
    setSendMessage({ ...message, receiverId });
    //send message to database
    try {
      const { data } = await addMessage(token, message);
      setMessages([...messages, data]);
      setText("");
    } catch {
      console.log("error");
    }
  };
  useEffect(()=> {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  },[messages])

  console.log("moment",moment("2023-08-11T09:09:22.879Z").format("DD/MM/YY HH:mm:ss"))
const findAlignment = (senderId)=>{
  console.log("id",id)
  if(senderId === id){
    return "end"
  }
  else return "start"
}
  return (
    <div className="inner-container main-container">
      <div className="chat-user">
        {reciever?.profilePicture ? (
          <img src={reciever?.profilePicture} alt="profile" />
        ) : (
          <img
            src="https://tse2.mm.bing.net/th?id=OIP.vvmpWt0qBu3LeBgZuUfmGAHaFt&pid=Api&P=0&h=180"
            alt="profile"
          />
        )}
        <p>
          {reciever?.firstname} {reciever?.lastname}{" "}
        </p>
      </div>
      <div className="hr-div">
        <hr />
      </div>
      <div className="message-div">
      {messages.map((item, id) => {
        return <div key={id}  ref={scroll} className="messages" style={{alignSelf : findAlignment(item.senderId)}}>
          <p className="text">{item.text}</p>
        <p className="time">{moment(item.createdAt).format("HH:mm")}</p>
        </div>;
      })}
      </div>

      <div className="type-chat-div">
        {/* <input tyep="text" placeholder="Type your message"></input> */}
        <div className="emoji-div" style={{ width: "90%" }}>
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
          />
        </div>
        <button onClick={(e) => handleSend(e)}>Send</button>
      </div>
    </div>
  );
};
export default ChatContainer;
