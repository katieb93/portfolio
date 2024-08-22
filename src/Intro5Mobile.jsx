import React from 'react';
import PeterPan from './assets/PeterPan.png';

import AustinJobsMobile from './components/AustinJobsMobile';
import AustinJobsCubeMobile from './components/AustinJobsCubeMobile';
// import Adobe from './components/Adobe';


function Intro5Mobile() {
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
        //   position: 'absolute', 
        //   top: '-100px', // 50px down from the top of the container
        //   left: '50px', // 50px from the right side of the container
        //   zIndex: 8, // Higher zIndex to hover above everything
      }}>
          <AustinJobsCubeMobile />
      </div>
      <div style={{ 
        //   position: 'absolute', 
        //   top: '300px', // 300px down from the top of the container
        //   left: '50%', // Center horizontally
        //   transform: 'translateX(-50%)', // Adjust the left position to truly center the component
        //   zIndex: 7, // Higher zIndex to hover above PeterPan
        //   width: '100%', // Ensure AustinJobs matches PeterPan width
        //   maxWidth: '100vw', // Prevent AustinJobs from being wider than the viewport
        //   minWidth: '935px'
      }}>
          <AustinJobsMobile />
      </div>

    </div>
  );
}

export default Intro5Mobile;
