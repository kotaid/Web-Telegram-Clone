import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
//firebase
import firebase from "firebase";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyBf6FqDDeOAponOyy1U7bIiaVA6cF76UcE",
  authDomain: "telegram-web-clone-29a12.firebaseapp.com",
  projectId: "telegram-web-clone-29a12",
  storageBucket: "telegram-web-clone-29a12.appspot.com",
  messagingSenderId: "260298368325",
  appId: "1:260298368325:web:e1b7816460d8e641468a2c",
  measurementId: "G-7RTFDEZSGZ",
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App firebase={firebase} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
