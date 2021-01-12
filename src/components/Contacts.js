import React from "react";
import Contact from "./Contact";

const Contacts = ({
  accounts,
  chatAlertRef,
  chatRef,
  currentChat,
  setCurrentChat,
  userChatsList,
  currentUser,
}) => {
  return (
    <div className="contacts">
      {accounts.map((account) => {
        return (
          <Contact
            account={account}
            key={account.id}
            chatAlertRef={chatAlertRef}
            chatRef={chatRef}
            currentChat={currentChat}
            setCurrentChat={setCurrentChat}
            accounts={accounts}
            userChatsList={userChatsList}
            currentUser={currentUser}
          />
        );
      })}
    </div>
  );
};

export default Contacts;
