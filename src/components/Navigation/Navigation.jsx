import React, { useState } from 'react';

export default function Navigation() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  function showSidebar() {
    setSidebarVisible(true);
  }

  function hideSidebar() {
    setSidebarVisible(false);
  }

  return (
    <div>
      <nav>
        <ul className={`sidebar ${sidebarVisible ? 'visible' : ''}`}>
          <li onClick={hideSidebar}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                <path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
              </svg>
            </a>
          </li>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">work Experience</a></li>
          <li><a href="#">Portfolio</a></li>
        </ul>
        <div id="logo">
            <a href="#home">Baxolise Lingani</a>
        </div>
        <ul id="contact-links">
            <li><a href="#contact">Message</a></li>
            <li><a href="#call">Call Me</a></li>
        </ul>
        <ul>
          <li><a href="#">Coding2go</a></li>
          <li className="hideOnMobile"><a href="#">Home</a></li>
          <li className="hideOnMobile"><a href="#">About</a></li>
          <li className="hideOnMobile"><a href="#">Skills</a></li>
          <li className="hideOnMobile"><a href="#">Work Experience</a></li>
          <li className="hideOnMobile"><a href="#">Message</a></li>
          <li className="hideOnMobile"><a href="#">Call Me</a></li>
          <li className="menu-button" onClick={showSidebar}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 96 960 960" width="26">
                <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
