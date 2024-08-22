import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, CssBaseline, useMediaQuery } from '@mui/material';

import theme from './theme';
import NavBar from './components/Navbar';
import Footer from './Footer';

import Homepage from './Homepage';
import ResumeComponent from './Resume';
import Portfolio from './Portfolio';
import PortfolioMobile from './PortfolioMobile';
import AboutMe from './AboutMe';


function App() {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Footer />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route 
            path="/Portfolio" 
            element={isMobile ? <PortfolioMobile /> : <Portfolio />} 
          />
          {/* <Route path="/Portfolio" element={<Portfolio />} /> */}
          <Route path="/resume" element={<ResumeComponent />} />
          <Route path="/AboutMe" element={<AboutMe />} />

        </Routes>

      </Router>
    </ThemeProvider>
  );
}

export default App;
