import React, { useState, useRef, useEffect } from "react";

//Import Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faColumns,
  faEllipsisV,
  faPhoneAlt,
  faPaperclip,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import { faSmileBeam } from "@fortawesome/free-regular-svg-icons";

//Import UserChatsMessages
import userChats from "../UserChats";
import usersAccounts from "../accounts";

const Chat = ({ currentUser, currentChat, chatRef }) => {
  //DOM Refrences
  const fileInputRef = useRef();
  const messageInputRef = useRef();

  //Funcions And Handles
  const sendMessage = (e) => {
    const message = messageInputRef.current.value;
    if (e.key === "Enter" && message !== "") {
      console.log("Enter");
    }
  };

  return (
    <div className="chat" ref={chatRef}>
      <div className="chat-header">
        <div className="connect-info">
          <h4>{currentUser.name}</h4>
          <span>last seen {currentUser.lastConnect}</span>
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
      <div className="messages-box"></div>
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
