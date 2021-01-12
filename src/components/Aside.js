import React from "react";

//Import Components
import AsideHeader from "./AsideHeader";
import Contacts from "./Contacts";

const Aside = ({
  openNav,
  accounts,
  chatAlertRef,
  chatRef,
  currentChat,
  setCurrentChat,
  userChatsList,
}) => {
  return (
    <aside>
      <AsideHeader openNav={openNav} />
      <Contacts
        accounts={accounts}
        chatAlertRef={chatAlertRef}
        chatRef={chatRef}
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
        userChatsList={userChatsList}
      />
    </aside>
  );
};

export default Aside;
