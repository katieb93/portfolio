import React from 'react';
import ArtkiveCoupons from '../assets/artkive-coupons.png';
import HelperBeesLogo from '../assets/helperbees_logo_trimmed.png';
import Euzn0oH8 from '../assets/euzn0oH8_400x400.png';

const AustinJobs = () => {
  return (
    <div style={{ width: '100%', height: '20vw', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', background: '#FFF6EF' }}>
      <img
        style={{
          maxWidth: '20%', // Ensure the image does not exceed 20% of the parent width
          maxHeight: '100%', // Ensure the image does not exceed the parent height
          height: 'auto',    // Maintain aspect ratio
        }}
        src={ArtkiveCoupons}
        alt="Artkive Coupons"
      />
      <img
        style={{
          maxWidth: '25%', // Ensure the image does not exceed 25% of the parent width
          maxHeight: '100%', // Ensure the image does not exceed the parent height
          height: 'auto',    // Maintain aspect ratio
        }}
        src={HelperBeesLogo}
        alt="Helper Bees Logo"
      />
      <img
        style={{
          maxWidth: '30%', // Ensure the image does not exceed 30% of the parent width
          maxHeight: '100%', // Ensure the image does not exceed the parent height
          height: 'auto',    // Maintain aspect ratio
        }}
        src={Euzn0oH8}
        alt="Euzn0oH8 Logo"
      />
    </div>
  );
};

export default AustinJobs;
