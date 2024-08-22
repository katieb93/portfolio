// // /Users/katiebrown/portfolio-site/src/components/Notification.jsx

// import React from 'react';
// import { Box, Typography } from '@mui/material';

// const Notification = () => {
//   return (
//     <Box
//       sx={{
//         display: { xs: 'block', sm: 'none' }, // Visible only on small screens
//         position: 'fixed',
//         bottom: 16,
//         left: 16,
//         right: 16,
//         backgroundColor: 'rgba(102, 127, 177, 0.9)',
//         color: '#FFF',
//         padding: '10px 20px',
//         borderRadius: '8px',
//         textAlign: 'center',
//         zIndex: 1000,
//       }}
//     >
//       <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
//         Hey, so happy you're here! Zoom out a little... trust me.
//       </Typography>
//     </Box>
//   );
// };

// export default Notification;

// /Users/katiebrown/portfolio-site/src/components/Notification.jsx

import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';

const Notification = () => {
  const [visible, setVisible] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 600) { // Adjust the width as needed
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!visible) return null;

  return (
    <Box
      sx={{
        display: { xs: 'block', sm: 'none' }, // Visible only on small screens
        position: 'fixed',
        bottom: 16,
        left: 16,
        right: 16,
        backgroundColor: 'rgba(102, 127, 177, 0.9)',
        color: '#FFF',
        padding: '10px 20px',
        borderRadius: '8px',
        textAlign: 'center',
        zIndex: 1000,
      }}
    >
      <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
        Hey, so happy you're here! Zoom out a little... trust me.
      </Typography>
    </Box>
  );
};

export default Notification;
