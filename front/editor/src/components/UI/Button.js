import React from "react";

import "./Button.css";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../../store/index";

const Button = (props) => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

  const onClickHandler = () => {
    if (props.children === "Login") {
      props.onLoginClick();
    } else if (props.children === "Register") {
      props.onRegisterClick();
    } else if(props.children === "Document") {
      props.onDocumentClick();
    }else if(props.children === "Logout"){
        props.onLogoutClick();
    }
  };

  return (
    <div>
      <button onClick={onClickHandler} className="button">
        {props.children}
      </button>
    </div>
  );
};

export default Button;
