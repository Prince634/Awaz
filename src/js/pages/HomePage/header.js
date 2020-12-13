import React from 'react';
import { useHistory } from 'react-router-dom';
import { header } from './styles.js';

const Header = ()=>{
    const history = useHistory();
    return(
        <div className={header}>
            <div className="intro">
                <div className="tagLine">
                    <h1>Crack Top Companies Interview with Tips from their Employees.</h1>
                    <div className="subtext">
                    We're a group of people who are at Eval company connects you with top companies Employees, who review your resume & guide you, from the perspective of breaking into a top job at companies like Facebook, Apple, Amazon, Netflix, Google, Microsoft, and more!
                    </div>
                    <div className="cta">
                        <span className="review" onClick={()=>history.push('/home')}>Book a Session</span>
                        <span className="join">Join our Community</span>
                    </div>
                </div>
                <img className="mainImg" src="https://ucarecdn.com/246ff154-cd52-44f3-92db-2e425a2c2a08/18545197-removebg-preview-copy.png"/>
            </div>
        </div>
    )
}

export default Header;