import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import Login from "./Login";

function App() {
  //pulling the user from the data store
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  //lets now save our login if logged in or not
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        //the user is logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);

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
    ?. is the optional chaining
 */
