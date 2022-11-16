import React, { useState } from 'react';
import './Button.css'

const Button = ({title, type, onClick, disable}) => {
    return ( 
        <button className={`btn ${
            (type === "add" && "add") ||
            (type === "remove" && "remove") ||
            (type === "checkout" && "checkout")
        }`}
        onClick={onClick}
        disabled={disable}
        >
            {title}
        </button>
     );
}
 
export default Button;