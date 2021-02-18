import React, { useEffect } from "react";
import Chat from "./Chat";

const ChatSection = ({
  chatAlertRef,
  currentUser,
  currentChat,
  setCurrentChat,
}) => {
  return (
    <div className="chat-section">
      <div id="choose-chat" ref={chatAlertRef}>
        Select a chat to start messaging
      </div>
      <Chat
        currentUser={currentUser}
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
      />
    </div>
  );
};

export default ChatSection;
