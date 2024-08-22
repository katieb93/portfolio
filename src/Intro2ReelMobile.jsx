import React from 'react';
import ReelDraftScreenShot from './assets/ReelDraftScreenShot.png';
import ReelDraftMobile from './components/RDCubeMobile';

const Intro2ReelMobile = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
      <img 
        src={ReelDraftScreenShot} 
        alt="Reel Draft" 
        style={{ 
          display: 'block', 
          width: '100%', 
          height: 'auto', 
        }} 
      />
      <div 
        style={{ 
          position: 'relative', 
          zIndex: 10 
        }}
      >
        <ReelDraftMobile />
      </div>
    </div>
  );
};

export default Intro2ReelMobile;
