import React, { useRef, useCallback, useEffect, useState } from 'react';
import { videoContainer } from './style.js';

const RecordVideo = ()=>{

    const videoRef = useRef();
    const [start, setStart] = useState(false);
    const [videoData, setData] = useState({});
    const playNow = useRef();

    const hasGetUserMedia = useCallback(()=>{
        return !!(navigator.mediaDevices.getUserMedia)
    },[]);


    const stopRecording = useCallback(()=>{
        const stream = videoRef.current.srcObject;
        stream.getTracks().forEach(track=>track.stop());
    },[videoRef]);
    let startRecording = null;
    const videoInfo = {
        startRecording: startRecording,
        stopRecording: stopRecording,
        recordedChunks: [],
        recorder:null
    }

    startRecording = useCallback(()=>{
        console.log(videoInfo);
        const stream = videoRef.current.srcObject;
        const lengthInMS = 5000;
        videoInfo.recorder = new MediaRecorder(stream);
        videoInfo.recorder.ondataavailable = event=>videoInfo.recordedChunks.push(event.data);
        videoInfo.recorder.start();

        // setTimeout(()=>{
        //     videoInfo.recorder.state==="recording" && videoInfo.recorder.stop();
        // },2000)
        
        // function wait(delayInMS) {
        //     return new Promise(resolve => setTimeout(resolve, delayInMS));
        // }

        // let recorded = wait(lengthInMS).then(
        //     () => { stopRecording();
        //         recorder.state == "recording";
        //     }
        // );

        // return Promise.all([
        //     recorded
        //   ]);

    },[start, videoRef]);

    const startClicked = useCallback(()=>{
        const preview = videoRef;
        navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        }).then((stream)=>{
            preview.current.srcObject = stream;
            //preview.current.captureStream = preview.current.captureStream || preview.current.mozCaptureStream;
            //return new Promise(resolve => preview.current.onplaying = resolve).catch(e=>console.log(e));
         })//.then(()=>startRecording(preview.current.srcObject, 5000))
        // .then((recordedChunks)=>{
        //     const recordedBlob = new Blob(recordedChunks, { type: "video/webm"});
        //     videoRef.current.src = URL.createObjectURL(recordedBlob);
        //     //setData(recordedBlob);
        // }).catch((e)=>{
        //     console.log(e);
        //     alert('error');
        // });
    },[videoRef, startRecording]);

    const saveVideo = useCallback(()=>{
        // startRecording().then((resp)=>{
        //     console.log(videoInfo);
        //     // const recordedBlob = new Blob(resp, { type: "video/webm"});
        //     // videoRef.current.autoplay = false;
        //     // videoRef.current.controls = true;
        //     // videoRef.current.src = URL.createObjectURL(recordedBlob);
        // });
        stopRecording();
        if(videoInfo.recorder && videoInfo.recorder.state == "recording" ){
            videoInfo.recorder.stop();
        }
        videoRef.current.load();
        console.log(videoInfo)
        const recordedBlob = new Blob(videoInfo.recordedChunks, { type: "video/webm"});
        playNow.current.autoplay = false;
        playNow.current.controls = true;
        playNow.current.src = URL.createObjectURL(recordedBlob);
        playNow.current.load();
    },[startRecording, stopRecording, playNow, videoRef])

    useEffect(()=>{
        startClicked();
    },[])

    const sendVideo = useCallback(()=>{
        stopRecording();
        if(videoInfo.recorder && videoInfo.recorder.state == "recording" ){
            videoInfo.recorder.stop();
        }
        videoRef.current.load();
        console.log(videoInfo)
        const recordedBlob = new Blob(videoInfo.recordedChunks, { type: "video/webm"});
        const fd = new FormData();
        fd.append('data', recordedBlob);
        const requestOptions = {
            method: 'POST',
            body: fd,
        }
        fetch('http://localhost:4009/login', requestOptions).then((resp)=>{
            console.log(resp.body);
        }).catch((e)=>{
            console.log(e);
        })
    },[]);

    return(
        <div className={videoContainer}>
            <div className="video">
                <video ref={videoRef} width="100%" height="50%" autoPlay></video>
            </div>
            <video ref={playNow} width="100%" height="10%" controls></video>
            <div className="buttons">
                <button type="submit" onClick={()=>videoInfo.stopRecording()}>Cancel</button>
                <button type="submit" onClick={startRecording}>Start</button>
                <button type="submit" onClick={sendVideo}>Play Now</button>
            </div>
        </div>
    )
}

export default RecordVideo;