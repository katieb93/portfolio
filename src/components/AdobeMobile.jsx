import React from 'react';
import CommonCubeMobile from './CommonCubeMobile';
// import { useTheme } from '@mui/material/styles';

function AdobeMobile() {
//   const theme = useTheme(); // Access the theme using the hook

  return (
    <CommonCubeMobile 
      width={'100%'} 

      content={
        <>
        I developed my thesis, produced a short film, and wrote and wrote and wrote. I also learned how to edit and taught myself adobe’s suite of tools. All, really, in the service of creating film tributes.       </>
      }
    />
  );
}

export default AdobeMobile;
