// Footer.js

import React, { useEffect, useState } from 'react';
import './Foot.css'; // Import your CSS file

const Footer1 = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`footer ${showFooter ? 'visible' :''}`}>
      <p>Order or developed by team
        @copyrights
      </p>
    </div>
  );
};

export default Footer1;
