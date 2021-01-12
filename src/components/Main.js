import React, { useState, useRef } from "react";
import Aside from "./Aside";
import ChatSection from "./ChatSection";
import Nav from "./Nav";

const Main = ({ accounts, setAccounts, userChatsList }) => {
  const [activeNav, setActiveNav] = useState(false);
  const openNav = () => {
    setActiveNav(!activeNav);
  };
  const closeNav = (e) => {
    if (
      (e.target.className === "chat" ||
        (e.target.localName === "main" && activeNav) ||
        e.target.className === "chat-section") &&
      activeNav
    ) {
      setActiveNav(!activeNav);
    }
  };

  //References
  const chatAlertRef = useRef();
  const chatRef = useRef();

  //State
  const [currentChat, setCurrentChat] = useState({});
  const [currentUser, setCurrentUser] = useState(accounts[0]);

  return (
    <main onClick={closeNav}>
      <Nav
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />
      <Aside
        openNav={openNav}
        accounts={accounts}
        setAccounts={setAccounts}
        chatAlertRef={chatAlertRef}
        currentUser={currentUser}
        setCurrentChat={setCurrentChat}
        userChatsList={userChatsList}
      />
      <ChatSection
        chatAlertRef={chatAlertRef}
        chatRef={chatRef}
        currentUser={currentUser}
        currentChat={currentChat}
      />
    </main>
  );
};

export default Main;
