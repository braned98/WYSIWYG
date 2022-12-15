import React from "react";

import "./Login.css";

import useInput from "../../hooks/use-input";

const LoginForm = (props) => {
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


    fetch("https://localhost:7127/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((res) => {console.log(res)
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', res.user);
    }
        );

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
