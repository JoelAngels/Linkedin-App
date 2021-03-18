import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Login from "./Login";

function App() {
  //pulling the user from the data store
  const user = useSelector(selectUser);

  return (
    <div className="app">
      <Header />
      {/* If there is no user, I want to render a login Page, otherwise Render out the rest of the app */}
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
        </div>
      )}
      {/* Widgets */}
    </div>
  );
}

export default App;

/*
    Remember to check out unit testing
 */
