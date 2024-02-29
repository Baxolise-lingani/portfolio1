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

                <a href="#" className='menu-button' onclick={showSidebar()}><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/></svg></a>
            </nav>
          

            {/* Mobile Menu */}
          <div className="sidebar">
            <a href="#" onClick={hideSidebar()}><svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg></a>
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