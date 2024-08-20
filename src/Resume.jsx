import React from 'react';
import { ThemeProvider, Box, Typography, Button } from '@mui/material';
import theme from './theme'; // Assuming the theme file is named theme.js and is in the same directory

const ResumeComponent = () => {
  const handleDownload = () => {
    const pdfUrl = 'https://raw.githubusercontent.com/katieb93/portfolio/main/src/assets/Tech.KB.Resume.2024.pdf';
    window.open(pdfUrl, '_blank');
  };

  return (
    <ThemeProvider theme={theme}>
      {/* <Box sx={{ padding: '100px 200px 50px 200px', backgroundColor: theme.palette.background.default }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h1" component="h1" sx={{ ...theme.typography.wsParadoseItalic, textTransform: 'uppercase', marginBottom: '20px' }}>

              Resume
          </Typography>
          <Button
              onClick={handleDownload}
              variant="contained"
              color="primary"
              sx={{ padding: '10px 20px', marginLeft: '50px', cursor: 'pointer', borderRadius: 0 }} // Adjust or remove marginLeft for desired spacing

              // sx={{ padding: '10px 20px', marginLeft: '50px', cursor: 'pointer' }} // Adjust or remove marginLeft for desired spacing
          >
              View/Download Resume (PDF)
          </Button>
        </Box> */}
      <Box sx={{ padding: '100px 200px 50px 200px', backgroundColor: theme.palette.background.default }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{ ...theme.typography.wsParadoseItalic, textTransform: 'uppercase'}}
          >
            Resume
          </Typography>
          {/* <Button
            onClick={handleDownload}
            variant="contained"
            color="primary"
            sx={{ padding: '10px 20px', cursor: 'pointer', borderRadius: 0, marginBottom: '30px'  }} // Removed marginLeft for vertical alignment
          >
            View/Download Resume (PDF)
          </Button> */}
          <Button
            onClick={handleDownload}
            variant="contained"
            color="primary"
            sx={{
              padding: '5px 10px',   // Smaller padding
              fontSize: '0.8rem',     // Smaller font size
              borderRadius: 0,
              marginBottom: '30px',
              minWidth: '150px',      // Optional: Set a minimum width if needed
            }}
          >
            Download Resume (PDF)
          </Button>
        </Box>
        <section>
          <Typography variant="h2" component="h2" sx={{ fontWeight: 500, marginBottom: '10px' }}>
            Software Skills
          </Typography>

          <Typography variant="body1">
            Coding languages | JavaScript, HTML, CSS, Python, C++, Flask, SQL, Node.js, Express, ReactJS, Redux, SQL, APIs, OSIs, POX Controller, ES6, GitHub
          </Typography>
        </section>

        <section>
          <Typography variant="h2" component="h2" sx={{ marginBottom: '10px', marginTop: '20px' }}>
            Experience
          </Typography>

          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h3" component="h3" sx={{ textTransform: 'uppercase', fontSize: '1.25rem', fontWeight: 700 }}>
              Backpack Group
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: theme.typography.roboto700.fontWeight }}>
              UX Content Developer | February 2022 to March 2023 | Austin, TX
            </Typography>
            <ul>
              <Typography component="li" variant="bulleted">Built and administered a proprietary knowledge base management system on a custom content management system (CMS) from inception, ensuring data integrity, scalability, and business continuity.</Typography>
              <Typography component="li" variant="bulleted">Spearheaded the implementation of company-wide writing guidelines, enforcing adherence to established patterns for style, voice, and tone across all content assets.</Typography>
              <Typography component="li" variant="bulleted">Conducted comprehensive user research and usability testing, leveraging internal stakeholder interviews and external user feedback to iteratively enhance the product's user experience.</Typography>
              <Typography component="li" variant="bulleted">Collaborated within an Agile product development framework, utilizing JIRA for project management and ticketing system integration.</Typography>
              <Typography component="li" variant="bulleted">Crafted content tailored to user emotional states while aligning with overarching business objectives, spanning pitches, internal marketing collateral, and video production.</Typography>
              <Typography component="li" variant="bulleted">Facilitated cross-functional coordination across multiple teams, leading self-directed projects from ideation to execution.</Typography>
              <Typography component="li" variant="bulleted">Led the creation and refinement of API documentation, ensuring clarity, accuracy, and consistency in technical communication across the organization.</Typography>
            </ul>
          </Box>

          {/* <Box sx={{ marginBottom: '20px' }}> */}
          <Box sx={{ marginBottom: '20px' }}>

            <Typography variant="h3" component="h3" sx={{ textTransform: 'uppercase', fontSize: '1.25rem', fontWeight: 700 }}>
              The Helper Bees
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: theme.typography.roboto700.fontWeight }}>
              Lifecycle Content Specialist | January 2021 to January 2022 | Austin, TX
            </Typography>
            <ul>
              <Typography component="li" variant="bulleted">Performed in-depth market research and analysis to identify emerging trends, consumer behaviors, and potential opportunities.</Typography>
              <Typography component="li" variant="bulleted">Developed and implemented HTML/CSS code for all web-based content assets.</Typography>
              <Typography component="li" variant="bulleted">Achieved a 3x increase in brand awareness and engagement metrics by leveraging data from various platforms, including Google Analytics and HubSpot, to maintain data integrity and optimize performance.</Typography>
              <Typography component="li" variant="bulleted">Managed and orchestrated automated email campaigns and drip sequences using MailChimp to streamline communication and nurture user engagement.</Typography>
              <Typography component="li" variant="bulleted">Spearheaded organic and paid social media efforts across multiple channels, implementing comprehensive campaign strategies.</Typography>
            </ul>
          </Box>

          <Box sx={{ marginBottom: '20px' }}>
            <Typography variant="h3" component="h3" sx={{ textTransform: 'uppercase', fontSize: '1.25rem', fontWeight: 700 }}>
              Artkive
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: theme.typography.roboto700.fontWeight }}>
              Marketing Project Manager | April 2020 to December 2020 | Los Angeles, CA
            </Typography>
            <ul>
              <Typography component="li" variant="bulleted">Managed marketing team projects adhering to Agile methodologies and best practices.</Typography>
              <Typography component="li" variant="bulleted">Authored copy for eCommerce platforms and print marketing collateral.</Typography>
              <Typography component="li" variant="bulleted">Designed, wrote, and executed email marketing campaigns and landing page content.</Typography>
              <Typography component="li" variant="bulleted">Collaborated cross-functionally with product and development teams to align user experience (UX) design and search engine optimization (SEO) strategies.</Typography>
            </ul>
          </Box>
        </section>

        <section>
          <Typography variant="h2" component="h2" sx={{ marginBottom: '10px', marginTop: '20px' }}>
            Education
          </Typography>

          <Box >
            <Typography variant="body1" sx={{ fontWeight: theme.typography.roboto500.fontWeight }}>
              Springboard | Software Engineering Training | Graduated: July 2024
            </Typography>
          </Box>

          <Box sx={{  }}>
            <Typography variant="body1" sx={{ fontWeight: theme.typography.roboto500.fontWeight }}>
              Loyola Marymount University | MFA Writing and Producing for TV | Graduated: May 2020
            </Typography>
          </Box>

          <Box>
            <Typography variant="body1" sx={{ fontWeight: theme.typography.roboto500.fontWeight }}>
              The University of Texas at Austin | BS Radio-Television-Film, Creative Writing | Graduated: June 2016
            </Typography>
          </Box>
        </section>


      </Box>
    </ThemeProvider>
  );
};

export default ResumeComponent;
