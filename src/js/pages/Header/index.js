import React from 'react';
import { useHistory } from "react-router-dom";
import { head } from './style.js';
import ProfileIcon from '@assets/profile.png';

const Category = ()=>{
    const history = useHistory();

    return(
        <>
            <div className={head}>
                <p className="heading" onClick={()=>history.push('/category')}>Awaz</p>
                <img src={ProfileIcon} alt="My Profile" onClick={()=>history.push('/home')}/>
            </div>
        </>
    )
}

export default Category;