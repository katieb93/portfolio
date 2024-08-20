import React from 'react';
import FirstAustinBlue from './assets/FirstAustinBlue.png';
import UTCube from './components/UTCube';


function Intro2() {
  return (
    <div style={{ position: 'relative', zIndex: 5 }}>
        <div style={{ 
            position: 'relative', 
            height: 'auto', 
            marginTop: '-25vh', // This will pull Intro2 up, but keep the top of the image visible
        }}>
            <img 
                src={FirstAustinBlue} 
                alt="First Austin" 
                style={{ 
                    position: 'relative', 
                    top: 0, 
                    left: 0, 
                    width: '100%',  
                    height: '100%', 
                    zIndex: 6, // Ensure this is higher than elements in Intro
                    objectFit: 'cover' 
                }} 
            />
            <div style={{ 
                position: 'absolute', 
                bottom: '300px', // Adjust this value to control the distance from the bottom
                left: '200px',   // Adjust this value to control the distance from the left
                zIndex: 7, // Ensure this is higher than the image
            }}>
                <UTCube />
            </div>
        </div>
    </div>
  );
}

export default Intro2;
