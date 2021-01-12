import React from "react";
//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const AsideHeader = ({ openNav }) => {
  return (
    <div className="aside-header">
      <FontAwesomeIcon
        id="openNavIcon"
        className="icon"
        icon={faBars}
        onClick={openNav}
      ></FontAwesomeIcon>
      <input type="text" placeholder="Search" />
    </div>
  );
};

export default AsideHeader;
