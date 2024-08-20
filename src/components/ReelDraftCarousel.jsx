// // import React from 'react';
// // import Carousel from 'react-multi-carousel';
// // import 'react-multi-carousel/lib/styles.css';
// // import { ThemeProvider, Box, Typography } from '@mui/material';
// // import theme from '../theme'; // Assuming the theme file is named theme.js and is in the same directory

// // // Importing new images
// // import imageOne from '../assets/FDScreenShots/One.png';
// // import imageTwo from '../assets/FDScreenShots/Two.png';
// // import imageThree from '../assets/FDScreenShots/Three.png';
// // import imageFour from '../assets/FDScreenShots/Four.png';
// // import imageFive from '../assets/FDScreenShots/Five.png';
// // import imageSix from '../assets/FDScreenShots/Six.png';
// // import imageSeven from '../assets/FDScreenShots/Seven.png';
// // import imageEight from '../assets/FDScreenShots/Eight.png';
// // import imageNine from '../assets/FDScreenShots/Nine.png';
// // import imageTen from '../assets/FDScreenShots/Ten.png';

// // // Define the responsive breakpoints
// // const responsive = {
// //   superLargeDesktop: {
// //     breakpoint: { max: 4000, min: 3000 },
// //     items: 1,
// //     partialVisibilityGutter: 60,
// //   },
// //   desktop: {
// //     breakpoint: { max: 3000, min: 1024 },
// //     items: 1,
// //     partialVisibilityGutter: 60,
// //   },
// //   tablet: {
// //     breakpoint: { max: 1024, min: 464 },
// //     items: 1,
// //     partialVisibilityGutter: 40,
// //   },
// //   mobile: {
// //     breakpoint: { max: 464, min: 0 },
// //     items: 1,
// //     partialVisibilityGutter: 30,
// //   },
// // };

// // // Image data including URLs and captions
// // const imageData = [
// //   { src: imageOne, caption: 'This project is a React-based web application that provides functionalities like user authentication, data gathering, and movie data retrieval via the TMDb API.' },
// //   { src: imageTwo, caption: 'It supports game modes such as a quick draft (no login required) and a legacy draft (login required), allowing users to select and rank movies based on various criteria.' },
// //   { src: imageThree, caption: 'The application includes components for managing player names, organizing draft orders, and displaying scores and histories based on movie selections.' },
// //   { src: imageFour, caption: 'It also features video tutorials embedded within the application to guide users on how to play the game.' },
// //   { src: imageFive, caption: 'The project relies on technologies such as React for the front-end, Supabase for authentication and backend operations, and Axios for making API requests.' },
// //   { src: imageSix, caption: 'The application uses CSS for styling components, and it includes legacy components to demonstrate alternative implementations of the same features.' },
// //   { src: imageSeven, caption: 'Jest is used for running tests and ensuring the correctness of the components.' },
// //   { src: imageEight, caption: 'Key environment variables required include `REACT_APP_TMDB_API_KEY`, `SUPABASE_URL`, and `SUPABASE_ANON_KEY`.' },
// //   { src: imageNine, caption: 'The application includes functionality for tracking and displaying game session histories and player statistics.' },
// //   { src: imageTen, caption: 'It is licensed under the MIT License.' },
// // ];

// // // Carousel component
// // const ReelDraftCarousel = () => {
// //   return (
// //     <ThemeProvider theme={theme}>
// //       <Box sx={{ padding: '50px', backgroundColor: theme.palette.background.default }}>
// //         <Carousel
// //           responsive={responsive}
// //           swipeable={true}
// //           draggable={true}
// //           showDots={true}
// //           infinite={true}
// //           autoPlay={true}
// //           autoPlaySpeed={3000}
// //           keyBoardControl={true}
// //           customTransition="all .5"
// //           transitionDuration={500}
// //           containerClass="carousel-container"
// //           itemClass="carousel-item-padding-40-px"
// //           partialVisible={true}
// //           dotListClass="custom-dot-list-style"
// //         >
// //           {imageData.map((image, index) => (
// //             <Box 
// //               key={index} 
// //               sx={{ 
// //                 padding: '10px', 
// //                 textAlign: 'center',
// //                 display: 'flex', 
// //                 flexDirection: 'column', 
// //                 alignItems: 'center',
// //               }}
// //             >
// //               <img src={image.src} alt={`Slide ${index + 1}`} style={{ width: '70%', height: 'auto' }} />
// //               <Typography 
// //                 variant="body2" 
// //                 sx={{ 
// //                   marginTop: '10px', 
// //                   marginBottom: '30px',  // Add margin-bottom to create space between text and dots
// //                   width: '70%', 
// //                   color: '#555', 
// //                   textAlign: 'center', 
// //                   ...theme.typography.body2 
// //                 }}
// //               >
// //                 {image.caption}
// //               </Typography>
// //             </Box>
// //           ))}
// //         </Carousel>
// //       </Box>
// //       <style jsx global>{`
// //         .custom-dot-list-style {
// //           margin-top: 30px; /* Increase the margin-top for the dots */
// //         }
// //       `}</style>
// //     </ThemeProvider>
// //   );
// // };

// // export default ReelDraftCarousel;

// import React from 'react';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';
// import { ThemeProvider, Box, Typography } from '@mui/material';
// import theme from '../theme'; // Assuming the theme file is named theme.js and is in the same directory

// // Importing new images
// import imageOne from '../assets/FDScreenShots/One.png';
// import imageTwo from '../assets/FDScreenShots/Two.png';
// import imageThree from '../assets/FDScreenShots/Three.png';
// import imageFour from '../assets/FDScreenShots/Four.png';
// import imageFive from '../assets/FDScreenShots/Five.png';
// import imageSix from '../assets/FDScreenShots/Six.png';
// import imageSeven from '../assets/FDScreenShots/Seven.png';
// import imageEight from '../assets/FDScreenShots/Eight.png';
// import imageNine from '../assets/FDScreenShots/Nine.png';
// import imageTen from '../assets/FDScreenShots/Ten.png';

// // Define the responsive breakpoints
// const responsive = {
//   superLargeDesktop: {
//     breakpoint: { max: 4000, min: 3000 },
//     items: 1,
//     partialVisibilityGutter: 60,
//   },
//   desktop: {
//     breakpoint: { max: 3000, min: 1024 },
//     items: 1,
//     partialVisibilityGutter: 60,
//   },
//   tablet: {
//     breakpoint: { max: 1024, min: 464 },
//     items: 1,
//     partialVisibilityGutter: 40,
//   },
//   mobile: {
//     breakpoint: { max: 464, min: 0 },
//     items: 1,
//     partialVisibilityGutter: 30,
//   },
// };

// // Image data including URLs and captions
// const imageData = [
//   { src: imageOne, caption: 'This project is a React-based web application that provides functionalities like user authentication, data gathering, and movie data retrieval via the TMDb API.' },
//   { src: imageTwo, caption: 'It supports game modes such as a quick draft (no login required) and a legacy draft (login required), allowing users to select and rank movies based on various criteria.' },
//   { src: imageThree, caption: 'The application includes components for managing player names, organizing draft orders, and displaying scores and histories based on movie selections.' },
//   { src: imageFour, caption: 'It also features video tutorials embedded within the application to guide users on how to play the game.' },
//   { src: imageFive, caption: 'The project relies on technologies such as React for the front-end, Supabase for authentication and backend operations, and Axios for making API requests.' },
//   { src: imageSix, caption: 'The application uses CSS for styling components, and it includes legacy components to demonstrate alternative implementations of the same features.' },
//   { src: imageSeven, caption: 'Jest is used for running tests and ensuring the correctness of the components.' },
//   { src: imageEight, caption: 'Key environment variables required include `REACT_APP_TMDB_API_KEY`, `SUPABASE_URL`, and `SUPABASE_ANON_KEY`.' },
//   { src: imageNine, caption: 'The application includes functionality for tracking and displaying game session histories and player statistics.' },
//   { src: imageTen, caption: 'It is licensed under the MIT License.' },
// ];

// // Carousel component
// const ReelDraftCarousel = () => {
//   return (
//     <ThemeProvider theme={theme}>
//       <Box 
//         sx={{ 
//           padding: '50px', 
//           backgroundColor: theme.palette.background.default,
//           maxWidth: '1200px', // Limit the max width of the carousel container
//           margin: '0 auto', // Center the carousel horizontally
//         }}
//       >
//         <Carousel
//           responsive={responsive}
//           swipeable={true}
//           draggable={true}
//           showDots={true}
//           infinite={true}
//           autoPlay={true}
//           autoPlaySpeed={3000}
//           keyBoardControl={true}
//           customTransition="all .5"
//           transitionDuration={500}
//           containerClass="carousel-container"
//           itemClass="carousel-item-padding-40-px"
//           partialVisible={true}
//           dotListClass="custom-dot-list-style"
//         >
//           {imageData.map((image, index) => (
//             <Box 
//               key={index} 
//               sx={{ 
//                 padding: '10px', 
//                 textAlign: 'center',
//                 display: 'flex', 
//                 flexDirection: 'column', 
//                 alignItems: 'center',
//               }}
//             >
//               <img src={image.src} alt={`Slide ${index + 1}`} style={{ width: '70%', height: 'auto' }} />
//               <Typography 
//                 variant="body2" 
//                 sx={{ 
//                   marginTop: '10px', 
//                   marginBottom: '30px',  
//                   width: '70%', 
//                   color: '#555', 
//                   textAlign: 'center', 
//                   ...theme.typography.body2 
//                 }}
//               >
//                 {image.caption}
//               </Typography>
//             </Box>
//           ))}
//         </Carousel>
//       </Box>
//       <style jsx global>{`
//         .custom-dot-list-style {
//           margin-top: 30px; /* Increase the margin-top for the dots */
//         }
//       `}</style>
//     </ThemeProvider>
//   );
// };

// export default ReelDraftCarousel;

import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ThemeProvider, Box, Typography } from '@mui/material';
import theme from '../theme';

// Importing new images
import imageOne from '../assets/FDScreenShots/One.png';
import imageTwo from '../assets/FDScreenShots/Two.png';
import imageThree from '../assets/FDScreenShots/Three.png';
import imageFour from '../assets/FDScreenShots/Four.png';
import imageFive from '../assets/FDScreenShots/Five.png';
import imageSix from '../assets/FDScreenShots/Six.png';
import imageSeven from '../assets/FDScreenShots/Seven.png';
import imageEight from '../assets/FDScreenShots/Eight.png';
import imageNine from '../assets/FDScreenShots/Nine.png';
import imageTen from '../assets/FDScreenShots/Ten.png';

// Define the responsive breakpoints
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    partialVisibilityGutter: 60,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    partialVisibilityGutter: 60,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30,
  },
};

// Image data including URLs and captions
const imageData = [
  { src: imageOne, caption: 'This project is a React-based web application that provides functionalities like user authentication, data gathering, and movie data retrieval via the TMDb API.' },
  { src: imageTwo, caption: 'It supports game modes such as a quick draft (no login required) and a legacy draft (login required), allowing users to select and rank movies based on various criteria.' },
  { src: imageThree, caption: 'The application includes components for managing player names, organizing draft orders, and displaying scores and histories based on movie selections.' },
  { src: imageFour, caption: 'It also features video tutorials embedded within the application to guide users on how to play the game.' },
  { src: imageFive, caption: 'The project relies on technologies such as React for the front-end, Supabase for authentication and backend operations, and Axios for making API requests.' },
  { src: imageSix, caption: 'The application uses CSS for styling components, and it includes legacy components to demonstrate alternative implementations of the same features.' },
  { src: imageSeven, caption: 'Jest is used for running tests and ensuring the correctness of the components.' },
  { src: imageEight, caption: 'Key environment variables required include `REACT_APP_TMDB_API_KEY`, `SUPABASE_URL`, and `SUPABASE_ANON_KEY`.' },
  { src: imageNine, caption: 'The application includes functionality for tracking and displaying game session histories and player statistics.' },
  { src: imageTen, caption: 'It is licensed under the MIT License.' },
];

// Carousel component
const ReelDraftCarousel = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          padding: '50px', 
          backgroundColor: theme.palette.background.default,
          maxWidth: '1200px',  
          margin: '0 auto',  
          textAlign: 'center',  
        }}
      >
        <Carousel
          responsive={responsive}
          swipeable
          draggable
          showDots
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          partialVisible
          dotListClass="custom-dot-list-style"
        >
          {imageData.map((image, index) => (
            <Box 
              key={index} 
              sx={{ 
                padding: '10px', 
                textAlign: 'center',
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
              }}
            >
              <img src={image.src} alt={`Slide ${index + 1}`} style={{ width: '70%', height: 'auto' }} />
              <Typography 
                variant="body2" 
                sx={{ 
                  marginTop: '10px', 
                  marginBottom: '30px',  
                  width: '70%', 
                  color: '#555', 
                  textAlign: 'center', 
                  ...theme.typography.body2 
                }}
              >
                {image.caption}
              </Typography>
            </Box>
          ))}
        </Carousel>
      </Box>
      <style jsx global>{`
        .custom-dot-list-style {
          margin-top: 30px;
        }
      `}</style>
    </ThemeProvider>
  );
};

export default ReelDraftCarousel;