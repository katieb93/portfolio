

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
            marginLeft: '25px',  // 50px from the left
            padding: '0px 50px 0px 50px'
          }}
        >
          Portfolio
        </Typography>

        <p style={{ 
            ...theme.typography.body2, 
            // width: '50%', 
            // marginLeft: '50px',  // 50px from the left
            textAlign: 'left', 
            textTransform: 'uppercase', 
            fontWeight: 700,
            padding: '0px 75px 0px 75px',
            margin: '0'
        }}>

        All listed projects, including this site, were entirely my own work, from copywriting and UX design to graphic design and software development. Please enjoy!        </p>
        <div style={{ marginBottom: '20px' }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ 
            ...theme.typography.h3, 
            textTransform: 'uppercase',
            textAlign: 'left',  // Align text to the left
            fontSize: '3rem', 
            color: 'black',  // Apply secondary color from theme
            marginLeft: '25px',  // 50px from the left
            padding: '0px 50px 0px 50px'
          }}
        >
          The Reel Draft
        </Typography>
          <ReelDraftSection />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{ 
              ...theme.typography.h3, 
              textTransform: 'uppercase',
              textAlign: 'left',  // Align text to the left
              fontSize: '3rem', 
              color: 'black',  // Apply secondary color from theme
              marginLeft: '25px',  // 50px from the left
              padding: '0px 50px 10px 50px'
            }}
          >
            The Novel List
          </Typography>
          <TheNovelListSection />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{ 
              ...theme.typography.h3, 
              textTransform: 'uppercase',
              textAlign: 'left',  // Align text to the left
              fontSize: '3rem', 
              color: 'black',  // Apply secondary color from theme
              marginLeft: '25px',  // 50px from the left
              padding: '0px 50px 10px 50px'
            }}
          >
            Clip Hits
          </Typography>
          <ClipsHitsSection />
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default Portfolio;
