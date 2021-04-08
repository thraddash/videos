import React from 'react';

const VideoList = (props) => {
    // pass this.state.videos from App.js down to Videolist props
    // props.videos 
    return <div>VideoList {props.videos.length}</div>
};

export default VideoList;