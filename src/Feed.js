import CreateIcon from "@material-ui/icons/Create";
import React from "react";
import "./Feed.css";
import InputOption from "./InputOption";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start a post" />
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOption">
          <InputOption />
        </div>
      </div>
    </div>
  );
}

export default Feed;
