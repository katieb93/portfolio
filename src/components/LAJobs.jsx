import React from 'react';
import Val1 from '/Users/katiebrown/portfolio-site/src/assets/val 1.png';
import SkyboundLogo from '/Users/katiebrown/portfolio-site/src/assets/Skybound_Entertainment_Logo 1.png';
import AmazonStudiosLogo from '/Users/katiebrown/portfolio-site/src/assets/Amazon_Studios_logo.svg 1.png';
import UniversalLogo from '/Users/katiebrown/portfolio-site/src/assets/Universal_Content_Productions.svg 1.png';

const LAJobs = () => {
  return (
    <div style={{ width: '100vw', height: '20vw', position: 'relative', background: '#FFF6EF', display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
      <img
        style={{
          maxWidth: '20%',
          maxHeight: '100%',
          height: 'auto',
          boxShadow: '-5px 5px 0px #FFF6EF',
        }}
        src={Val1}
        alt="Val 1"
      />
      <img
        style={{
          maxWidth: '25%',
          maxHeight: '100%',
          height: 'auto',
          boxShadow: '-5px 5px 0px #FFF6EF',
        }}
        src={SkyboundLogo}
        alt="Skybound Entertainment Logo"
      />
      <img
        style={{
          maxWidth: '20%',
          maxHeight: '100%',
          height: 'auto',
          boxShadow: '-5px 5px 0px #FFF6EF',
        }}
        src={AmazonStudiosLogo}
        alt="Amazon Studios Logo"
      />
      <img
        style={{
          maxWidth: '15%',
          maxHeight: '100%',
          height: 'auto',
          boxShadow: '-5px 5px 0px #FFF6EF',
        }}
        src={UniversalLogo}
        alt="Universal Content Productions Logo"
      />
    </div>
  );
};

export default LAJobs;
