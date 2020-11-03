import React, { useEffect, useState, useCallback, useRef } from 'react';

const Recording = ()=>{
    const [isSupported, setState] = useState(false);
    const videoRef = useRef();
    const startVideo = useRef();
    const preview = useRef();
    const stop = useRef();
    const recording = useRef();
    const hasGetUserMedia = useCallback(()=>{
        return !!(navigator.mediaDevices.getUserMedia)
    },[]);

    useEffect(()=>{
        // if(hasGetUserMedia){
        //     const constraints = {
        //         video: true,
        //         audio: true
        //     };
        //     const video = videoRef.current;
        //     navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{
        //         video.srcObject = stream;
        //         video.captureStream = video.captureStream || video.mozCaptureStream;
        //         return new Promise(resolve => video.onplaying = resolve);
        //     }).then(()=> startRecording(video.captureStream(), recordingTimeMS))
        //     .then((recordedChunks)=>
        //         {
        //             let recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
        //             video.src = URL.createObjectURL(recordedBlob);
                    
        //             console.log("Successfully recorded " + recordedBlob.size + " bytes of " +
        //                 recordedBlob.type + " media.");
        //         })
        // }else{
        //     alert('Audio/Video Recording not Supported by your browser');
        // }
    },[]);

    return(
        <>
            <div className="startVideo" ref={startVideo}>Start Video</div>
            <video ref={preview} width="160" height="120" autoplay muted></video>
            <div className="startVideo" ref={stop}>Stop Video</div>
            <video ref={recording} width="160" height="120" controls></video>
            <div className="startVideo" ref={stop}>Play Video</div>
        </>
    )
}

export default Recording;