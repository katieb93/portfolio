// import React from 'react';
// import ReelDraftSection from './ReelDraftSection';  // Correct path to where ReelDraftSection is located
// import TheNovelListSection from './TheNovelListSection';  // Correct path to where ReelDraftSection is located
// import ClipsHitsSection from './ClipHitsSection';  // Correct path to where ReelDraftSection is located

// import { ThemeProvider, CssBaseline } from '@mui/material';
// import theme from './theme';  // Assuming the theme file is named 'theme.js'

// const Portfolio = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <div style={{ 
//           position: 'relative', 
//           top: '100px',
//           backgroundColor: theme.palette.background.default,  // Apply background color from theme
//           color: theme.palette.secondary.main  // Apply primary color from theme
//       }}>
//         <h1 style={{ 
//           textAlign: 'center', 
//           fontFamily: theme.typography.h2.fontFamily, 
//           fontSize: '2.5rem', 
//           marginBottom: '20px',
//           color: theme.palette.secondary.main,  // Apply primary color from theme
//           textTransform: 'uppercase'  // Make text all caps
//         }}>
//           Portfolio
//         </h1>
//         <p style={{ ...theme.typography.body2, width: '50%', margin: '0 auto', textAlign: 'center', textTransform: 'uppercase', fontWeight: 500 }}>
//           This site, for reference, was built using Vite, ReactJS and, MUI. Furthermore every project listed I owned in its entirety, writing the copy, designing the UX, any and all graphic design, as well as all software development.        
//         </p>

//         <div style={{ marginBottom: '20px' }}>
//           <ReelDraftSection />
//         </div>
//         <div style={{ marginBottom: '20px' }}>
//           <TheNovelListSection />
//         </div>
//         <div style={{ marginBottom: '20px' }}>
//           <ClipsHitsSection />
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default Portfolio;

import React from 'react';
import ReelDraftSection from './ReelDraftSection';  // Correct path to where ReelDraftSection is located
import TheNovelListSection from './TheNovelListSection';  // Correct path to where TheNovelListSection is located
import ClipsHitsSection from './ClipHitsSection';  // Correct path to where ClipsHitsSection is located

import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import theme from './theme';  // Assuming the theme file is named 'theme.js'

const Portfolio = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
          position: 'relative', 
          top: '100px',
          backgroundColor: theme.palette.background.default,  // Apply background color from theme
          color: theme.palette.secondary.main  // Apply primary color from theme
      }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ 
            ...theme.typography.wsParadoseItalic, 
            textTransform: 'uppercase',
            textAlign: 'left',  // Align text to the left
            fontSize: '6rem', 
            marginBottom: '20px',
            color: 'black',  // Apply secondary color from theme
            marginLeft: '50px',  // 50px from the left
          }}
        >
          Portfolio
        </Typography>

        <p style={{ 
            ...theme.typography.body2, 
            // width: '50%', 
            marginLeft: '50px',  // 50px from the left
            textAlign: 'left', 
            textTransform: 'uppercase', 
            fontWeight: 700 
        }}>
          Furthermore every project listed (including this site) I owned in its entirety, writing the copy, designing the UX, any and all graphic design, as well as all software development. Please enjoy
        </p>
        <div style={{ marginBottom: '20px' }}>
          <ReelDraftSection />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <TheNovelListSection />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <ClipsHitsSection />
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;
