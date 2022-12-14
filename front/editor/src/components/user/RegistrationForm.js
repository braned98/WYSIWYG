import React from "react";

import "./RegistrationForm.css";

import useInput from "../../hooks/use-input";

const RegistrationForm = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredUserName,
    isValid: enteredUserNameIsValid,
    hasError: userNameInputHasError,
    valueChangeHandler: userNameChangeHandler,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passwordInputHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPasswordInput,
  } = useInput((value) => value.trim().length >= 6);

  const {
    value: enteredConfirmPassword,
    isValid: enteredConfirmPasswordIsValid,
    hasError: confirmPasswordInputHasError,
    valueChangeHandler: confirmPasswordChangeHandler,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetConfirmPasswordInput,
  } = useInput((value1, value2) => value1 === value2, enteredPassword);

  let formIsValid = false;

  if (
    enteredNameIsValid &&
    enteredEmailIsValid &&
    enteredUserNameIsValid &&
    enteredPasswordIsValid &&
    enteredConfirmPasswordIsValid
  ) {
    formIsValid = true;
  } else {
    formIsValid = false;
  }

  console.log(enteredEmail);
  console.log(emailInputHasError);

  //console.log(enteredName);
  //console.log(nameInputHasError);

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
    resetUserNameInput();
    resetPasswordInput();
    resetConfirmPasswordInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control error"
    : "form-control";

  const usernameInputClasses = userNameInputHasError
    ? "form-control error"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control error"
    : "form-control";

  const passwordInputClasses = passwordInputHasError
    ? "form-control error"
    : "form-control";
  const confirmPasswordInputClasses = confirmPasswordInputHasError
    ? "form-control error"
    : "form-control";

  return (
    <div className="registration-form">
      <form id="form" className="form" onSubmit={formSubmissionHandler}>
        <h2>New User Registration</h2>
        <div className={nameInputClasses}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
            placeholder="Enter Name"
          />
          {nameInputHasError && <small>Please enter valid name.</small>}
        </div>
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
        <div className={emailInputClasses}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
            placeholder="Enter email"
          />
          {emailInputHasError && <small>Please enter a valid email.</small>}
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
          {passwordInputHasError && <small>Password must have six characters.</small>}
        </div>
        <div className={confirmPasswordInputClasses}>
          <label htmlFor="password2">Confirm Password</label>
          <input
            type="password"
            id="password2"
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlurHandler}
            value={enteredConfirmPassword}
            placeholder="Enter password again"
          />
          {confirmPasswordInputHasError && <small>Passwords do not match.</small>}
        </div>
        <button type="submit" disabled={!formIsValid}>Submit</button>
      </form>
    </div>
  );

  /*return (
    <div className="registration-form">
      <form onSubmit={formSubmissionHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={enteredName}
          ></input>
          {nameInputHasError && (
            <p className="error-text">Name must not be empty.</p>
          )}
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={enteredEmail}
          ></input>
          {emailInputHasError && (
            <p className="error-text">Please enter a valid email.</p>
          )}
        </div>
        <div className="form-actions">
          <button disabled={!formIsValid}>Register</button>
        </div>
      </form>
    </div>
  );*/
};

export default RegistrationForm;
