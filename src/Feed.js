import CreateIcon from "@material-ui/icons/Create";
import React, { useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import ImageIcon from "@material-ui/icons/Image";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import DateRangeIcon from "@material-ui/icons/DateRange";
import Post from "./Post";

function Feed() {
  //react hooks
  const [posts, setPosts] = useState([]);

  const sendPost = (e) => {
    e.preventDefault();
  };
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" placeholder="Start a post" />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
          <InputOption Icon={VideoLibraryIcon} title="Video" color="#7fc15e" />
          <InputOption Icon={DateRangeIcon} title="Event" color="#e7a33e" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#f5987e"
          />
        </div>
      </div>
      {/* Building the Post Section */}

      {posts.map((post) => (
        <Post />
      ))}
      <Post
        name="Joel Angel"
        description="Testing Testing"
        message="apex legends is a game"
      />
    </div>
  );
}

export default Feed;
