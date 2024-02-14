
export default function NavBar() {
  return (
    <div>
        {/* <!-- Header --> */}
        <header>
            {/* <!-- Navigation --> */}
            <nav>
                <div id="left-links">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#work-experience">Work Experience</a>
                    <a href="#portfolio">Portfolio</a>
                </div>

                <div id="logo">
                    <a href="#home">Baxolise Lingani</a>
                </div>

                <div id="contact-links">
                    <a href="#message">Message</a>
                    <a href="#call">Call Me</a>
                </div>
            </nav>
            <i class='bx bx-menu' id="menu-icon"></i>
        </header>
    </div>
  )
}
