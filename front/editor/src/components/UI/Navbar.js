import React from "react";
import Button from "./Button";

import { useEffect } from "react";

import "./Navbar.css";

import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/index";

const Navbar = (props) => {
    
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    if (localStorage.getItem("token") != null) {
      dispatch(userActions.login());
    }
  });

  const loginHandler = () => {
    props.onLogin();
  };

  const regHandler = () => {
    props.onRegister();
  };

  const docHandler = () => {
    props.onDocument();
  };

  const docMyHandler = () => {
    props.onMyDocuments();
  };

  const docNewHandler = () => {
    props.onNewDocument();
  };

  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <div className="navbar">
      {<Button onDocumentClick={docHandler}>Document</Button>}
      {isLoggedIn && (
        <Button onMyDocumentClick={docMyHandler}>My Documents</Button>
      )}
      {isLoggedIn && (
        <Button onNewDocumentClick={docNewHandler}>New Document</Button>
      )}
      {!isLoggedIn && <Button onLoginClick={loginHandler}>Login</Button>}
      {!isLoggedIn && <Button onRegisterClick={regHandler}>Register</Button>}
      {isLoggedIn && <Button onLogoutClick={logoutHandler}>Logout</Button>}
    </div>
  );
};

export default Navbar;
