import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import ArrowIcon from './assets/arrow.png';
import InstructorIcon from './assets/instructor.png';
import DiscussionIcon from './assets/discussion.png';
import DocumentIcon from './assets/document.png';
import { work } from './styles.js';

const HowItWorks = ()=>{

    const history = useHistory();
    const selectInstructor = useCallback(()=>{
        history.push('/home');
    },[history]);

    return(
        <div className={work}>
            <h2>How it Works</h2>
            <div className="steps">
                <div className="step">
                    <img src={InstructorIcon} />
                    <div className="text">
                        Select the instructor of your choice from the top companies, for 1-on-1 session.
                    </div>
                    <div className="cta" onClick={selectInstructor}>Book a Session</div>
                </div>
                <div className="arrow"><img src={ArrowIcon} alt="arrow" /></div>
                <div className="step">
                    <img src={DiscussionIcon} />
                    <div className="text">Have a brief discussion with instructor, about latest job trends in the field & can take guidance for further progress in career</div>
                </div>
                <div className="arrow"><img src={ArrowIcon} alt="arrow" /></div>
                <div className="step">
                    <img src={DocumentIcon} />
                    <div className="text">Review your Resume from instructor & may refer your profile to the instructor for interview</div>
                </div>
            </div>
        </div>
    )

}

export default HowItWorks;