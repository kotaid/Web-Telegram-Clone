import React, { useState } from "react";
import "./styles/app.scss";
//Imoport Users Accounts
import usersAccounts from "./accounts";
import userChats from "./UserChats";
//components
import Main from "./components/Main";
import Sign from "./components/Sign";
//emoji
import "emoji-mart/css/emoji-mart.css";
//import { Picker } from "emoji-mart";

function App({ firebase }) {
  const [accounts, setAccounts] = useState(usersAccounts);
  // eslint-disable-next-line no-unused-vars
  const [userChatsList, setUserChats] = useState(userChats);
  const [userLogin, setUserLogin] = useState();
  //Firebase
  const auth = firebase.auth(),
    storage = firebase.storage().ref(),
    db = firebase.firestore();

  auth.onAuthStateChanged((user) => {
    setUserLogin(user);
  });
  const AuthState = () => {
    if (userLogin) {
      return (
        <Main
          accounts={accounts}
          setAccounts={setAccounts}
          userChatsList={userChatsList}
        />
      );
    } else return <Sign auth={auth} storage={storage} db={db} />;
  };
  return (
    <div className="App">
      <AuthState />
    </div>
  );
}

export default App;
