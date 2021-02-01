import './VideoItem.css';
import React from "react";


const VideoItem=(props)=>{
    const {video,onVideoSelect}=props;
    return (
    <div className="video-item item" onClick={()=>onVideoSelect(video)}>
        <img src={video.snippet.thumbnails.medium.url} className="ui image" alt="thumbnail"/>
        <div className="content">
            <div className="header">{video.snippet.title}</div>
        </div>
        
    </div>
    );
}

export default VideoItem;