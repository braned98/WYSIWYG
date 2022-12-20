import React from "react";

import "./Login.css";

import useInput from "../../hooks/use-input";
import { login } from "../../services/userService";
import { useSelector, useDispatch } from "react-redux";
import { userActions, routerActions } from "../../store/index";
import axios from 'axios';



const LoginForm = (props) => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.user);

  const {
    value: enteredUserName,
    isValid: enteredUserNameIsValid,
    hasError: userNameInputHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length >= 6);

  let formIsValid = false;

  if (enteredUserNameIsValid && enteredPasswordIsValid) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    const userData = {
      username: enteredUserName,
      password: enteredPassword,
    };

    const headers = {
        "Content-type": "application/json",
        "Accept": "application/json",
    }

    axios.post("https://localhost:7127/login", JSON.stringify(userData), {headers})
    .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('username', res.data.user);
        localStorage.setItem('userId', res.data.userId);
        localStorage.setItem('router', "My Documents");
        dispatch(routerActions.updateRoute('My Documents'));
        dispatch(userActions.login());
        
    }
    ).catch((err) => {
        console.log(err);
    })

    //resetUserNameInput();
    //resetPasswordInput();
  };

  const usernameInputClasses = userNameInputHasError
    ? "form-control error"
    : "form-control";

  const passwordInputClasses = passwordInputHasError
    ? "form-control error"
    : "form-control";

  return (
    <div className="login-container">
      <div className="login-form">
        <form id="form" className="form" onSubmit={formSubmissionHandler}>
          <h2>Login</h2>
          <div className={usernameInputClasses}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              onChange={userNameChangeHandler}
              onBlur={userNameBlurHandler}
              value={enteredUserName}
              placeholder="Enter username"
            />
            {userNameInputHasError && <small>Error message</small>}
          </div>
          <div className={passwordInputClasses}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={passwordChangeHandler}
              onBlur={passwordBlurHandler}
              value={enteredPassword}
              placeholder="Enter password"
            />
            {passwordInputHasError && (
              <small>Password must have six characters.</small>
            )}
          </div>
          <button type="submit" disabled={!formIsValid}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
