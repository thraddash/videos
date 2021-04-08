import React from 'react';

// pass this.state.videos from App.js down to Videolist props
// props.videos 

// destructure using ES2015 syntax, take the videos property out of the props object
// by converting const VideoList = (props) to  ({ videos })
const VideoList = ({ videos }) => {
    
    return <div>VideoList {videos.length}</div>
};

export default VideoList;