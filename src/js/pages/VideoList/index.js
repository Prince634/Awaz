import React, { useEffect, useState } from 'react';
import Header from '../Header';


const VideoList = ()=>{

    const [videoList, setList] = useState(['sample.mp4', 'sample2.mp4']);
    // useEffect(()=>{

    //     fetch('http://localhost:4009/getList').then((resp)=>{
    //         console.log(resp.body);
    //         setList(resp.body);
    //     }).catch((e)=>{
    //         console.log(e);
    //     })
    // },[]);

    return(
        <>
        <Header/>
        {
            videoList && videoList.length && videoList.map((val, key)=>{
                return <video key={key} src={`http://192.168.1.10:4009/getVideo?value=${val}`} width="100%" height="50%" controls></video>
            })
        }
        </>
    )
}

export default VideoList;