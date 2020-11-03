import React, { useEffect } from 'react';
import { container } from './style.js';

const Toast = ({ text })=>{

    useEffect(()=>{

    }, []);
    
    return(
        <div className={container}>
            <p className="text">{text}</p>
        </div>
    )
}

export default Toast;