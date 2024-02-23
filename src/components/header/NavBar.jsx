import React, { useState } from 'react';

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
        {/* <!-- Header --> */}
        <header className={isMobileMenuOpen ? 'mobile-menu-open' : ''}>
            {/* <!-- Navigation --> */}
            <nav>
                <div id="left-links" className={isMobileMenuOpen ? 'mobile-hidden' : ''}>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#experience">Work Experience</a>
                    <a href="#portfolio">Portfolio</a>
                </div>

                <div id="logo">
                    <a href="#home">Baxolise Lingani</a>
                </div>

                <div id="contact-links">
                    <a href="#contact">Message</a>
                    <a href="#call">Call Me</a>
                </div>

                <i className='bx bx-menu' id="menu-icon" onClick={toggleMobileMenu}></i>
            </nav>
          

            {/* Mobile Menu */}
          <div className={`mobile-menu ${isMobileMenuOpen ? 'show' : ''}`}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Work Experience</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Message</a>
            <a href="#call">Call Me</a>
          </div>
        </header>
    </div>
  )
}