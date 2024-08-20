import React from 'react';
import CommonCube from './CommonCube';
// import { useTheme } from '@mui/material/styles';

function ClipHitsCube() {
//   const theme = useTheme(); // Access the theme using the hook

  return (
    <CommonCube 
      width={300} 

      content={
        <>
        This experience of editing and music curation changed my perception of story and score. to improve my writing, i began creating playlists for my characters and my plots which led me to wondering why playlist curation based on a keyword didn’t exist. 
        <br /><br />I have since made  this idea into a web App. Currently in development using SPotify’s robust API, Clip Hits,  takes a user’s search input, finds the 100 most popular playlists containing that keyword and creates a 30-track playlist with the most common songs across all 100 playlists.
        <br /><br />Built with REACTJS, clip hits is a passion project with user behavior data potential.      </>
      }
    />
  );
}

export default ClipHitsCube;
