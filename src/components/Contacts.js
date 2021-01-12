import React from "react";
import Contact from "./Contact";

const Contacts = ({
  accounts,
  chatAlertRef,
  chatRef,
  currentChat,
  setCurrentChat,
  userChatsList,
}) => {
  return (
    <div className="contacts">
      {accounts.map((account) => {
        return (
          <Contact
            account={account}
            id={account.id}
            key={account.id}
            chatAlertRef={chatAlertRef}
            chatRef={chatRef}
            currentChat={currentChat}
            setCurrentChat={setCurrentChat}
            accounts={accounts}
            userChatsList={userChatsList}
          />
        );
      })}
    </div>
  );
};

export default Contacts;
