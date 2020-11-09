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

    const startRecording = useCallback(()=>{
        const stream = videoRef.current.srcObject;
        const lengthInMS = 5000;
        const recorder = new MediaRecorder(stream);
        const data = [];
        recorder.ondataavailable = event=>data.push(event.data);
        recorder.start();
        
        function wait(delayInMS) {
            return new Promise(resolve => setTimeout(resolve, delayInMS));
        }

        let stopped = new Promise((resolve, reject) => {
            recorder.onstop = resolve;
            recorder.onerror = event => reject(event.name);
          });

        let recorded = wait(lengthInMS).then(
            () => { stopRecording();
                recorder.state == "recording" && recorder.stop();
            }
        );

        return Promise.all([
            stopped,
            recorded
          ])
        .then(() => data);

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
        startRecording().then((resp)=>{
            stopRecording();
            //
            const recordedBlob = new Blob(resp, { type: "video/webm"});
            playNow.current.src = URL.createObjectURL(recordedBlob);
            playNow.current.load();
            playNow.current.autoplay = false;
            playNow.current.controls = true;
        });
    },[startRecording, stopRecording, playNow])

    useEffect(()=>{
        //startClicked();
    },[])

    const sendVideo = useCallback(()=>{
        startRecording().then((resp)=>{
            stopRecording();
            //
            const recordedBlob = new Blob(resp, { type: "video/webm"});
            const requestOptions = {
                method: 'POST',
               // headers: { 'Content-Type': 'application/json' },
                body: recordedBlob,
            }
            fetch('http://localhost:4009/login', requestOptions).then((resp)=>{
                console.log(resp.body);
            }).catch((e)=>{
                console.log(e);
            })
        });
    },[]);

    return(
        <div className={videoContainer}>
            <div className="video">
                <video ref={videoRef} width="100%" height="50%" autoPlay></video>
            </div>
            <video ref={playNow} width="100%" height="40%" controls></video>
            <div className="buttons">
                <button type="submit" onClick={stopRecording}>Cancel</button>
                <button type="submit" onClick={startClicked}>Start</button>
                <button type="submit" onClick={saveVideo}>Play Now</button>
            </div>
        </div>
    )
}

export default RecordVideo;