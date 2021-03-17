import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://blog.radware.com/wp-content/uploads/2019/10/Confidence.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Joel Angel </h2>
        <h4>Front End Engineer, ReactJS Developer</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you profile</p>
          <p className="sidebar__statNumber">2,500</p>
        </div>

        <div className="sidebar__stat">
          <p>Views of your post</p>
          <p className="sidebar__statNumber">1,550</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
