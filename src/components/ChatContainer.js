import InputEmoji from "react-input-emoji";
import { useState, useRef, useEffect, useContext, Fragment } from "react";
import { addMessage } from "../apis/messages/addMessage";
import { useParams } from "react-router-dom";
import { findChat } from "../apis/chats/findChat";
import { getMessages } from "../apis/messages/getMessages";
import { createChat } from "../apis/chats/createChat";
import { getUser } from "../apis/users/getUser";
import PlusIcon from "../components/ChatIcon";
import { SocketContext } from "../context/service";
import moment from "moment";
import { uploadImgs } from "../apis/upload/uploadImgs";
import ImageModal from "./ImageModal";
import { isValidHttpUrl,validImageUrl } from "../utils/isValidHttpUrl";

const ChatContainer = () => {
  const [text, setText] = useState("");
  let token = JSON.parse(localStorage.getItem("token"));
  const scroll = useRef();
  const [files, setFiles] = useState([]);
  const [imgPreview, setImgPreview] = useState([]);

  const socket = useContext(SocketContext);
  const [reciever, setReceiver] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const params = useParams();
  let id = JSON.parse(localStorage.getItem("id"));
  const [chatId, setChatId] = useState();
  const [messages, setMessages] = useState([]);
  const [date, setDate] = useState();

  const handleFile = async (event) => {
    let file = event.target.files[0];
    setFiles([...files, file]);
    const tempUrl = URL.createObjectURL(event.target.files[0]);
    if (imgPreview.length < 7) {
      setImgPreview([...imgPreview, tempUrl]);
    }
  };

  useEffect(() => {
    setMessages([]);
  }, [id]);

  useEffect(() => {
    const find_chat = async () => {
      const res = await findChat(token, id, params.id);
      if (res?.data?.statusCode === 200) {
        if (res?.data?.data) {
          setChatId(res?.data?.data._id);
          try {
            const { data } = await getMessages(token, res?.data?.data._id);
            if (data?.length > 0) {
              const newDate = moment(data[0]?.createdAt).format("DD/MM/YY");
              setDate(newDate);
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
            setChatId(res?.data?.data._id);
          }
        }
      }
    };
    if (id && params.id) {
      find_chat();
    }
  }, [id, params.id]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const res = await getUser(token, params.id);
      if (res?.data?.statusCode === 200) {
        setReceiver(res?.data?.data);
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
    setReceivedMessage(data);
  });

  useEffect(() => {
    const handler = (message) => {
      setReceivedMessage(message);
    };
    socket.on("recieve-message", handler);
    return () => socket.off("recieve-message", handler); // assuming `.off` deregisters a callback
  }, [socket]);

  useEffect(() => {
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
    const formData = new FormData();
    let tempText;

    if (files.length > 0) {
      files.forEach((file, i) => {
        formData.append("images", file);
      });
      const uploadedRes = await uploadImgs(formData);
      if (uploadedRes.status) {
        tempText = text + " " + uploadedRes.data.urls;
        setText(tempText);
      }
      if (!uploadedRes.status) {
        alert(uploadedRes.statusMessage);
        return;
      }
    }
    let message = {
      senderId: id,
      text: tempText ? tempText : text,
      chatId: chatId,
    };
    console.log("message", text);
    //const receiverId = chat.members.find((id)=>id!==currentUser);
    // send message to socket server
    const receiverId = params.id;
    setSendMessage({ ...message, receiverId });
    //send message to database
    try {
      const { data } = await addMessage(token, message);
      setMessages([...messages, data]);
      setText("");
      setImgPreview([]);
    } catch {
      console.log("error");
    }
  };
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const findAlignment = (senderId) => {
    if (senderId === id) {
      return "end";
    } else return "start";
  };
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
          return (
            <div
              key={id}
              ref={scroll}
              className="messages"
              style={{ alignSelf: findAlignment(item.senderId) }}
            >{
              item.text?.split(" ").map((innerItem,id)=>{
               return <Fragment>
                {validImageUrl(innerItem) ? (
                  <img src={innerItem} alt="img"  className="message-img"/>
                ) : (
                  <span className="text">{" "}{innerItem}</span>
                )}
                </Fragment>
              })
              
            }
             
              <p className="time">{moment(item.createdAt).format("HH:mm")}</p>
            </div>
          );
        })}
      </div>
      <div className="img-modals">
        <ImageModal imgPreview={imgPreview} />
      </div>

      <div className="type-chat-div">
        <div className="plus-icon">
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={(e) => handleFile(e)}
          />
          <label htmlFor="file">
            <span className="fa fa-edit edit-icon">
              <PlusIcon />{" "}
            </span>
          </label>

          {/* 
        <label for="file"> <span><PlusIcon className="edit-icon"/></span></label>
          <input
            accept="image/*"
            name="images"
            type="file"
             style={{display: "none"}}
            onChange={(e) => {
              handleFile(e);
            }}
          /> */}
        </div>
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
