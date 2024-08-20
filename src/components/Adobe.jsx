import React from 'react';
import CommonCube from './CommonCube';
// import { useTheme } from '@mui/material/styles';

function Adobe() {
//   const theme = useTheme(); // Access the theme using the hook

  return (
    <CommonCube 
      width={300} 

      content={
        <>
        I developed my thesis, produced a short film, and wrote and wrote and wrote. I also learned how to edit and taught myself adobe’s suite of tools. All, really, in the service of creating film tributes.       </>
      }
    />
  );
}

export default Adobe;
