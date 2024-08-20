import React from 'react';
import ReelDraftScreenShot from './assets/ReelDraftScreenShot.png';
import ReelDraft from './components/RDCube';
import ClipHits from './assets/ClipHits.png'; 
import ClipHitsCube from './components/ClipHitsCube';



const Intro4 = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
      <img 
        src={ClipHits} 
        alt="Clip Hits" 
        style={{ 
          display: 'block', 
          width: '100%', 
          height: 'auto', 
        }} 
      />
      <div 
        style={{ 
          position: 'absolute', 
          top: '20%', 
          left: '25%', 
          transform: 'translate(-50%, -50%)', 
          zIndex: 10 
        }}
      >
        <ClipHitsCube />
      </div>
    </div>
  );
};

export default Intro4;
