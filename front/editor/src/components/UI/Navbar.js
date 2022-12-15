import React from 'react';
import Button from './Button';

import './Navbar.css';




const Navbar = (props) => {

    const loginHandler = () => {
        props.onLogin();
    }

    const regHandler = () => {
        props.onRegister();
    }



    return <div className='navbar'>
        <Button  onLoginClick={loginHandler}>Login</Button>
        <Button onRegisterClick={regHandler}>Register</Button>
    </div>
};



export default Navbar;