import './App.css';

import Editor from './components/editor/editor';
import Navbar from './components/UI/Navbar';
import RegistrationForm from './components/user/RegistrationForm';
import LoginForm from './components/user/LoginForm';

import { useState } from 'react';

import InitialDocument from './utlis/InitialDocument';



function App() {

  const [document, updateDocument] = useState(InitialDocument);

  const [registration, setRegistration] = useState(false);
  const [login, setLogin] = useState(false);
  const [editor, setEditor] = useState(false);

  const onLoginHandler = () => {
    setLogin(true);
    setRegistration(false);
    setEditor(false);
  }

  const onRegisterHandler = () => {
    setLogin(false);
    setRegistration(true);
    setEditor(false);
  }



  return (
    <div className='main'>
      <Navbar onLogin={onLoginHandler} onRegister={onRegisterHandler}></Navbar>
      {registration && <RegistrationForm></RegistrationForm>}
      {login && <LoginForm></LoginForm>}
      {editor && <Editor document={document} onChange={updateDocument} />}
    </div>
  );
}

export default App;
