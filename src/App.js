import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        {/* Sidebar  */}
        <Sidebar />
        {/* Feed */}
        <Feed />
      </div>
      {/* Widgets */}
    </div>
  );
}

export default App;

/* 
  const firebaseConfig = {
  apiKey: "AIzaSyADXUBgA7Wk4GxjMCsSg4taIFMiHq8KgeM",
  authDomain: "linkedin-app-ja.firebaseapp.com",
  projectId: "linkedin-app-ja",
  storageBucket: "linkedin-app-ja.appspot.com",
  messagingSenderId: "859884917146",
  appId: "1:859884917146:web:1716dcf91f44924f9c2a23"
};
*/
/*
    Remember to check out unit testing
 */
