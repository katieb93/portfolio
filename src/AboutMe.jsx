import React from 'react';
import { ThemeProvider, Box, Typography } from '@mui/material';
import theme from './theme'; // Assuming the theme file is named theme.js and is in the same directory

const AboutMe = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ padding: '100px 200px 50px 200px', backgroundColor: theme.palette.background.default }}>

        <Typography variant="h1" component="h1" sx={{ ...theme.typography.wsParadoseItalic, textTransform: 'uppercase', marginBottom: '20px' }}>
          About Me
        </Typography>

        <Typography variant="body3" sx={{ marginBottom: '20px',  }}>
          Hello! I'm Katie, a software engineer with a passion for storytelling, creativity, and innovation.
        </Typography>

        <Typography variant="h3" component="h3" sx={{ marginBottom: '10px', color: '#415170' }}>
          My Journey
        </Typography>

        {/* <Typography variant="body3" sx={{ marginBottom: '20px', }}>
          I graduated in 2024 from the University of Texas at Austin with a B.S. in Radio-Television-Film and a certificate in creative writing. My love for storytelling led me to write several novels and screenplays, even winning an award with Austin's chapter of SCBWI.

          After my undergrad, I moved to Los Angeles to pursue an MFA in Writing and Producing for Television from Loyola Marymount University. There, I honed my skills in film and television development, produced a short film, and immersed myself in writing. I also taught myself Adobe's entire suite of tools, diving deep into editing and music curation.
        </Typography> */}
        <Typography variant="body3" sx={{ marginBottom: '20px' }}>
        I graduated in 2024 from the University of Texas at Austin with a B.S. in Radio-Television-Film and a certificate in creative writing. My love for storytelling led me to write several novels and screenplays, even winning an award with Austin's chapter of SCBWI. After undergrad, I moved to Los Angeles to pursue an MFA in Writing and Producing for Television from Loyola Marymount University. There, I honed my skills in film and television development, produced a short film, and immersed myself in writing. I also taught myself Adobe's entire suite of tools, diving deep into editing and music curation.
        </Typography>


        <Typography variant="h3" component="h3" sx={{ marginBottom: '10px', color: '#415170' }}>
          The Pivot to Tech
        </Typography>

        <Typography variant="body3" sx={{ marginBottom: '20px', }}>
          As I worked in UX and copywriting, crafting knowledge bases, social media campaigns, and UI/UX copy for website overhauls, I found myself increasingly curious about the technical side of things. This curiosity led me to take a leap into software engineering in 2023, enrolling at Springboard to expand my skillset.
        </Typography>

        <Typography variant="h3" component="h3" sx={{ marginBottom: '10px', color: '#415170' }}>
          Where I Am Now
        </Typography>

        <Typography variant="body3" sx={{ marginBottom: '20px', }}>
          Today, I'm fluent in Python, JavaScript, ReactJS, and much more. I've combined my background in writing and film with my newfound passion for coding to create web apps that make the world a more beautiful and creative place. For the same reasons I fell in love with cinema, I've fallen in love with coding—it gives me a chance to innovate, tell a story, and share my mind with the world.
        </Typography>

        <Typography variant="h3" component="h3" sx={{ marginBottom: '10px', color: '#415170' }}>
          My Projects
        </Typography>

        <Typography variant="body3" sx={{ marginBottom: '20px', }}>
          My portfolio showcases several projects that encapsulate who I am and what I'm passionate about:
        </Typography>

        <ul>
          <Typography component="li" variant="body3" >
            <strong>The Reel Draft</strong>: A React and Supabase-powered app that lets users 'draft' movies in a fantasy-league style competition.
          </Typography>
          <Typography component="li" variant="body3" >
            <strong>Clip Hits</strong>: A React-based web app using Spotify's API to curate playlists based on keywords.
          </Typography>
          <Typography component="li" variant="body3" >
            <strong>The Novel List</strong>: A comprehensive platform built with React and Node.js, connecting authors with agents and editors.
          </Typography>
        </ul>

        <Typography variant="h3" component="h3" sx={{ marginBottom: '10px', marginTop: '20px', color: '#415170' }}>
          More About Me
        </Typography>

        <Typography variant="body3" sx={{ marginBottom: '20px', }}>
          Raised across various counties in Texas, I've always dreamed of community coffee shops, quick-witted friends, and a constantly stimulated imagination. I found all three on the East Side of Austin, where my characters were born from the artists, musicians, novelists, and poets I met.

          I write and speak at a dizzying WPM (thanks, Lorelai Gilmore and Joshua Lyman!), often with LCD Soundsystem or R.E.M. as my soundtrack. 

          I'm excited to bring my unique blend of creativity and technical skills to the world of software engineering. Let's build something amazing together!
        </Typography>
      </Box>
    </ThemeProvider>
  );
};

export default AboutMe;
