import React, { useEffect, useRef } from 'react';

const VideoList = ()=>{

    const videoRef = useRef();

    // useEffect(()=>{

    //     fetch('http://localhost:4009/getVideo').then((resp)=>{
    //         console.log(resp.body);
    //         const recordedBlob = new Blob(resp.body);
    //         console.log(recordedBlob);
    //         videoRef.current.src = URL.createObjectURL(recordedBlob);
    //     }).catch((e)=>{
    //         console.log(e);
    //     })
    // },[videoRef]);

    return(
        <video src="http://localhost:4009/getVideo" width="100%" height="50%" controls></video>
    )
}

export default VideoList;