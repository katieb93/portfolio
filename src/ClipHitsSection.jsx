// import * as React from 'react';
// import Button from '@mui/material/Button';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import theme from './theme';  // Assuming the theme file is named 'theme.js'
// import image from '/Users/katiebrown/portfolio-site/src/assets/ClipHits.png';  // Import the single image

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
//             Clip Hits is a web application designed to help users create custom Spotify playlists by integrating with the Spotify API. The app allows users to search for playlists, fetch tracks, and generate new playlists consisting of the most frequently featured tracks across various playlists. It offers a responsive user interface and secure Spotify account authentication via OAuth.
//           </p>
//           <p style={{ ...theme.typography.body2 }}>
//             The installation process involves cloning the repository, installing dependencies, and configuring the Spotify API credentials in a .env file. Key features include Spotify integration, custom playlist creation, and responsive design. The project depends on major libraries like React, Axios, and Spotify Web API JS. The app is open-source and licensed under the MIT License.
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
//               href="https://github.com/katieb93/hit-clips"  // Replace with your GitHub repository link
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
import image from './assets/ClipHits.png';  // Updated to a relative path

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
            Clip Hits is a web application designed to help users create custom Spotify playlists by integrating with the Spotify API. The app allows users to search for playlists, fetch tracks, and generate new playlists consisting of the most frequently featured tracks across various playlists. It offers a responsive user interface and secure Spotify account authentication via OAuth.
          </p>
          <p style={{ ...theme.typography.body2 }}>
            The installation process involves cloning the repository, installing dependencies, and configuring the Spotify API credentials in a .env file. Key features include Spotify integration, custom playlist creation, and responsive design. The project depends on major libraries like React, Axios, and Spotify Web API JS. The app is open-source and licensed under the MIT License.
          </p>
          
          <div style={{ marginTop: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Button 
              variant="outlined" 
              color="secondary" 
              href="https://github.com/katieb93/hit-clips"  // Replace with your GitHub repository link
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

