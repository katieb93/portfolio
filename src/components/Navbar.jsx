// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Typography from '@mui/material/Typography';
// import { styled } from '@mui/material/styles';

// // StyledButton with hover underline effect
// const StyledButton = styled(Button)(({ theme }) => ({
//   color: theme.palette.secondary.main,
//   fontFamily: theme.typography.fontFamily,
//   fontSize: '1rem',
//   fontWeight: theme.typography.h2.fontWeight,
//   textTransform: 'uppercase',
//   position: 'relative',
//   textAlign: 'right',
//   '&:hover::after': {
//     content: '""',
//     position: 'absolute',
//     width: '100%',
//     height: '2px',
//     bottom: '20px',
//     left: 0,
//     backgroundColor: theme.palette.secondary.main,
//     visibility: 'visible',
//     transform: 'scaleX(1)',
//     transition: 'transform 0.3s ease-in-out',
//   },
//   '&::after': {
//     content: '""',
//     position: 'absolute',
//     width: '100%',
//     height: '2px',
//     bottom: '20px',
//     left: 0,
//     backgroundColor: theme.palette.secondary.main,
//     visibility: 'hidden',
//     transform: 'scaleX(0)',
//     transition: 'transform 0.3s ease-in-out',
//   },
// }));

// // StyledMenu with custom text alignment and no visible background
// const StyledMenu = styled(Menu)(({ theme }) => ({
//   '& .MuiPaper-root': {
//     backgroundColor: 'transparent',
//     boxShadow: 'none',
//     borderRadius: '0',
//     padding: 0,
//     minWidth: 'auto',
//   },
// }));

// // StyledMenuItem with text size adjustment and upward movement
// const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
//   color: theme.palette.secondary.main,
//   textAlign: 'right',
//   justifyContent: 'flex-end',
//   padding: theme.spacing(1, 2),
//   fontSize: '1.25rem', // Increase the font size
//   transform: 'translateY(-5px)', // Move the text upward
//   '&:hover': {
//     backgroundColor: 'transparent',
//     color: theme.palette.primary.main,
//   },
// }));

// // ContactMeButton component with menu for email, GitHub, and LinkedIn links
// const ContactMeButton = () => {
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <StyledButton
//         aria-controls="contact-menu"
//         aria-haspopup="true"
//         onClick={handleClick}
//       >
//         Contact
//       </StyledButton>
//       <StyledMenu
//         id="contact-menu"
//         anchorEl={anchorEl}
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'bottom',
//           horizontal: 'right',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'right',
//         }}
//       >
//         <StyledMenuItem
//           component="a"
//           href="mailto:kate.liz.brown10193@gmail.com"
//           onClick={handleClose}
//         >
//           <Typography variant="body2" fontSize={'1.25rem'}  align="right">Email</Typography>
//         </StyledMenuItem>
//         <StyledMenuItem
//           component="a"
//           href="https://github.com/katieb93"
//           onClick={handleClose}
//         >
//           <Typography variant="body2" fontSize={'1.25rem'} align="right">GitHub</Typography>
//         </StyledMenuItem>
//         <StyledMenuItem
//           component="a"
//           href="https://www.linkedin.com/in/katie-elizabeth-brown/"
//           onClick={handleClose}
//         >
//           <Typography variant="body2" fontSize={'1.25rem'} align="right">LinkedIn</Typography>
//         </StyledMenuItem>
//       </StyledMenu>
//     </div>
//   );
// };

// // NavBar component with navigation links and ContactMeButton
// function NavBar() {
//   return (
//     <AppBar
//       position="fixed"
//       sx={{ top: 0, left: 0, right: 0, zIndex: 1100, backgroundColor: 'transparent', boxShadow: 'none' }}
//     >
//       <Toolbar sx={{ justifyContent: 'flex-end' }}>
//         <StyledButton component={Link} to="/Homepage">
//           Home
//         </StyledButton>
//         <StyledButton component={Link} to="/AboutMe">
//           About Me
//         </StyledButton>
//         <StyledButton component={Link} to="/portfolio">
//           Portfolio
//         </StyledButton>
//         <StyledButton component={Link} to="/resume">
//           Resume
//         </StyledButton>
//         <ContactMeButton />
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default NavBar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
// import theme from './theme';  // Assuming the theme file is named 'theme.js'

// StyledButton with hover underline effect
// const StyledButton = styled(Button)(({ theme }) => ({
const StyledButton = styled(Button)(({ theme, isMobile }) => ({

  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  color: theme.palette.secondary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: useMediaQuery(theme.breakpoints.down('sm')) ? '.9rem' : '1.8rem', // Font size adjusted for mobile
  fontWeight: theme.typography.h2.fontWeight,
  textTransform: 'uppercase',
  position: 'relative',
  padding: isMobile ? '0' : '0 8px', 
  textAlign: 'right',
  '&:hover::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    bottom: '10px', // Adjusted for mobile
    left: 0,
    backgroundColor: theme.palette.secondary.main,
    visibility: 'visible',
    transform: 'scaleX(1)',
    transition: 'transform 0.3s ease-in-out',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    width: '100%',
    height: '2px',
    bottom: '10px', // Adjusted for mobile
    left: 0,
    backgroundColor: theme.palette.secondary.main,
    visibility: 'hidden',
    transform: 'scaleX(0)',
    transition: 'transform 0.3s ease-in-out',
  },
}));

// StyledMenu with custom text alignment and no visible background
const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    borderRadius: '0',
    padding: 0,
    minWidth: 'auto',
  },
}));

// StyledMenuItem with text size adjustment and upward movement
const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  color: theme.palette.secondary.main,
  textAlign: 'right',
  justifyContent: 'flex-end',
  padding: theme.spacing(1, 2),
  fontSize: '1rem', // Smaller font size for mobile
  transform: 'translateY(-5px)', // Move the text upward
  '&:hover': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
}));

// ContactMeButton component with menu for email, GitHub, and LinkedIn links
const ContactMeButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <StyledButton
        aria-controls="contact-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Contact
      </StyledButton>
      <StyledMenu
        id="contact-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <StyledMenuItem
          component="a"
          href="mailto:kate.liz.brown10193@gmail.com"
          onClick={handleClose}
        >
          <Typography variant="body2" fontSize={'1rem'} align="right">Email</Typography>
        </StyledMenuItem>
        <StyledMenuItem
          component="a"
          href="https://github.com/katieb93"
          onClick={handleClose}
        >
          <Typography variant="body2" fontSize={'1rem'} align="right">GitHub</Typography>
        </StyledMenuItem>
        <StyledMenuItem
          component="a"
          href="https://www.linkedin.com/in/katie-elizabeth-brown/"
          onClick={handleClose}
        >
          <Typography variant="body2" fontSize={'1rem'} align="right">LinkedIn</Typography>
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

// NavBar component with navigation links and ContactMeButton
function NavBar() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <AppBar
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        justifyContent: isMobile ? 'center' : 'flex-end',
      }}
    >
      <Toolbar
        sx={{
          justifyContent: isMobile ? 'space-between' : 'flex-end',
          flexDirection: isMobile ? 'row' : 'row',
          alignItems: isMobile ? 'center' : 'flex-end',
          padding: isMobile ? '10px' : '0px',
          maxWidth: isMobile ? '400px' : '100%' 
          // maxWidth: isMobile ? '300px' : '100%'; // Example default for non-mobile
        }}
      >
        <StyledButton component={Link} to="/Homepage">
          Home
        </StyledButton>
        <StyledButton component={Link} to="/AboutMe">
          About Me
        </StyledButton>
        <StyledButton component={Link} to="/portfolio">
          Portfolio
        </StyledButton>
        <StyledButton component={Link} to="/resume">
          Resume
        </StyledButton>
        <ContactMeButton />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
