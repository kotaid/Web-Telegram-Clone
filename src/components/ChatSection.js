import React, { useEffect } from "react";
import Chat from "./Chat";

const ChatSection = ({ chatAlertRef, currentUser, currentChat, chatRef }) => {
  const OpenChat = () => {
    useEffect(() => {
      return <Chat currentUser={currentUser} currentChat={currentChat} />;
    }, [currentChat]);

    return null;
  };
  return (
    <div className="chat-section">
      <div id="choose-chat" ref={chatAlertRef}>
        Select a chat to start messaging
      </div>
      <OpenChat />
    </div>
  );
};

export default ChatSection;
