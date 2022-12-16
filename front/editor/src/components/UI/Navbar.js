import React from "react";
import Button from "./Button";

import "./Navbar.css";

import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/index";

const Navbar = (props) => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const loginHandler = () => {
    props.onLogin();
  };

  const regHandler = () => {
    props.onRegister();
  };

  const docHandler = () => {
    props.onDocument();
  };

  const logoutHandler = () => {
    props.onLogout();
  };

  return (
    <div className="navbar">
      {<Button onDocumentClick={docHandler}>Document</Button>}
      {isLoggedIn && <Button onDocumentClick={docHandler}>My Documents</Button>}
      {isLoggedIn && <Button onDocumentClick={docHandler}>New Document</Button>}
      {!isLoggedIn && <Button onLoginClick={loginHandler}>Login</Button>}
      {!isLoggedIn && <Button onRegisterClick={regHandler}>Register</Button>}
      {isLoggedIn && <Button onLogoutClick={logoutHandler}>Logout</Button>}
    </div>
  );
};

export default Navbar;
