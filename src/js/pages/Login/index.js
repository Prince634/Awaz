import React, { useState, useCallback, useRef, useEffect } from 'react';
import Header from './header.js';
import { container, cardCont, inputForm } from './style.js';
import Card from '@components/Card';

const Login = ({ history })=>{

    const [mobile, setNo] = useState('');
    const [otp, setOTP] = useState('');
    const [active, setActive] = useState(false);
    const noRef = useRef();
    const otpRef = useRef();
    const btnRef = useRef();

    useEffect(()=>{
        noRef.current.focus();
    },[]);

    const validateNo = useCallback((event)=>{
        const value = event.target.value;
        if(value.length<10){
            setNo(value);
        }else if(value.length==10){
            setNo(value);
            otpRef.current.focus();
        }
    },[mobile, active, otpRef]);

    const enterOTP = useCallback((event)=>{
        const value = event.target.value;
        if(value.length<4){
            setOTP(value);
        }else if(value.length===4){
            setOTP(value);
            otpRef.current.blur();
            btnRef.current.focus();
            setActive(true);
        }
    },[otpRef, btnRef]);

    const submitOtp = useCallback(()=>{
        history.push('/category');
    },[]);


    return(
        <div className={container}>
            <Header/>
            <div className={cardCont}>
                <Card styleProps={{ height:"340", minWidth: '200px', width:"80%", maxWidth: '340px' }} className="cont">
                    <div className={inputForm}>
                        <div className="row">
                            <label>Enter Mobile No</label>
                            <input type="tel" value={mobile} ref={noRef} onChange={validateNo}/>
                        </div>
                        <div className="row">
                            <label>Enter OTP</label>
                            <input type="number" value={otp} ref={otpRef} autocomplete="one-time-code" onChange={enterOTP}/>
                            {false && <div className="resend">Resend</div>}
                        </div>
                        <button className={`submit ${active?'':'disabled'}`} type="submit" ref={btnRef} onClick={submitOtp}>Submit</button>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Login;