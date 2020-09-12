import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos, clickedVideo}) => {
    const renderedList = videos.map((video) => {
        return <VideoItem clickedVideo={clickedVideo} key={video.id.videoId} video={video}/>
    })
    return <div className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;