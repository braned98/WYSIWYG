import React from 'react';


import './Button.css';



const Button = (props) => {
    const onClickHandler = () => {
        if(props.children === 'Login'){
            props.onLoginClick();
        }else{
            props.onRegisterClick();
        }
    
    }


    return <div>
        <button onClick={onClickHandler} className="button">
            {props.children}
        </button>
    </div>
}

export default Button;


