import React from 'react';
import CommonCube from './CommonCube';
// import { useTheme } from '@mui/material/styles';

function NovelListCube() {
//   const theme = useTheme(); // Access the theme using the hook

  return (
    <CommonCube 
      width={300} 

      content={
        <>
        The more I learned about UI/UX and the more technical my writing became, the more I wanted to understand the ‘Back-end’ of the companies I was providing the voice for... and so, in 2023 I took the biggest pivot I’ve ever taken and enrolled at springboard!         
        <br /><br />In doing so, i realized that i could combine my career in writing and film with software engineering. this realization led to the novel list.
        <br /><br />The Novel List is a comprehensive web-based platform that connects authors seeking feedback and visibility for their manuscripts with agents and editors looking for promising projects to develop. Built with React and Node.js, The Novel List, focuses equally on frontend and backend functionalities, utilizing multiple APIs and maintaining a robust database to manage user data and other relevant sources.</>
      }
    />
  );
}

export default NovelListCube;
