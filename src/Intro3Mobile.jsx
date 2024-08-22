import React from 'react';

import LABlue from './assets/LABlue.png';
import LAJobsMobile from './components/LAJobsMobile';
import LMUMobile from './components/LMUCubeMobile';
import AdobeMobile from './components/AdobeMobile';

function Intro3Mobile() {
  return (
    <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        width: '100vw', 
        alignItems: 'center', 
        // zIndex: 5,
      }}>
      
      <div style={{ 
          width: '100%' 
      }}>
        <img 
          src={LABlue} 
          alt="LA" 
          style={{ 
            width: '100%', 
            height: 'auto'
          }} 
        />
      </div>
      
      <div style={{ 
          width: '100%' 
      }}>
        <LMUMobile />
      </div>
      
      <div style={{ 
          width: '100%' 
      }}>
        <LAJobsMobile />
      </div>
      
      <div style={{ 
        //   width: '100%' 
      }}>
        <AdobeMobile />
      </div>

    </div>
  );
}

export default Intro3Mobile;
