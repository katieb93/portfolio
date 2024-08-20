import React from 'react';

const MovieClip = () => {
  return (
    <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0 }}>
      <iframe
        src="https://www.youtube.com/embed/7O8ES9ShCDo?si=hB5VLNqnf5ZSMx4S"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      ></iframe>
    </div>
  );
};

export default MovieClip;
