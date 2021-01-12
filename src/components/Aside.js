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
  currentUser,
}) => {
  return (
    <aside>
      <AsideHeader openNav={openNav} />
      <Contacts
        accounts={accounts}
        chatAlertRef={chatAlertRef}
        currentChat={currentChat}
        setCurrentChat={setCurrentChat}
        userChatsList={userChatsList}
        currentUser={currentUser}
      />
    </aside>
  );
};

export default Aside;
