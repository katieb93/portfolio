import React from 'react';

import ReelDraftSection from './ReelDraftSection';  // Correct path to where ReelDraftSection is located
import TheNovelListSection from './TheNovelListSection';  // Correct path to where TheNovelListSection is located
import ClipsHitsSection from './ClipHitsSection';  // Correct path to where ClipsHitsSection is located

import { ThemeProvider, CssBaseline, Box, Typography } from '@mui/material';
import theme from './theme';  // Assuming the theme file is named 'theme.js'

const PortfolioMobile = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ 
          position: 'relative', 
          top: '80px',
          backgroundColor: theme.palette.background.default,  // Apply background color from theme
          color: theme.palette.secondary.main  // Apply primary color from theme
      }}>
        <Typography
          variant="h1"
          component="h1"
          sx={{ 
            ...theme.typography.h1, 
            textTransform: 'uppercase',
            textAlign: 'left',  // Align text to the center for mobile
            fontSize: '3rem', 
            fontWeight: '700',
            // marginBottom: '20px',
            padding: '20px 20px 0 20px',
            color: 'black',  // Apply secondary color from theme
          }}
        >
          Portfolio
        </Typography>

        <Box sx={{ 
          ...theme.typography.body1, 
          marginBottom: '20px', 
          textAlign: 'left', 
          fontWeight: 700,
          padding: '0 20px',  // Add padding for better mobile spacing
          lineHeight: '1.2',  // Smaller line height
        }}> 
          All listed projects, including this site, were entirely my own work, from copywriting and UX design to graphic design and software development. Please enjoy!
        </Box>
        
        <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{ 
              ...theme.typography.h3, 
              textTransform: 'uppercase',
              textAlign: 'left',  // Align text to the left for mobile
              fontSize: '2rem', 
              color: 'black',  // Apply secondary color from theme
              padding: '0px 20px',
              paddingBottom: 0,  // No padding at the bottom
              margin: 0  // No margin
            }}
          >
            The Reel Draft
          </Typography>
          <ReelDraftSection />
        </Box>
        
        <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{ 
              ...theme.typography.h3, 
              textTransform: 'uppercase',
              textAlign: 'left',  // Align text to the left for mobile
              fontSize: '2rem', 
              color: 'black',  // Apply secondary color from theme
              padding: '0px 20px'
            }}
          >
            The Novel List
          </Typography>
          <TheNovelListSection />
        </Box>

        <Box sx={{ marginBottom: '20px', textAlign: 'center' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{ 
              ...theme.typography.h3, 
              textTransform: 'uppercase',
              textAlign: 'left',  // Align text to the left for mobile
              fontSize: '2rem', 
              color: 'black',  // Apply secondary color from theme
              padding: '0px 20px'
            }}
          >
            Clip Hits
          </Typography>
          <ClipsHitsSection />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default PortfolioMobile;
