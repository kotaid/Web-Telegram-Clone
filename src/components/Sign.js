import React, { useRef } from "react";
//Router
import { useHistory } from "react-router-dom";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";
const Sign = ({ auth, storage, db }) => {
  //Router
  const history = useHistory();
  //References
  const chooseImgInput = useRef(),
    chooseImgPreview = useRef(),
    firstNameRef = useRef(),
    lastNameRef = useRef(),
    emailRef = useRef(),
    passwordRef = useRef();

  //Function Handlers
  const avatarImgPreview = () => {
    if (chooseImgInput.current.files !== undefined) {
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        const img = reader.result;
        chooseImgPreview.current.innerHTML = `<img src="${img}"/>`;
        return img;
      });
      reader.readAsDataURL(chooseImgInput.current.files[0]);
    } else {
      return null;
    }
  };

  const signUpUser = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((cred) => {
        console.log(cred);
        const userStorage = storage.child(`${cred.user.uid}`),
          avatarImage = userStorage.child("avatar-img");
        avatarImage.put(chooseImgInput.current.files[0]).then(() => {
          history.push("/chat");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="sign">
      <div className="container">
        <form action="" id="header">
          <div
            id="choose-img"
            ref={chooseImgPreview}
            onClick={() => {
              chooseImgInput.current.click();
            }}
          >
            <FontAwesomeIcon icon={faCamera} className="icon"></FontAwesomeIcon>
          </div>
          <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            ref={chooseImgInput}
            onChange={avatarImgPreview}
            required
          />
          <div>
            <div className="field-wrapper">
              <input type="text" ref={firstNameRef} required />
              <label htmlFor="">
                <span>first name</span>
              </label>
            </div>
            <div className="field-wrapper">
              <input type="text" ref={lastNameRef} required />
              <label htmlFor="">
                <span>last name</span>
              </label>
            </div>
          </div>
        </form>
        <form action="" id="footer">
          <div className="field-wrapper">
            <input type="text" required ref={emailRef} />
            <label htmlFor="">
              <span>Email Adress</span>
            </label>
          </div>
          <div className="field-wrapper">
            <input type="password" required ref={passwordRef} />
            <label htmlFor="">
              <span>Password</span>
            </label>
          </div>
          <div className="field-wrapper">
            <input type="password" required />
            <label htmlFor="">
              <span>Repeat Password</span>
            </label>
          </div>
          <button onClick={signUpUser}>Join Telegram</button>
        </form>
      </div>
    </div>
  );
};

export default Sign;
