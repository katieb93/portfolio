import React from 'react';
import PeterPan from './assets/PeterPan.png';
import AustinJobs from './components/AustinJobs';
import AustinJobsCube from './components/AustinJobsCube';
// import Adobe from './components/Adobe';


function Intro5() {
  return (
    <div style={{ position: 'relative', zIndex: 5 }}>
      <div style={{ 
          position: 'relative', 
          height: 'auto',
          width: '100vw', // Ensure full screen width
      }}>
          <img 
              src={PeterPan} 
              alt="LA" 
              style={{ 
                  position: 'relative', 
                  top: 0, 
                  left: 0, 
                  width: '100%',  
                  height: 'auto', 
                  zIndex: 6, 
                  objectFit: 'cover' 
              }} 
          />
      </div>
      <div style={{ 
          position: 'absolute', 
          top: '-100px', // 50px down from the top of the container
          left: '50px', // 50px from the right side of the container
          zIndex: 8, // Higher zIndex to hover above everything
      }}>
          <AustinJobsCube />
      </div>
      <div style={{ 
          position: 'absolute', 
          top: '300px', // 300px down from the top of the container
          left: '50%', // Center horizontally
          transform: 'translateX(-50%)', // Adjust the left position to truly center the component
          zIndex: 7, // Higher zIndex to hover above PeterPan
          width: '100%', // Ensure AustinJobs matches PeterPan width
          maxWidth: '100vw', // Prevent AustinJobs from being wider than the viewport
          minWidth: '935px'
      }}>
          <AustinJobs />
      </div>
      {/* <div style={{ 
          position: 'absolute', 
          top: '1000px', // 50px down from the top of the container
          right: '100px', // 50px from the right side of the container
          zIndex: 8, // Higher zIndex to hover above everything
      }}>
          <Adobe />
      </div> */}

    </div>
  );
}

export default Intro5;
