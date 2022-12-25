import React from "react";

import "./Button.css";

const Button = (props) => {


  const onClickHandler = () => {
    if (props.children === "Login") {
      props.onLoginClick();
    } else if (props.children === "Register") {
      props.onRegisterClick();
    } else if(props.children === "Document") {
      props.onDocumentClick();
    }else if(props.children === "Logout"){
        props.onLogoutClick();
    }else if(props.children === "My Documents"){
        props.onMyDocumentClick();
    }else if(props.children === "New Document"){
        props.onNewDocumentClick();
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
