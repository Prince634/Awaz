import React from 'react';
import Header from './header.js';
import HowItWorks from './howItWorks.js';
import Form from './form.js';
import { container } from './styles.js';

const HomePage = ()=>{

    return(
        <div className={container}>
            <Header/>
            <HowItWorks/>
            <Form/>
        </div>
    )
}

export default HomePage;