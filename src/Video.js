import React from "react";
import video from './lavender.mp4';
 
const Video = () => {
    return (
        <div className="video">
                <video src={video} autoPlay muted loop height="600px"/>
        </div>
    )
}
export default Video;
