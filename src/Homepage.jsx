// // /Users/katiebrown/portfolio-site/src/Homepage.jsx

// import React from 'react';
// import { ThemeProvider, CssBaseline } from '@mui/material';
// import theme from './theme';
// import Intro from './Intro';
// import Intro2 from './Intro2'; 
// import Intro2Reel from './Intro2Reel';

// import MovieClip from './components/MovieClip';
// import Intro3 from './Intro3';
// import Intro4 from './Intro4';
// import Intro5 from './Intro5';
// import Intro6 from './Intro6';

// function Homepage() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <div style={{ minWidth: '935px' }}>
//         <Intro />  
//         <Intro2 /> 
//         <Intro2Reel />
//         <Intro3 />
//         <MovieClip />
//         <Intro4 />
//         <Intro5 />
//         <Intro6 />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default Homepage;

// /Users/katiebrown/portfolio-site/src/Homepage.jsx
import React from 'react';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';
import theme from './theme';
import Intro from './Intro';
import IntroMobile from './IntroMobile'; // Make sure this is correctly imported
import Intro2 from './Intro2'; 
import Intro2Mobile from './Intro2Mobile'; // Make sure this is correctly imported
import Intro2Reel from './Intro2Reel';
import Intro2ReelMobile from './Intro2ReelMobile';
import MovieClip from './components/MovieClip';
import Intro3 from './Intro3';
import Intro3Mobile from './Intro3Mobile';
import Intro4 from './Intro4';
import Intro4Mobile from './Intro4Mobile';
import Intro5 from './Intro5';
import Intro5Mobile from './Intro5Mobile';
import Intro6 from './Intro6';
import Intro6Mobile from './Intro6Mobile';

function Homepage() {
  // Define isMobile using the useMediaQuery hook
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div >

        {isMobile ? <IntroMobile /> : <Intro />}
        {/* <Intro2 />  */}
        {isMobile ? <Intro2Mobile /> : <Intro2 />}
        {/* <Intro2Reel /> */}
        {isMobile ? <Intro2ReelMobile /> : <Intro2Reel />}
        {/* <Intro3 /> */}
        {isMobile ? <Intro3Mobile /> : <Intro3 />}
        <MovieClip />
        {/* <Intro4 /> */}
        {isMobile ? <Intro4Mobile /> : <Intro4 />}
        {/* <Intro5 /> */}
        {isMobile ? <Intro5Mobile /> : <Intro5 />}
        {/* <Intro6 /> */}
        {isMobile ? <Intro6Mobile /> : <Intro6 />}

      </div>
    </ThemeProvider>
  );
}

export default Homepage;
