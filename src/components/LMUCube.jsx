import React from 'react';
import CommonCube from './CommonCube';
import { useTheme } from '@mui/material/styles';

function LMU() {
  const theme = useTheme(); // Access the theme using the hook

  return (
    <CommonCube 
      width={300} 

      content={
        <>
        Over the next few years, I  moved to Los Angeles where I earned my MFA in Writing and producing for television from Loyola Marymount university. at LMU I trained in film and Television development at the following companies. 
        </>
      }
    />
  );
}

export default LMU;
