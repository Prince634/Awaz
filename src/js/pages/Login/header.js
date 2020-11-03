import React from 'react';
import { head, bgImg } from './style.js';
import BckImg from '@assets/gradient.png';
import ProfileIcon from '@assets/profile.png';

const Header = ()=>{

    return(
        <>
            <img src={BckImg} className={bgImg}/>
            <div className={head}>
                <p>Awaz</p>
            </div>
        </>
    )
}

export default Header;