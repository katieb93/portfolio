import React from 'react';
import CommonCubeMobile from './CommonCubeMobile';
import { useTheme } from '@mui/material/styles';

function LMUMobile() {
  const theme = useTheme(); // Access the theme using the hook

  return (
    <CommonCubeMobile 

      content={
        <>
        Over the next few years, I  moved to Los Angeles where I earned my MFA in Writing and producing for television from Loyola Marymount university. at LMU I trained in film and Television development at the following companies. 
        </>
      }
    />
  );
}

export default LMUMobile;
