import React from 'react';
import CommonCube from './CommonCube';
// import { useTheme } from '@mui/material/styles';

function AustinJobsCube() {
//   const theme = useTheme(); // Access the theme using the hook

  return (
    <CommonCube 
      width={300} 

      content={
        <> In 2020, I moved back home and began working in UX and copywriting at Artkive, The Helper Bees and, Backpack. I wrote knowledge bases from the ground up, Social media campaigns, and UI/UX copy across complete Website overhauls. </>
      }
    />
  );
}

export default AustinJobsCube;
