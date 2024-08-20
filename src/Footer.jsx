// src/Footer.jsx
import React from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(2),
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  zIndex: 200, // z-index for the footer
}));

const FooterText = styled(Typography)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.secondary.main,
}));

const Footer = () => {
  const theme = useTheme();  // Get the theme object here
  
  return (
    <FooterContainer>
      <FooterText>
        <Typography component="span" style={{ textTransform: 'uppercase', fontWeight: '800' }}>
          Contact Me:
        </Typography>{" "}
        <a href="mailto:kate.liz.brown10193@gmail.com" style={{ color: theme.palette.primary.main }}>
          kate.liz.brown10193@gmail.com
        </a>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
