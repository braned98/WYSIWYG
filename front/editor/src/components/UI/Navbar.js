import React from 'react';
import Button from './Button';

import './Navbar.css';

const Navbar = () => {
    return <div className='navbar'>
        <Button>Login</Button>
        <Button>Register</Button>
    </div>
};



export default Navbar;