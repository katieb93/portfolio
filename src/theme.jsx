

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
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
    wsParadoseItalic: {
      fontFamily: 'Ws Paradose',
      fontStyle: 'italic',
      fontWeight: 400,
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

export default theme;
