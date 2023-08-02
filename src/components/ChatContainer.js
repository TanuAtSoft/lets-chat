import InputEmoji from "react-input-emoji";
import { useState } from "react";

const ChatContainer = () => {
  const [text, setText] = useState("");

  function handleOnEnter(text) {
    console.log("enter", text);
  }
  return (
    <div className="inner-container main-container">
      <div className="chat-user">
        <img
          src="https://tse2.mm.bing.net/th?id=OIP.18J_SkGQfSPKqZzCqlsK-gHaLG&pid=Api&P=0&h=180"
          alt="profile"
        />
        <p>Selena Gomez</p>
      </div>
      <div className="hr-div">
        <hr />
      </div>

      <div className="type-chat-div">
        {/* <input tyep="text" placeholder="Type your message"></input> */}
        <div className="emoji-div" style={{width:"90%"}}>
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
          />
        </div>
        <button>
            Send
        </button>
      </div>
    </div>
  );
};
export default ChatContainer;
