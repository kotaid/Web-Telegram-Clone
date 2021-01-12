import React, { useEffect } from "react";

const Contact = ({
  account,
  id,
  chatAlertRef,
  chatRef,
  currentChat,
  setCurrentChat,
  userChatsList,
}) => {
  const openChat = (e) => {
    chatAlertRef.current.classList.add("open-chat");

    setCurrentChat(userChatsList.filter((chat) => chat.id === e.target.id)[0]);
  };

  return (
    <div className="contact" id={id} onClick={openChat}>
      <img src={account.accountPic} alt="" />
      <div>
        <h4>{account.name}</h4>
        <p>{account.lastMessage}</p>
      </div>
      <span>{account.lastConnect}</span>
    </div>
  );
};

export default Contact;
