import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// Importing new images
import imageEight from '../assets/FDScreenShots/Eight.png';
import imageFive from '../assets/FDScreenShots/Five.png';
import imageFour from '../assets/FDScreenShots/Four.png';
import imageNine from '../assets/FDScreenShots/Nine.png';
import imageOne from '../assets/FDScreenShots/One.png';
import imageSeven from '../assets/FDScreenShots/Seven.png';
import imageSix from '../assets/FDScreenShots/Six.png';
import imageTen from '../assets/FDScreenShots/Ten.png';
import imageThree from '../assets/FDScreenShots/Three.png';
import imageTwo from '../assets/FDScreenShots/Two.png';

// Define the responsive breakpoints
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    partialVisibilityGutter: 60, // Adjust this value to control how much of the side images is visible
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
  { src: imageEight, caption: 'Key environment variables required include `REACT_APP_TMDB_API_KEY`, `SUPABASE_URL`, and `SUPABASE_ANON_KEY`.' },
  { src: imageFive, caption: 'The project relies on technologies such as React for the front-end, Supabase for authentication and backend operations, and Axios for making API requests.' },
  { src: imageFour, caption: 'It also features video tutorials embedded within the application to guide users on how to play the game.' },
  { src: imageNine, caption: 'Caption for Image Nine' },
  { src: imageOne, caption: 'This project is a React-based web application that provides functionalities like user authentication, data gathering, and movie data retrieval via the TMDb API.' },
  { src: imageSeven, caption: 'Jest is used for running tests and ensuring the correctness of the components.' },
  { src: imageSix, caption: 'The application uses CSS for styling components, and it includes legacy components to demonstrate alternative implementations of the same features.' },
  { src: imageTen, caption: 'It is licensed under the MIT License.' },
  { src: imageThree, caption: 'The application includes components for managing player names, organizing draft orders, and displaying scores and histories based on movie selections.' },
  { src: imageTwo, caption: 'It supports game modes such as a quick draft (no login required) and a legacy draft (login required), allowing users to select and rank movies based on various criteria.' },
];

// Carousel component
const ReelDraftCarousel = () => {
  return (
    <Carousel
      responsive={responsive}
      swipeable={true}
      draggable={true}
      showDots={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
      partialVisible={true} // Enables partial visibility of adjacent items
    >
      {imageData.map((image, index) => (
        <div 
          key={index} 
          style={{ 
            padding: '10px', 
            textAlign: 'center', // Centers content horizontally
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', // Centers items within the div
          }}
        >
          <img src={image.src} alt={`Slide ${index + 1}`} style={{ width: '70%', height: 'auto' }} />
          <p style={{ marginTop: '10px', fontSize: '2rem', width: '70%', color: '#555', textAlign: 'center' }}>
            {image.caption}
          </p>
        </div>
      ))}
    </Carousel>
  );
};

export default ReelDraftCarousel;
