import React from 'react';

import Novellist from './assets/NovelList.png'; 
import NovelListCube from './components/NovelListCube';


const Intro6 = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
      <img 
        src={Novellist} 
        alt="Novel List" 
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
          left: '85%', 
          transform: 'translate(-50%, -50%)', 
          zIndex: 10 
        }}
      >
        <NovelListCube />
      </div>
    </div>
  );
};

export default Intro6;
