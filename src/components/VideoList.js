import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {  
    // Todo pass video prop to VideoItem  
    const renderedList = videos.map((video) => {
        return <VideoItem />
    });

    return <div>VideoList {renderedList}</div>
};

export default VideoList;