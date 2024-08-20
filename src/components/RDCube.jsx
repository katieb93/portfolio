import React from 'react';
import CommonCube from './CommonCube';
import { useTheme } from '@mui/material/styles';

function ReelDraft() {
  const theme = useTheme(); // Access the theme using the hook

  return (
    <CommonCube 
      width={300} 
      backgroundColor={theme.palette.primary.main} // Set background color to theme primary color
    //   borderColor={theme.palette.primary.main} // Set border color to the same as the background color
      content={
        <>
          I wrote several novels & screenplays and won an award with Austin's chapter of SCBWI.
          My passion for film and television was the inspiration for my first project, The Reel Draft.
          <br /><br />
          A take on sports fantasy drafts, The Reel Draft allows users to 'draft' movies of any given year
          and create the best collection of movies in competition with their friends.
          <br /><br />
          It utilizes REACTJS and SUPABASE.
        </>
      }
    />
  );
}

export default ReelDraft;
