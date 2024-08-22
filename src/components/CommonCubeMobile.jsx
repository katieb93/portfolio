

// // import React from 'react';
// // import { Box, Typography } from '@mui/material';
// // import { useTheme } from '@mui/material/styles';

// // function CommonCube({ width, height, backgroundColor, borderColor, content }) {
// //   const theme = useTheme();

// //   return (
// //     <Box 
// //       sx={{ 
// //         width: '100%', 
// //         height: '100%', 
// //         position: 'relative',
// //         zIndex: 20,
// //         marginTop: theme.spacing(5),
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //       }}
// //     >
// //       <Box 
// //         sx={{ 
// //           width: width || '50%', // Responsive width, default to 50% of parent
// //           maxWidth: 300, // Maximum width
// //           height: height || 'auto', // Default height
// //           backgroundColor: backgroundColor || theme.palette.primary.main, 
// //           border: `5px solid ${borderColor || theme.palette.background.default}`, 
// //           display: 'flex',
// //           flexDirection: 'column', 
// //           justifyContent: 'center',
// //           alignItems: 'center',
// //           padding: theme.spacing(4),
// //           boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
// //           boxSizing: 'border-box', // Ensure padding is included in width/height calculations
// //           '@media (max-width: 600px)': { // Smaller screens adjustments
// //             width: '70%',
// //             padding: theme.spacing(2),
// //           },
// //           '@media (max-width: 400px)': { // Extra small screens
// //             width: '90%',
// //             padding: theme.spacing(1),
// //           },
// //         }} 
// //       >
// //         <Typography 
// //           variant="body1"
// //           sx={{ 
// //             color: theme.palette.background.default, 
// //             textTransform: 'uppercase', 
// //             wordWrap: 'break-word',
// //             textAlign: 'left',
// //           }}
// //         >
// //           {content}
// //         </Typography>
// //       </Box>
// //     </Box>
// //   );
// // }

// // export default CommonCube;

// import React from 'react';
// import { Box, Typography } from '@mui/material';
// import { useTheme } from '@mui/material/styles';

// function CommonCube({ width, height, backgroundColor, borderColor, content, children }) {
//   const theme = useTheme();

//   return (
//     <Box 
//       sx={{ 
//         width: '100%', 
//         height: '100%', 
//         position: 'relative',
//         zIndex: 20,
//         marginTop: theme.spacing(5),
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//       }}
//     >
//       <Box 
//         sx={{ 
//           width: width || '50%', // Responsive width, default to 50% of parent
//           maxWidth: 300, // Maximum width
//           height: height || 'auto', // Default height
//           backgroundColor: backgroundColor || theme.palette.primary.main, 
//           border: `5px solid ${borderColor || theme.palette.background.default}`, 
//           display: 'flex',
//           flexDirection: 'column', 
//           justifyContent: 'center',
//           alignItems: 'center',
//           padding: theme.spacing(4),
//           boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
//           boxSizing: 'border-box', // Ensure padding is included in width/height calculations
//           '@media (max-width: 600px)': { // Smaller screens adjustments
//             width: '70%',
//             padding: theme.spacing(2),
//           },
//           '@media (max-width: 400px)': { // Extra small screens
//             width: '90%',
//             padding: theme.spacing(1),
//           },
//         }} 
//       >
//         <Typography 
//           variant="body1"
//           sx={{ 
//             color: theme.palette.background.default, 
//             textTransform: 'uppercase', 
//             wordWrap: 'break-word',
//             textAlign: 'left',
//           }}
//         >
//           {content}
//         </Typography>
//         {children && (
//           <Box sx={{ marginTop: theme.spacing(2) }}> {/* Adds margin between text and button */}
//             {children}
//           </Box>
//         )}
//       </Box>
//     </Box>
//   );
// }

// export default CommonCube;

import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

function CommonCubeMobile({ width, height, backgroundColor, borderColor, content, children }) {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        width: width || '100%', // Default width is 50% of the parent container
        minWidth: 250,         // Ensures a minimum width to prevent shrinking too much
        height: height || 'auto', // Height adjusts automatically based on content
        backgroundColor: backgroundColor || theme.palette.primary.main, 
        border: `5px solid ${borderColor || theme.palette.background.default}`, 
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(3),
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
        // boxSizing: 'border-box', // Ensures padding is included in width/height calculations
        // '@media (max-width: 600px)': { // Adjustments for smaller screens
        //   width: '80%',          // Increase the width on smaller screens
        //   padding: theme.spacing(2), // Adjust padding to fit better on small screens
        // },
        // '@media (max-width: 400px)': { // Adjustments for extra small screens
        //   width: '90%',          // Further increase the width
        //   padding: theme.spacing(1),  // Reduce padding to save space
        //   minWidth: 250,         // Ensure a minimum width on the smallest screens
        // },
      }} 
    >
      <Typography 
        variant="body1"
        sx={{ 
          color: theme.palette.background.default, 
          textTransform: 'uppercase', 
          wordWrap: 'break-word',
          textAlign: 'left',
        }}
      >
        {content}
      </Typography>
      {children && (
        <Box sx={{ marginTop: theme.spacing(2) }}> {/* Adds margin between text and button */}
          {children}
        </Box>
      )}
    </Box>
  );
}

export default CommonCubeMobile;

