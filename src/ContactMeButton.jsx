import React, { useState } from 'react';
import { Button, Menu, MenuItem, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontFamily: theme.typography.fontFamily,
  fontSize: '1.2rem',
  fontWeight: theme.typography.h2.fontWeight,
  textTransform: 'uppercase',
}));

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
        Contact Me
      </StyledButton>
      <Menu
        id="contact-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem component="a" href="mailto:your-email@example.com" onClick={handleClose}>
          <Typography variant="body2">Email</Typography>
        </MenuItem>
        <MenuItem component="a" href="https://github.com/your-github" onClick={handleClose}>
          <Typography variant="body2">GitHub</Typography>
        </MenuItem>
        <MenuItem component="a" href="https://linkedin.com/in/your-linkedin" onClick={handleClose}>
          <Typography variant="body2">LinkedIn</Typography>
        </MenuItem>
      </Menu>
    </div>
  );
};

export default ContactMeButton;
