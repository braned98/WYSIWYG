import "./App.css";

import Editor from "./components/editor/editor";
import Navbar from "./components/UI/Navbar";
import RegistrationForm from "./components/user/RegistrationForm";
import LoginForm from "./components/user/LoginForm";
import { logout } from "./services/userService";

import { useState } from "react";

import InitialDocument from "./utlis/InitialDocument";
import { useDispatch } from "react-redux";
import { userActions } from "./store/index"

function App() {
  const dispatch = useDispatch();
  


  const [initialDocument, updateDocument] = useState(InitialDocument);

  const [registration, setRegistration] = useState(false);
  const [login, setLogin] = useState(false);
  const [editor, setEditor] = useState(true);

  const onLoginHandler = () => {
    setLogin(true);
    setRegistration(false);
    setEditor(false);
  };

  const onRegisterHandler = () => {
    setLogin(false);
    setRegistration(true);
    setEditor(false);
  };

  const onDocumentHandler = () => {
    setLogin(false);
    setRegistration(false);
    setEditor(true);
  };

  const onLogoutHandler = () => {
    logout();
    dispatch(userActions.logout());
    setLogin(true);
    setRegistration(false);
    setEditor(false);
  };

  return (
    <div className="main">
      <Navbar
        onLogin={onLoginHandler}
        onRegister={onRegisterHandler}
        onDocument={onDocumentHandler}
        onLogout={onLogoutHandler}
      ></Navbar>
      {registration && <RegistrationForm></RegistrationForm>}
      {login && <LoginForm></LoginForm>}
      {editor && (
        <Editor initialDocument={initialDocument} onChange={updateDocument} />
      )}
    </div>
  );
}

export default App;
