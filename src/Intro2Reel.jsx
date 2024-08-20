import React from 'react';
import ReelDraftScreenShot from './assets/ReelDraftScreenShot.png';
import ReelDraft from './components/RDCube';

const Intro2Reel = () => {
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
          position: 'absolute', 
          top: '0%', 
          left: '75%', 
          transform: 'translate(-50%, -50%)', 
          zIndex: 10 
        }}
      >
        <ReelDraft />
      </div>
    </div>
  );
};

export default Intro2Reel;
