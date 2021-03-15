import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-left">
        <img src="" alt=" " />

        <div className="header-search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header-right"></div>
    </div>
  );
}

export default Header;
