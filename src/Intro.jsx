import React from 'react';
import { Typography } from '@mui/material';
import BluePic from './assets/BluePic.png';

function Intro() {
  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden', zIndex: 1 }}>
      <img 
        src={BluePic} 
        alt="Blue Picture" 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '30%', 
          height: 'auto', 
          zIndex: 1 
        }} 
      />
      <div style={{ 
          position: 'absolute', 
          top: 0, 
          right: 0, 
          width: '70%', 
          height: '100%', 
          display: 'flex', 
          flexDirection: 'column',  
          alignItems: 'flex-start', 
          justifyContent: 'center',
          padding: '20px',
          zIndex: 2 // Lower than zIndex in Intro2
        }}>
        <div style={{ textAlign: 'left', marginBottom: '20px' }}>
          <Typography variant="customText" sx={{ fontFamily: 'Ws Paradose', fontStyle: 'italic', fontWeight: 400 }}>
            Hello
          </Typography>
          <Typography variant="customText" sx={{ fontFamily: 'Ws Paradose', fontWeight: 400 }}>
            ,
          </Typography>
          <Typography variant="customText" sx={{ fontFamily: 'Roboto Condensed', fontWeight: 500 }}>
            {' '}
          </Typography>
          <Typography variant="customText" sx={{ fontFamily: 'Roboto Condensed', fontWeight: 700 }}>
            I’m Katie
          </Typography>
          <Typography variant="customText" sx={{ fontFamily: 'Ws Paradose', fontWeight: 400 }}>
            ,
          </Typography>
          <Typography variant="customText" sx={{ fontFamily: 'Roboto Condensed', fontWeight: 700 }}>
            {' '}
          </Typography>
          <Typography variant="customText" sx={{ fontFamily: 'Ws Paradose', fontStyle: 'italic', fontWeight: 400 }}>
            welcome to my portfolio!
          </Typography>
        </div>
        <div>
        <Typography 
          variant="customText" 
          sx={{ 
            fontFamily: 'Roboto Condensed', 
            fontWeight: 800, 
            width: '50%', // Set the width to 50%
            display: 'block', // Change display to block
            // fontStyle: 'italic', 
            // fontWeight: 400, 
            color: '#415170', 
            fontSize: '20px', 
            lineHeight: '20px' 
          }}
        >
            Select Portfolio or Resume to jump right in OR scroll on down to take the scenic route through my intrepid journey to software engineering.
          </Typography>
        </div>

      </div>
    </div>
  );
}

export default Intro;
