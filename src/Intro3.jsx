import React from 'react';
import LABlue from './assets/LABlue.png';
import LAJobs from './components/LAJobs';

import LMU from './components/LMUCube';
import Adobe from './components/Adobe';


function Intro3() {
  return (
    <div style={{ position: 'relative', zIndex: 5 }}>
      <div style={{ 
          position: 'relative', 
          height: 'auto',
          width: '100vw', // Ensure full screen width
      }}>
          <img 
              src={LABlue} 
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
          <LMU />
      </div>
      <div style={{ 
          position: 'absolute', 
          top: '300px', // 300px down from the top of the container
          left: '50%', // Center horizontally
          transform: 'translateX(-50%)', // Adjust the left position to truly center the component
          zIndex: 7, // Higher zIndex to hover above LABlue
          width: '100%', // Ensure LAJobs matches LABlue width
          maxWidth: '100vw', // Prevent LAJobs from being wider than the viewport
          minWidth: '935px'
      }}>
          <LAJobs />
      </div>
      <div style={{ 
          position: 'absolute', 
          top: '1000px', // 50px down from the top of the container
          right: '100px', // 50px from the right side of the container
          zIndex: 8, // Higher zIndex to hover above everything
      }}>
          <Adobe />
      </div>

    </div>
  );
}

export default Intro3;
