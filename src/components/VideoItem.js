import React from 'react';

const VideoItem = ({ video }) => {
    return <div>Video Item {video.snippet.title}</div>;
};

export default VideoItem;
