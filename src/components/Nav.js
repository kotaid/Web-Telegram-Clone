import React from "react";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faUser,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBullhorn,
  faChevronDown,
  faCog,
  faPhoneAlt,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const Nav = ({ activeNav, currentUser, setCurrentUser }) => {
  return (
    <nav className={`${activeNav === true ? "active-nav" : ""}`}>
      <div className="nav-header">
        <div>
          <img src={currentUser.accountPic} alt="" />
          <FontAwesomeIcon className="icon" icon={faBookmark}></FontAwesomeIcon>
        </div>
        <div>
          <div>
            <h3>{currentUser.name}</h3>
            <p>User Phone</p>
          </div>
          <FontAwesomeIcon
            className="icon"
            icon={faChevronDown}
          ></FontAwesomeIcon>
        </div>
      </div>
      <div className="nav-list">
        <div>
          <FontAwesomeIcon
            className="icon"
            icon={faUserFriends}
          ></FontAwesomeIcon>
          <span>New Group</span>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faBullhorn}></FontAwesomeIcon>
          <span>New Channel</span>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faUser}></FontAwesomeIcon>
          <span>Contacs</span>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faPhoneAlt}></FontAwesomeIcon>
          <span>Calls</span>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faCog}></FontAwesomeIcon>
          <span>Settings</span>
        </div>
        <div>
          <FontAwesomeIcon className="icon" icon={faMoon}></FontAwesomeIcon>
          <span>Night Mode</span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
