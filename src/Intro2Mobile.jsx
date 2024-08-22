import React from 'react';
import FirstAustinBlue from './assets/FirstAustinBlue.png';
import UTCubeMobile from './components/UTCubeMobile';

function Intro2Mobile() {
  return (
    <div style={{ position: 'relative', marginTop: '20px', zIndex: 1, width: '100%' }}>
      <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          textAlign: 'center'
        }}>
        <div style={{ width: '100%', marginBottom: '20px' }}>
          <UTCubeMobile />
        </div>
        <img 
          src={FirstAustinBlue} 
          alt="First Austin" 
          style={{ 
            width: '100%', 
            height: 'auto', 
          }} 
        />

      </div>
    </div>
  );
}

export default Intro2Mobile;
