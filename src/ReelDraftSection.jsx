// // import * as React from 'react';
// // import ImageList from '@mui/material/ImageList';
// // import ImageListItem from '@mui/material/ImageListItem';
// // import Dialog from '@mui/material/Dialog';
// // import IconButton from '@mui/material/IconButton';
// // import CloseIcon from '@mui/icons-material/Close';
// // import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// // import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// // import Button from '@mui/material/Button';
// // import { ThemeProvider } from '@mui/material/styles';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import theme from './theme';  // Assuming the theme file is named 'theme.js'

// // // Importing new images
// // import imageOne from './assets/FDScreenShots/One.png';
// // import imageThree from './assets/FDScreenShots/Three.png';
// // import imageFour from './assets/FDScreenShots/Four.png';
// // import imageFive from './assets/FDScreenShots/Five.png';
// // import imageSix from './assets/FDScreenShots/Six.png';
// // import imageSeven from './assets/FDScreenShots/Seven.png';
// // import imageEight from './assets/FDScreenShots/Eight.png';
// // import imageNine from './assets/FDScreenShots/Nine.png';
// // import imageTen from './assets/FDScreenShots/Ten.png';

// // const itemData = [
// //   { img: imageOne },
// //   { img: imageThree },
// //   { img: imageFour },
// //   { img: imageFive },
// //   { img: imageSix },
// //   { img: imageSeven },
// //   { img: imageEight },
// //   { img: imageNine },
// //   { img: imageTen },
// // ];

// // export default function QuiltedImageList() {
// //   const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);

// //   const handleImageClick = (index) => {
// //     setSelectedImageIndex(index);
// //   };

// //   const handleClose = () => {
// //     setSelectedImageIndex(null);
// //   };

// //   const handleNext = () => {
// //     setSelectedImageIndex((prevIndex) =>
// //       prevIndex === itemData.length - 1 ? 0 : prevIndex + 1
// //     );
// //   };

// //   const handlePrev = () => {
// //     setSelectedImageIndex((prevIndex) =>
// //       prevIndex === 0 ? itemData.length - 1 : prevIndex - 1
// //     );
// //   };

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <CssBaseline />
// //       <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
// //         {/* Image List Section */}
// //         <div style={{ flex: '1 1 50%', paddingLeft: '50px', paddingRight: '25px' }}>
// //           <ImageList
// //             sx={{ height: 450 }}
// //             variant="quilted"
// //             cols={3}
// //             rowHeight={150}
// //           >
// //             {itemData.map((item, index) => (
// //               <ImageListItem key={item.img}>
// //                 <img
// //                   src={item.img}
// //                   alt={item.title}
// //                   loading="lazy"
// //                   style={{
// //                     objectFit: 'cover',
// //                     cursor: 'pointer',
// //                   }}
// //                   onClick={() => handleImageClick(index)}
// //                 />
// //               </ImageListItem>
// //             ))}
// //           </ImageList>
// //         </div>
  
// //         {/* Right section: Text content */}
// //         <div style={{ flex: '1 1 50%', paddingLeft: '25px', paddingRight: '50px' }}>
// //           <p style={{ ...theme.typography.body2 }}>
// //             This project is a React-based web application offering features like user authentication, data gathering, and movie data retrieval via The Movie Database (TMDb) API. It supports multiple game modes, including a quick draft (no login required) and a legacy draft (login required), allowing users to select and rank movies based on different criteria. The application also includes components for managing player names, organizing draft orders, and displaying scoring and history based on movie selections.
// //           </p>
// //           <p style={{ ...theme.typography.body2 }}>
// //             The project relies on key technologies like React, Supabase for authentication and backend operations, Axios for API requests, and Jest for testing. It also includes styling through various CSS files and legacy components that demonstrate alternative approaches to the same functionalities. Environment variables such as REACT_APP_TMDB_API_KEY, SUPABASE_URL, and SUPABASE_ANON_KEY need to be set for proper configuration. The project is licensed under the MIT License.
// //           </p>
          
// //           <div style={{ marginTop: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
// //             <Button 
// //               variant="outlined" 
// //               color="secondary" 
// //               href="https://thereeldraft.com/"  // Replace with your deployed site link
// //               target="_blank"
// //               sx={{
// //                 '&:hover': {
// //                   backgroundColor: theme.palette.primary.main, // Fill with primary color on hover
// //                   color: 'white',
// //                 },
// //               }}
// //             >
// //               View Deployed Site
// //             </Button>
// //             <Button 
// //               variant="outlined" 
// //               color="secondary" 
// //               href="https://github.com/katieb93/the-reel-draft"  // Replace with your GitHub repository link
// //               target="_blank"
// //               sx={{
// //                 '&:hover': {
// //                   backgroundColor: theme.palette.primary.main, // Fill with primary color on hover
// //                   color: 'white',
// //                 },
// //               }}
// //             >
// //               View GitHub Repository
// //             </Button>
// //           </div>

// //         </div>
  
// //         {/* Modal-like dialog for enlarged image */}
// //         <Dialog
// //           open={selectedImageIndex !== null}
// //           onClose={handleClose}
// //           maxWidth="lg"
// //           PaperProps={{
// //             style: {
// //               backgroundColor: 'transparent',
// //               boxShadow: 'none',
// //               overflow: 'hidden',
// //               position: 'relative',
// //             },
// //           }}
// //         >
// //           {selectedImageIndex !== null && (
// //             <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
// //               <IconButton
// //                 onClick={handlePrev}
// //                 style={{
// //                   position: 'absolute',
// //                   left: '10px',
// //                   zIndex: 10,
// //                   backgroundColor: 'rgba(0,0,0,0.5)',
// //                   color: 'white',
// //                 }}
// //               >
// //                 <ArrowBackIcon />
// //               </IconButton>
// //               <img
// //                 src={itemData[selectedImageIndex].img}
// //                 alt="Enlarged"
// //                 style={{
// //                   width: '90vw',
// //                   height: '90vh',
// //                   objectFit: 'contain',
// //                 }}
// //               />
// //               <IconButton
// //                 onClick={handleNext}
// //                 style={{
// //                   position: 'absolute',
// //                   right: '10px',
// //                   zIndex: 10,
// //                   backgroundColor: 'rgba(0,0,0,0.5)',
// //                   color: 'white',
// //                 }}
// //               >
// //                 <ArrowForwardIcon />
// //               </IconButton>
// //               <IconButton
// //                 onClick={handleClose}
// //                 style={{
// //                   position: 'absolute',
// //                   top: '20px',  // Reduced top position
// //                   right: '15px',  // Reduced right position
// //                   zIndex: 10,
// //                   padding: '4px',  // Reduced padding for smaller button size
// //                   backgroundColor: 'rgba(0,0,0,0.5)',
// //                   color: 'white',
// //                 }}
// //               >
// //                 <CloseIcon style={{ fontSize: '16px' }} />  {/* Reduced icon size */}
// //               </IconButton>
// //             </div>
// //           )}
// //         </Dialog>
// //       </div>
// //     </ThemeProvider>
// //   );
// // }

// // import * as React from 'react';
// // import ImageList from '@mui/material/ImageList';
// // import ImageListItem from '@mui/material/ImageListItem';
// // import Dialog from '@mui/material/Dialog';
// // import IconButton from '@mui/material/IconButton';
// // import CloseIcon from '@mui/icons-material/Close';
// // import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// // import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// // import Button from '@mui/material/Button';
// // import { ThemeProvider } from '@mui/material/styles';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import theme from './theme';  // Assuming the theme file is named 'theme.js'

// // // Importing new images
// // import imageOne from './assets/FDScreenShots/One.png';
// // import imageThree from './assets/FDScreenShots/Three.png';
// // import imageFour from './assets/FDScreenShots/Four.png';
// // import imageFive from './assets/FDScreenShots/Five.png';
// // import imageSix from './assets/FDScreenShots/Six.png';
// // import imageSeven from './assets/FDScreenShots/Seven.png';
// // import imageEight from './assets/FDScreenShots/Eight.png';
// // import imageNine from './assets/FDScreenShots/Nine.png';
// // import imageTen from './assets/FDScreenShots/Ten.png';

// // const itemData = [
// //   { img: imageOne },
// //   { img: imageThree },
// //   { img: imageFour },
// //   { img: imageFive },
// //   { img: imageSix },
// //   { img: imageSeven },
// //   { img: imageEight },
// //   { img: imageNine },
// //   { img: imageTen },
// // ];

// // export default function QuiltedImageListMobile() {
// //   const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);

// //   const handleImageClick = (index) => {
// //     setSelectedImageIndex(index);
// //   };

// //   const handleClose = () => {
// //     setSelectedImageIndex(null);
// //   };

// //   const handleNext = () => {
// //     setSelectedImageIndex((prevIndex) =>
// //       prevIndex === itemData.length - 1 ? 0 : prevIndex + 1
// //     );
// //   };

// //   const handlePrev = () => {
// //     setSelectedImageIndex((prevIndex) =>
// //       prevIndex === 0 ? itemData.length - 1 : prevIndex - 1
// //     );
// //   };

// //   return (
// //     <ThemeProvider theme={theme}>
// //       <CssBaseline />
// //       <div style={{ padding: '20px' }}>
// //         {/* Image List Section */}
// //         <ImageList
// //           sx={{ width: '100%', height: 'auto' }}
// //           variant="quilted"
// //           cols={2}
// //           rowHeight={150}
// //         >
// //           {itemData.map((item, index) => (
// //             <ImageListItem key={item.img}>
// //               <img
// //                 src={item.img}
// //                 alt={item.title}
// //                 loading="lazy"
// //                 style={{
// //                   objectFit: 'cover',
// //                   cursor: 'pointer',
// //                   width: '100%',
// //                   height: '100%',
// //                 }}
// //                 onClick={() => handleImageClick(index)}
// //               />
// //             </ImageListItem>
// //           ))}
// //         </ImageList>

// //         {/* Text content beneath images */}
// //         <div style={{ marginTop: '20px' }}>
// //           <p style={{ ...theme.typography.body2, textAlign: 'center' }}>
// //             This project is a React-based web application offering features like user authentication, data gathering, and movie data retrieval via The Movie Database (TMDb) API. It supports multiple game modes, including a quick draft (no login required) and a legacy draft (login required), allowing users to select and rank movies based on different criteria. The application also includes components for managing player names, organizing draft orders, and displaying scoring and history based on movie selections.
// //           </p>
// //           <p style={{ ...theme.typography.body2, textAlign: 'center' }}>
// //             The project relies on key technologies like React, Supabase for authentication and backend operations, Axios for API requests, and Jest for testing. It also includes styling through various CSS files and legacy components that demonstrate alternative approaches to the same functionalities. Environment variables such as REACT_APP_TMDB_API_KEY, SUPABASE_URL, and SUPABASE_ANON_KEY need to be set for proper configuration. The project is licensed under the MIT License.
// //           </p>

// //           <div style={{ marginTop: '30px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '10px' }}>
// //             <Button 
// //               variant="outlined" 
// //               color="secondary" 
// //               href="https://thereeldraft.com/"  // Replace with your deployed site link
// //               target="_blank"
// //               sx={{
// //                 '&:hover': {
// //                   backgroundColor: theme.palette.primary.main, // Fill with primary color on hover
// //                   color: 'white',
// //                 },
// //               }}
// //             >
// //               View Deployed Site
// //             </Button>
// //             <Button 
// //               variant="outlined" 
// //               color="secondary" 
// //               href="https://github.com/katieb93/the-reel-draft"  // Replace with your GitHub repository link
// //               target="_blank"
// //               sx={{
// //                 '&:hover': {
// //                   backgroundColor: theme.palette.primary.main, // Fill with primary color on hover
// //                   color: 'white',
// //                 },
// //               }}
// //             >
// //               View GitHub Repository
// //             </Button>
// //           </div>
// //         </div>

// //         {/* Modal-like dialog for enlarged image */}
// //         <Dialog
// //           open={selectedImageIndex !== null}
// //           onClose={handleClose}
// //           maxWidth="lg"
// //           PaperProps={{
// //             style: {
// //               backgroundColor: 'transparent',
// //               boxShadow: 'none',
// //               overflow: 'hidden',
// //               position: 'relative',
// //             },
// //           }}
// //         >
// //           {selectedImageIndex !== null && (
// //             <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
// //               <IconButton
// //                 onClick={handlePrev}
// //                 style={{
// //                   position: 'absolute',
// //                   left: '10px',
// //                   zIndex: 10,
// //                   backgroundColor: 'rgba(0,0,0,0.5)',
// //                   color: 'white',
// //                 }}
// //               >
// //                 <ArrowBackIcon />
// //               </IconButton>
// //               <img
// //                 src={itemData[selectedImageIndex].img}
// //                 alt="Enlarged"
// //                 style={{
// //                   width: '90vw',
// //                   height: '90vh',
// //                   objectFit: 'contain',
// //                 }}
// //               />
// //               <IconButton
// //                 onClick={handleNext}
// //                 style={{
// //                   position: 'absolute',
// //                   right: '10px',
// //                   zIndex: 10,
// //                   backgroundColor: 'rgba(0,0,0,0.5)',
// //                   color: 'white',
// //                 }}
// //               >
// //                 <ArrowForwardIcon />
// //               </IconButton>
// //               <IconButton
// //                 onClick={handleClose}
// //                 style={{
// //                   position: 'absolute',
// //                   top: '20px',  // Reduced top position
// //                   right: '15px',  // Reduced right position
// //                   zIndex: 10,
// //                   padding: '4px',  // Reduced padding for smaller button size
// //                   backgroundColor: 'rgba(0,0,0,0.5)',
// //                   color: 'white',
// //                 }}
// //               >
// //                 <CloseIcon style={{ fontSize: '16px' }} />  {/* Reduced icon size */}
// //               </IconButton>
// //             </div>
// //           )}
// //         </Dialog>
// //       </div>
// //     </ThemeProvider>
// //   );
// // }
// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import Dialog from '@mui/material/Dialog';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Button from '@mui/material/Button';
// import { ThemeProvider } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import useMediaQuery from '@mui/material/useMediaQuery';
// import theme from './theme';  // Assuming the theme file is named 'theme.js'

// // Importing new images
// import imageOne from './assets/FDScreenShots/One.png';
// import imageThree from './assets/FDScreenShots/Three.png';
// import imageFour from './assets/FDScreenShots/Four.png';
// import imageFive from './assets/FDScreenShots/Five.png';
// import imageSix from './assets/FDScreenShots/Six.png';
// import imageSeven from './assets/FDScreenShots/Seven.png';
// import imageEight from './assets/FDScreenShots/Eight.png';
// import imageNine from './assets/FDScreenShots/Nine.png';
// import imageTen from './assets/FDScreenShots/Ten.png';

// const itemData = [
//   { img: imageOne },
//   { img: imageThree },
//   { img: imageFour },
//   { img: imageFive },
//   { img: imageSix },
//   { img: imageSeven },
//   { img: imageEight },
//   { img: imageNine },
//   { img: imageTen },
// ];

// export default function ResponsiveQuiltedImageList() {
//   const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

//   const handleImageClick = (index) => {
//     setSelectedImageIndex(index);
//   };

//   const handleClose = () => {
//     setSelectedImageIndex(null);
//   };

//   const handleNext = () => {
//     setSelectedImageIndex((prevIndex) =>
//       prevIndex === itemData.length - 1 ? 0 : prevIndex + 1
//     );
//   };

//   const handlePrev = () => {
//     setSelectedImageIndex((prevIndex) =>
//       prevIndex === 0 ? itemData.length - 1 : prevIndex - 1
//     );
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', position: 'relative', padding: isMobile ? '20px' : '0 50px' }}>
//         {/* Image List Section */}
//         <div style={{ flex: '1 1 50%', padding: isMobile ? '0' : '0 25px' }}>
//           <ImageList
//             sx={{ width: '100%', height: 'auto' }}
//             variant="quilted"
//             cols={isMobile ? 2 : 3}
//             rowHeight={150}
//           >
//             {itemData.map((item, index) => (
//               <ImageListItem 
//                 key={item.img} 
//                 cols={isMobile && index === itemData.length - 1 ? 2 : 1}  // Make last image full width on mobile
//               >
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   loading="lazy"
//                   style={{
//                     objectFit: 'cover',
//                     cursor: 'pointer',
//                     width: '100%',
//                     height: '100%',
//                   }}
//                   onClick={() => handleImageClick(index)}
//                 />
//               </ImageListItem>
//             ))}
//           </ImageList>
//         </div>
  
//         {/* Right section: Text content */}
//         <div style={{ flex: '1 1 50%', padding: isMobile ? '20px 0' : '0 25px', textAlign: 'left' }}>
//           <p style={{ ...theme.typography.body2 }}>
//             This project is a React-based web application offering features like user authentication, data gathering, and movie data retrieval via The Movie Database (TMDb) API. It supports multiple game modes, including a quick draft (no login required) and a legacy draft (login required), allowing users to select and rank movies based on different criteria. The application also includes components for managing player names, organizing draft orders, and displaying scoring and history based on movie selections.
//           </p>
//           <p style={{ ...theme.typography.body2 }}>
//             The project relies on key technologies like React, Supabase for authentication and backend operations, Axios for API requests, and Jest for testing. It also includes styling through various CSS files and legacy components that demonstrate alternative approaches to the same functionalities. Environment variables such as REACT_APP_TMDB_API_KEY, SUPABASE_URL, and SUPABASE_ANON_KEY need to be set for proper configuration. The project is licensed under the MIT License.
//           </p>
          
//           <div style={{ marginTop: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
//             <Button 
//               variant="outlined" 
//               color="secondary" 
//               href="https://thereeldraft.com/"  // Replace with your deployed site link
//               target="_blank"
//               sx={{
//                 '&:hover': {
//                   backgroundColor: theme.palette.primary.main, // Fill with primary color on hover
//                   color: 'white',
//                 },
//               }}
//             >
//               View Deployed Site
//             </Button>
//             <Button 
//               variant="outlined" 
//               color="secondary" 
//               href="https://github.com/katieb93/the-reel-draft"  // Replace with your GitHub repository link
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
  
//         {/* Modal-like dialog for enlarged image */}
//         <Dialog
//           open={selectedImageIndex !== null}
//           onClose={handleClose}
//           maxWidth="lg"
//           PaperProps={{
//             style: {
//               backgroundColor: 'transparent',
//               boxShadow: 'none',
//               overflow: 'hidden',
//               position: 'relative',
//             },
//           }}
//         >
//           {selectedImageIndex !== null && (
//             <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
//               <IconButton
//                 onClick={handlePrev}
//                 style={{
//                   position: 'absolute',
//                   left: '10px',
//                   zIndex: 10,
//                   backgroundColor: 'rgba(0,0,0,0.5)',
//                   color: 'white',
//                 }}
//               >
//                 <ArrowBackIcon />
//               </IconButton>
//               <img
//                 src={itemData[selectedImageIndex].img}
//                 alt="Enlarged"
//                 style={{
//                   width: '90vw',
//                   height: '90vh',
//                   objectFit: 'contain',
//                 }}
//               />
//               <IconButton
//                 onClick={handleNext}
//                 style={{
//                   position: 'absolute',
//                   right: '10px',
//                   zIndex: 10,
//                   backgroundColor: 'rgba(0,0,0,0.5)',
//                   color: 'white',
//                 }}
//               >
//                 <ArrowForwardIcon />
//               </IconButton>
//               <IconButton
//                 onClick={handleClose}
//                 style={{
//                   position: 'absolute',
//                   top: '20px',
//                   right: '15px',
//                   zIndex: 10,
//                   padding: '4px',
//                   backgroundColor: 'rgba(0,0,0,0.5)',
//                   color: 'white',
//                 }}
//               >
//                 <CloseIcon style={{ fontSize: '16px' }} />
//               </IconButton>
//             </div>
//           )}
//         </Dialog>
//       </div>
//     </ThemeProvider>
//   );
// }

import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useMediaQuery from '@mui/material/useMediaQuery';
import theme from './theme';  // Assuming the theme file is named 'theme.js'

// Importing new images
import imageOne from './assets/FDScreenShots/One.png';
import imageThree from './assets/FDScreenShots/Three.png';
import imageFour from './assets/FDScreenShots/Four.png';
import imageFive from './assets/FDScreenShots/Five.png';
import imageSix from './assets/FDScreenShots/Six.png';
import imageSeven from './assets/FDScreenShots/Seven.png';
import imageEight from './assets/FDScreenShots/Eight.png';
import imageNine from './assets/FDScreenShots/Nine.png';
import imageTen from './assets/FDScreenShots/Ten.png';

const itemData = [
  { img: imageOne },
  { img: imageThree },
  { img: imageFour },
  { img: imageFive },
  { img: imageSix },
  { img: imageSeven },
  { img: imageEight },
  { img: imageNine },
  { img: imageTen },
];

export default function ResponsiveQuiltedImageList() {
  const [selectedImageIndex, setSelectedImageIndex] = React.useState(null);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const handleClose = () => {
    setSelectedImageIndex(null);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === itemData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? itemData.length - 1 : prevIndex - 1
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', position: 'relative', padding: isMobile ? '0 20px 20px 20px' : '0 50px' }}>
        {/* Image List Section */}
        <div style={{ flex: '1 1 50%', padding: isMobile ? '0' : '0 25px' }}>
          <ImageList
            sx={{ width: '100%', height: 'auto' }}
            variant="quilted"
            cols={isMobile ? 2 : 3}
            rowHeight={150}
          >
            {itemData.map((item, index) => (
              <ImageListItem 
                key={item.img} 
                cols={isMobile && index === itemData.length - 1 ? 2 : 1}  // Make last image full width on mobile
              >
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    objectFit: 'cover',
                    cursor: 'pointer',
                    width: '100%',
                    height: '100%',
                  }}
                  onClick={() => handleImageClick(index)}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
  
        {/* Right section: Text content */}
        <div style={{ flex: '1 1 50%', padding: isMobile ? '20px 0' : '0 25px', textAlign: 'left' }}>
          <p style={{ ...theme.typography.body2 }}>
            This project is a React-based web application offering features like user authentication, data gathering, and movie data retrieval via The Movie Database (TMDb) API. It supports multiple game modes, including a quick draft (no login required) and a legacy draft (login required), allowing users to select and rank movies based on different criteria. The application also includes components for managing player names, organizing draft orders, and displaying scoring and history based on movie selections.
          </p>
          <p style={{ ...theme.typography.body2 }}>
            The project relies on key technologies like React, Supabase for authentication and backend operations, Axios for API requests, and Jest for testing. It also includes styling through various CSS files and legacy components that demonstrate alternative approaches to the same functionalities. Environment variables such as REACT_APP_TMDB_API_KEY, SUPABASE_URL, and SUPABASE_ANON_KEY need to be set for proper configuration. The project is licensed under the MIT License.
          </p>
          
          <div style={{ marginTop: '30px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Button 
              variant="outlined" 
              color="secondary" 
              href="https://thereeldraft.com/"  // Replace with your deployed site link
              target="_blank"
              sx={{
                '&:hover': {
                  backgroundColor: theme.palette.primary.main, // Fill with primary color on hover
                  color: 'white',
                },
              }}
            >
              View Deployed Site
            </Button>
            <Button 
              variant="outlined" 
              color="secondary" 
              href="https://github.com/katieb93/the-reel-draft"  // Replace with your GitHub repository link
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
  
        {/* Modal-like dialog for enlarged image */}
        <Dialog
          open={selectedImageIndex !== null}
          onClose={handleClose}
          maxWidth="lg"
          PaperProps={{
            style: {
              backgroundColor: 'transparent',
              boxShadow: 'none',
              overflow: 'hidden',
              position: 'relative',
            },
          }}
        >
          {selectedImageIndex !== null && (
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <IconButton
                onClick={handlePrev}
                style={{
                  position: 'absolute',
                  left: '10px',
                  zIndex: 10,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                }}
              >
                <ArrowBackIcon />
              </IconButton>
              <img
                src={itemData[selectedImageIndex].img}
                alt="Enlarged"
                style={{
                  width: '90vw',
                  height: '90vh',
                  objectFit: 'contain',
                }}
              />
              <IconButton
                onClick={handleNext}
                style={{
                  position: 'absolute',
                  right: '10px',
                  zIndex: 10,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                }}
              >
                <ArrowForwardIcon />
              </IconButton>
              <IconButton
                onClick={handleClose}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '15px',
                  zIndex: 10,
                  padding: '4px',
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  color: 'white',
                }}
              >
                <CloseIcon style={{ fontSize: '16px' }} />
              </IconButton>
            </div>
          )}
        </Dialog>
      </div>
    </ThemeProvider>
  );
}
