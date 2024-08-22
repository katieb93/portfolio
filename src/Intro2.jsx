// // // import React from 'react';
// // // import FirstAustinBlue from './assets/FirstAustinBlue.png';
// // // import UTCube from './components/UTCube';


// // // function Intro2() {
// // //   return (
// // //     <div style={{ position: 'relative', zIndex: 5 }}>
// // //         <div style={{ 
// // //             position: 'relative', 
// // //             height: 'auto', 
// // //             marginTop: '-25vh', // This will pull Intro2 up, but keep the top of the image visible
// // //         }}>
// // //             <img 
// // //                 src={FirstAustinBlue} 
// // //                 alt="First Austin" 
// // //                 style={{ 
// // //                     position: 'relative', 
// // //                     top: 0, 
// // //                     left: 0, 
// // //                     width: '100%',  
// // //                     height: '100%', 
// // //                     zIndex: 6, // Ensure this is higher than elements in Intro
// // //                     objectFit: 'cover' 
// // //                 }} 
// // //             />
// // //             <div style={{ 
// // //                 position: 'absolute', 
// // //                 bottom: '300px', // Adjust this value to control the distance from the bottom
// // //                 left: '200px',   // Adjust this value to control the distance from the left
// // //                 zIndex: 7, // Ensure this is higher than the image
// // //             }}>
// // //                 <UTCube />
// // //             </div>
// // //         </div>
// // //     </div>
// // //   );
// // // }

// // // export default Intro2;

// // import React from 'react';
// // import FirstAustinBlue from './assets/FirstAustinBlue.png';
// // import UTCube from './components/UTCube';

// // function Intro2() {
// //   return (
// //     <div style={{ position: 'relative', zIndex: 5 }}>
// //       <div 
// //         style={{ 
// //           position: 'relative', 
// //           height: 'auto', 
// //           marginTop: '-25vh', // This will pull Intro2 up, but keep the top of the image visible
// //           display: 'flex', 
// //           flexDirection: 'column-reverse', // Default to reverse order
// //         }}
// //       >
// //         <img 
// //           src={FirstAustinBlue} 
// //           alt="First Austin" 
// //           style={{ 
// //             position: 'relative', 
// //             top: 0, 
// //             left: 0, 
// //             width: '100%',  
// //             height: '100%', 
// //             zIndex: 6, // Ensure this is higher than elements in Intro
// //             objectFit: 'cover',
// //             order: 2, // Ensure this appears second on mobile
// //           }} 
// //         />
// //         <div 
// //           style={{ 
// //             position: 'absolute', 
// //             bottom: '300px', // Adjust this value to control the distance from the bottom
// //             left: '200px',   // Adjust this value to control the distance from the left
// //             zIndex: 7, // Ensure this is higher than the image
// //             order: 1,  // Ensure this appears first on mobile
// //           }}
// //         >
// //           <UTCube />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Intro2;

// import React from 'react';
// import FirstAustinBlue from './assets/FirstAustinBlue.png';
// import UTCube from './components/UTCube';

// function Intro2() {
//   return (
//     <div style={styles.container}>
//       <div style={styles.innerContainer}>
//         <img 
//           src={FirstAustinBlue} 
//           alt="First Austin" 
//           style={styles.image} 
//         />
//         <div style={styles.utcubeContainer}>
//           <UTCube />
//         </div>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     position: 'relative',
//     zIndex: 5,
//   },
//   innerContainer: {
//     position: 'relative',
//     height: 'auto',
//     marginTop: '-25vh',
//     display: 'flex',
//     flexDirection: 'column-reverse', // Default layout
//   },
//   image: {
//     position: 'relative',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 6,
//     objectFit: 'cover',
//     order: 2,
//   },
//   utcubeContainer: {
//     position: 'absolute',
//     bottom: '300px',
//     left: '200px',
//     zIndex: 7,
//     order: 1,
//   },
//   // Mobile-specific styles
//   '@media (max-width: 768px)': {
//     innerContainer: {
//       flexDirection: 'column', // Change direction for mobile
//     },
//     image: {
//       order: 1, // Image first on mobile
//       height: 'auto', // Adjust height for mobile
//     },
//     utcubeContainer: {
//       position: 'relative', // Use relative positioning on mobile
//       width: '100%', // Make the cube full width on mobile
//       bottom: 'auto',
//       left: 'auto',
//       order: 2, // Cube second on mobile
//       marginTop: '20px', // Add some margin on mobile
//       zIndex: 7, // Ensure it's above other elements
//       textAlign: 'center', // Center align content within the cube container
//     },
//   },
// };

// export default Intro2;

import React from 'react';
import FirstAustinBlue from './assets/FirstAustinBlue.png';
import UTCube from './components/UTCube';

function Intro2() {
  return (
    <div style={styles.container}>
      <div style={styles.innerContainer}>
        <img 
          src={FirstAustinBlue} 
          alt="First Austin" 
          style={styles.image} 
        />
        <div style={styles.utcubeContainer}>
          <UTCube />
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: 'relative',
    zIndex: 5,
  },
  innerContainer: {
    position: 'relative',
    height: 'auto',
    marginTop: '-25vh',
    display: 'flex',
    flexDirection: 'column-reverse', // Default layout
  },
  image: {
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 6,
    objectFit: 'cover',
    order: 2,
  },
  utcubeContainer: {
    position: 'absolute',
    bottom: '300px',
    left: '200px',
    zIndex: 7,
    order: 1,
  },
  // Mobile-specific styles
  '@media (max-width: 768px)': {
    innerContainer: {
      flexDirection: 'column', // Stack items in a column
      marginTop: '0', // Remove the negative margin on mobile
      alignItems: 'center', // Center content horizontally
    },
    image: {
      order: 1, // Image first on mobile
      height: 'auto', // Adjust height for mobile
    },
    utcubeContainer: {
      position: 'relative', // Use relative positioning on mobile
      width: '100%', // Make the cube full width on mobile
      bottom: 'auto',
      left: 'auto',
      order: 2, // Cube second on mobile
      marginTop: '20px', // Add some margin on mobile
      zIndex: 7, // Ensure it's above other elements
      textAlign: 'center', // Center align content within the cube container
    },
  },
};

export default Intro2;
