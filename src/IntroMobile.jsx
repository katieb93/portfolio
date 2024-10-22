import React from 'react';
import { Typography, ThemeProvider } from '@mui/material';
import BluePic from './assets/BluePic.png';
import themeMobile from './themeMobile'; // Import the theme

function IntroMobile() {
  return (
    <ThemeProvider theme={themeMobile}>
      <div style={{ position: 'relative', height: 'auto', overflow: 'hidden', zIndex: 1, marginTop: '30%', }}>
        <div style={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center', 
            // height: 'auto', 
            width: '100%',
            textAlign: 'center',
            maxWidth: '600px', // Set the maxWidth here
            margin: '0 auto'    // Center the container horizontally
            }}>

            <div style={{ width: '100%', textAlign: 'center', }}>
                <Typography variant="h1Italic" color="primary" >
                    Hello
                </Typography>
                <Typography variant="h1Italic" color="primary" >
                    ,
                </Typography>
                <Typography variant="h1Reg" color="primary" >
                    {' '}
                </Typography>
                <Typography variant="h1Reg" color="primary" >
                    I’m Katie
                </Typography>
                <Typography variant="h1Italic" color="primary" >
                    ,
                </Typography>
                <Typography variant="h1Italic" color="primary" >
                    {' '}
                </Typography>
                <Typography variant="h1Italic" color="primary" >
                    welcome to my portfolio!
                </Typography>
            </div>

            <div style={{ width: '100%', textAlign: 'center'}}>
                <Typography 
                    variant="body2" 
                    sx={{ 
                    fontWeight: 800, 
                    display: 'block', 
                    color: '#415170', 

                    }}
                >
                    Select Portfolio or Resume to jump right in OR scroll on down to take the scenic route through my intrepid journey to software engineering.
                </Typography>
            </div>

            <img 
                src={BluePic} 
                alt="Blue Picture" 
                style={{ 
                    width: '100%', 
                    height: 'auto', 
                    marginBottom: '20px', 
                    marginTop: '20px'
                }} 
            />
            



        </div>
      </div>
    </ThemeProvider>
  );
}

export default IntroMobile;
