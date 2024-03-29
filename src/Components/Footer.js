import React from 'react';
import logo from '../Assets/logo.png'; // Import the logo here

const Footer = () => {
  // Function to handle scrolling to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling behavior
    });
  };

  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="flex justify-between items-center">
        <div className="w-1/6">
          <img
            className="h-24 w-auto relative"
            src={logo} // Use the imported logo here
            alt="Your Company"
          />
        </div>
        
          {/* Centering the button */}
          <div className="flex justify-center items-center"> 
            {/* Back to top button */}
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50" onClick={scrollToTop}>
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Back To Top
              </span>
            </button>
          </div>
          
        </div>
        <div className="mt-4 flex justify-center"> {/* Adding margin top to separate text */}
            <p>&copy; 2023 My Website. All rights reserved.</p>
            <p>Designed and developed by Me</p>
          </div>
    </footer>
  );
};

export default Footer;
