import { faSmileBeam } from "@fortawesome/free-regular-svg-icons";
import {
  faColumns,
  faEllipsisV,
  faMicrophone,
  faPaperclip,
  faPhoneAlt,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useRef } from "react";

const Chat = ({ currentUser, currentChat, setCurrentChat }) => {
  //DOM Refrences
  const fileInputRef = useRef();
  const messageInputRef = useRef();
  const messagesBoxRef = useRef();

  //Funcions And Handles
  const sendMessage = (e) => {
    const message = messageInputRef.current.value;

    if (e.key === "Enter" && message !== "") {
      setCurrentChat({
        ...currentChat,
        messages: [
          ...currentChat.messages,
          {
            message: message,
            date: moment().hours() + ":" + moment().minutes(),
          },
        ],
      });

      console.log("Enter", currentChat.messages);
    }
  };

  //Effect
  /* const [lastMessage, setLastMessage] = useState();
  useEffect(() => {
    if (currentChat.messages !== undefined) {
      let messageBox = <div>{currentChat.messages.pop().message}</div>;
      console.log(messageBox);
    }
    return null;
  }, [currentChat.messages]); */
  return (
    <div className="chat">
      <div className="chat-header">
        <div className="connect-info">
          <h4>
            {currentChat.chatName !== undefined ? currentChat.chatName : ""}
          </h4>
          <span>
            last seen
            {currentChat.user !== undefined
              ? " " + currentChat.user.lastConnect
              : " "}
          </span>
        </div>
        <div className="chat-header-icons">
          <span>
            <FontAwesomeIcon className="icon" icon={faSearch}></FontAwesomeIcon>
          </span>
          <span>
            <FontAwesomeIcon
              className="icon"
              icon={faPhoneAlt}
            ></FontAwesomeIcon>
          </span>
          <span>
            <FontAwesomeIcon
              className="icon"
              icon={faColumns}
            ></FontAwesomeIcon>
          </span>
          <span>
            <FontAwesomeIcon
              className="icon"
              icon={faEllipsisV}
            ></FontAwesomeIcon>
          </span>
        </div>
      </div>
      <div className="messages-box" ref={messagesBoxRef}></div>
      <div className="typing-field">
        <input type="file" ref={fileInputRef} />
        <button>
          <FontAwesomeIcon
            className="icon"
            icon={faPaperclip}
            onClick={() => fileInputRef.current.click()}
          ></FontAwesomeIcon>
        </button>
        <input
          type="text"
          placeholder="write a message"
          onKeyDown={sendMessage}
          ref={messageInputRef}
        />
        <button>
          <FontAwesomeIcon
            className="icon"
            icon={faSmileBeam}
          ></FontAwesomeIcon>
        </button>
        <button>
          <FontAwesomeIcon
            className="icon"
            icon={faMicrophone}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Chat;
