// /Users/katiebrown/portfolio-site/src/Homepage.jsx

import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Intro from './Intro';
import Intro2 from './Intro2'; 
import Intro2Reel from './Intro2Reel';

import MovieClip from './components/MovieClip';
import Intro3 from './Intro3';
import Intro4 from './Intro4';
import Intro5 from './Intro5';
import Intro6 from './Intro6';

function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ minWidth: '935px' }}>
        <Intro />  
        <Intro2 /> 
        <Intro2Reel />
        <Intro3 />
        <MovieClip />
        <Intro4 />
        <Intro5 />
        <Intro6 />
      </div>
    </ThemeProvider>
  );
}

export default Homepage;
