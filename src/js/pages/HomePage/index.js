import React from 'react';
import Header from './header.js';
import HowItWorks from './howItWorks.js';
import Form from './form.js';
import StickyHeader from './stickyHeader.js';
import Recruiter from './recruiter.js';
import { container } from './styles.js';

const HomePage = ()=>{

    return(
        <div className={container}>
            <StickyHeader isSticky/>
            <StickyHeader/>
            <Header/>
            <HowItWorks/>
            <Recruiter/>
            <Form/>
        </div>
    )
}

export default HomePage;