// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from './theme';  // Assuming the theme file is named 'theme.js'
// import image from '..assets/NovelList.png';  // Import the single image

// export default function SingleImageDisplay() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
//         {/* Image Section */}
//         <div style={{ flex: '1 1 50%', paddingLeft: '50px', paddingRight: '25px' }}>
//           <img
//             src={image}
//             alt="The Novel List"
//             style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
//           />
//         </div>
  
//         {/* Right section: Text content */}
//         <div style={{ flex: '1 1 50%', paddingLeft: '25px', paddingRight: '50px' }}>
//           <p style={{ ...theme.typography.body2, fontWeight: 'bold', fontStyle: 'italic' }}> IN DEVELOPMENT </p>

//           <p style={{ ...theme.typography.body2 }}>
//             The Novel List platform is designed to create a dynamic environment for both authors and publishing professionals. It offers a user-friendly interface for project submissions, manuscript management, and professional evaluations. Authors can upload manuscript excerpts, query letters, and synopses, while also managing their public profiles. For agents and editors, The Novel List provides advanced search and filtering options, customizable preferences, and tools for managing communications with authors. The platform is built with a secure authentication system, responsive design, and a comprehensive analytics dashboard that caters to various user needs.
//           </p>
//           <p style={{ ...theme.typography.body2 }}>
//             The technical foundation of The Novel List includes a robust tech stack with React.js on the frontend, Node.js with Express.js on the backend, and PostgreSQL managed via Supabase for database needs. The platform integrates various APIs such as Google Books and The Movie Database for enhanced project listings and media comparisons. With features like machine learning algorithms for project recommendations and personalized dashboards, The Novel List aims to elevate the publishing process by offering advanced tools and functionalities. Stretch goals include collaborative tools, real-time feedback, and extensive search capabilities for literary agents, making The Novel List a comprehensive solution for the publishing industry.          
//           </p>
          
//           <div style={{ marginTop: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
//             {/* <Button 
//               variant="outlined" 
//               color="secondary" 
//               href="https://deployed-site-link.com"  // Replace with your deployed site link
//               target="_blank"
//               sx={{
//                 '&:hover': {
//                   backgroundColor: theme.palette.primary.main, // Fill with primary color on hover
//                   color: 'white',
//                 },
//               }}
//             >
//               View Deployed Site
//             </Button> */}
//             <Button 
//               variant="outlined" 
//               color="secondary" 
//               href="https://github.com/katieb93/novel"  // Replace with your GitHub repository link
//               target="_blank"
//               sx={{
//                 '&:hover': {
//                   backgroundColor: theme.palette.primary.main, // Fill with primary color on hover
//                   color: 'white',
//                 },
//               }}
//             >
//               View GitHub Repository
//             </Button>
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';  // Assuming the theme file is named 'theme.js'
import image from './assets/NovelList.png';  // Corrected path

export default function SingleImageDisplay() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
        {/* Image Section */}
        <div style={{ flex: '1 1 50%', paddingLeft: '50px', paddingRight: '25px' }}>
          <img
            src={image}
            alt="The Novel List"
            style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
          />
        </div>
  
        {/* Right section: Text content */}
        <div style={{ flex: '1 1 50%', paddingLeft: '25px', paddingRight: '50px' }}>
          <p style={{ ...theme.typography.body2, fontWeight: 'bold', fontStyle: 'italic' }}> IN DEVELOPMENT </p>

          <p style={{ ...theme.typography.body2 }}>
            The Novel List platform is designed to create a dynamic environment for both authors and publishing professionals. It offers a user-friendly interface for project submissions, manuscript management, and professional evaluations. Authors can upload manuscript excerpts, query letters, and synopses, while also managing their public profiles. For agents and editors, The Novel List provides advanced search and filtering options, customizable preferences, and tools for managing communications with authors. The platform is built with a secure authentication system, responsive design, and a comprehensive analytics dashboard that caters to various user needs.
          </p>
          <p style={{ ...theme.typography.body2 }}>
            The technical foundation of The Novel List includes a robust tech stack with React.js on the frontend, Node.js with Express.js on the backend, and PostgreSQL managed via Supabase for database needs. The platform integrates various APIs such as Google Books and The Movie Database for enhanced project listings and media comparisons. With features like machine learning algorithms for project recommendations and personalized dashboards, The Novel List aims to elevate the publishing process by offering advanced tools and functionalities. Stretch goals include collaborative tools, real-time feedback, and extensive search capabilities for literary agents, making The Novel List a comprehensive solution for the publishing industry.
          </p>
          
          <div style={{ marginTop: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* <Button 
              variant="outlined" 
              color="secondary" 
              href="https://deployed-site-link.com"  // Replace with your deployed site link
              target="_blank"
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.primary.main, // Fill with primary color on hover
                  color: 'white',
                },
              }}
            >
              View Deployed Site
            </Button> */}
            <Button 
              variant="outlined" 
              color="secondary" 
              href="https://github.com/katieb93/novel"  // Replace with your GitHub repository link
              target="_blank"
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.primary.main, // Fill with primary color on hover
                  color: 'white',
                },
              }}
            >
              View GitHub Repository
            </Button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

