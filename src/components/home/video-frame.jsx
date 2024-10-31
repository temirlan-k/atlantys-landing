// components/VideoFrame.js
import React from 'react';

const VideoFrame = () => {
  return (
    <div className="flex justify-center items-center p-5">
      <div className="p-2 w-2/3 h-full bg-black rounded-md">
        <video controls autoPlay loop muted className="w-full h-auto rounded-md">
          <source src="/assets/atlantys.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default VideoFrame;
