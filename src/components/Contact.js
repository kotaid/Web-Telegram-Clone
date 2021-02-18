import React from "react";

const Contact = ({
  account,
  chatAlertRef,
  currentUser,
  currentChat,
  setCurrentChat,
  userChatsList,
}) => {
  //Function And Handlers
  const openChat = (e) => {
    setCurrentChat(userChatsList.filter((chat) => chat.id === e.target.id)[0]);
    chatAlertRef.current.classList.add("open-chat");
  };

  return (
    <div className="contact" id={account.id} onClick={openChat}>
      <img src={account.accountPic} alt="" />
      <div>
        <h4>
          {account.name !== currentUser.name ? account.name : "Saved messages"}
        </h4>
        <p>{account.lastMessage}</p>
      </div>
      <span>{account.lastConnect}</span>
    </div>
  );
};

export default Contact;
