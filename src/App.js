import React, { useState } from "react";
import Main from "./components/Main";
import "./styles/app.scss";
//Imoport Users Accounts
import usersAccounts from "./accounts";
import userChats from "./UserChats";
function App() {
  const [accounts, setAccounts] = useState(usersAccounts);
  const [userChatsList, setUserChats] = useState(userChats);

  return (
    <div className="App">
      <Main
        accounts={accounts}
        setAccounts={setAccounts}
        userChatsList={userChatsList}
      />
    </div>
  );
}

export default App;
