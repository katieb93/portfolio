

import { createTheme } from '@mui/material/styles';

const themeMobile = createTheme({
  palette: {
    primary: {
      main: '#667FB1',
    },
    secondary: {
      main: '#415170',
    },
    background: {
      default: '#FFF6EF',
    },
  },
  typography: {
    fontFamily: 'Roboto Condensed, Arial, sans-serif',
    h1Italic: {
        fontFamily: 'Ws Paradose',
        fontStyle: 'italic',
        fontWeight: 600,
        fontSize: '3.5rem',
        lineHeight: '2rem',
    },
    h1Reg: {
        fontFamily: 'Roboto Condensed, sans-serif',
        fontWeight: 800,
        fontSize: '3.5rem',
        lineHeight: '3rem',
        letterSpacing: '-0.05em',
    },
    body1: {
      fontSize: '.8rem',
      fontFamily: 'Roboto Condensed, sans-serif',
      lineHeight: '2rem',
    },
    body2: {
        fontSize: '1rem',
        fontFamily: 'Roboto Condensed, sans-serif',
        fontWeight: 500,
        lineHeight: '1.5rem',
        textTransform: 'uppercase', // Added to make text all uppercase
    },
    body3: {
      fontSize: '1rem',
      fontFamily: 'Roboto Condensed, sans-serif',
      // lineHeight: '1.5rem', // Updated to a slightly smaller line height
      lineHeight: '1.5rem', // Updated to a slightly smaller line height
    },
    h2: {
      fontFamily: 'Roboto Condensed, sans-serif',
      fontWeight: 500,
      fontSize: '2rem',
      marginBottom: '15px',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 800,
      textTransform: 'uppercase',
      marginTop: '30px',
      // marginBottom: '20px', // Added margin-bottom for consistency
      fontFamily: 'Roboto Condensed, sans-serif',
    },
    customText: {
      color: '#667FB1',
      fontSize: '100px',
      lineHeight: '100px',
    },

    wsParadose: {
      fontFamily: 'Ws Paradose',
      fontWeight: 400,
    },
    roboto500: {
      fontFamily: 'Roboto',
      fontWeight: 500,
    },
    roboto700: {
      fontFamily: 'Roboto',
      fontWeight: 700,
    },
    bulleted: {
      fontSize: '1rem',
      fontFamily: 'Roboto Condensed, sans-serif',
      lineHeight: '1.5rem',
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          color: '#000',
          boxShadow: 'none',
          justifyContent: 'flex-end',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          width: '100%',
          height: '95px',
          position: 'relative',
          '& .MuiButton-root': {
            height: '95px',
            textAlign: 'right',
            color: '#415170',
            fontSize: '30px',
            fontFamily: 'Roboto Condensed',
            fontWeight: 700,
            textTransform: 'uppercase',
            lineHeight: '40px',
            wordWrap: 'break-word',
          },
        },
      },
    },
  },
});

export default themeMobile;
