import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
const VideoML = () => {
    const [videoWatched, setVideoWatched] = useState(false);
    const [isVideoWatched, setIsVideoWatched] = useState(false);
    useEffect(() => {
        // เรียกตรวจสอบสถานะการดูวิดีโอที่เก็บไว้ใน localStorage หรือ sessionStorage
        const isVideoWatched = localStorage.getItem('videoWatched');
        setVideoWatched(!!isVideoWatched);
    }, []);

    const handleVideoEnd = () => {
        // เมื่อดูวิดีโอจบแล้ว ตั้งค่าสถานะเป็น "ดูแล้ว" และเก็บใน localStorage หรือ sessionStorage
        setVideoWatched(true);
        localStorage.setItem('videoWatched', 'true');
    };

    const handleResetVideo = () => {
        // เมื่อกด Watch Again รีเซ็ตสถานะการดูวิดีโอ และลบค่าที่เก็บใน localStorage หรือ sessionStorage
        setVideoWatched(false);
        localStorage.removeItem('videoWatched');
    };

    const videoOptions = {
        width: '640',
        height: '360',
    };

    return (
        <div >
            <br />
            <ResponsiveAppBar />
            {!videoWatched ? (
                <div>
                    <h2>Video Not Watched</h2>
                    <YouTube videoId="lA5MHygnFcg" opts={videoOptions} onEnd={handleVideoEnd} />
                    <button onClick={handleVideoEnd}>Mark as Watched</button>
                </div>
            ) : (
                <div>
                    <h2>Video Watched</h2>
                    <button onClick={handleResetVideo}>Watch Again</button>
                </div>
            )}
        </div>
    );
};

export default VideoML;
//lA5MHygnFcg