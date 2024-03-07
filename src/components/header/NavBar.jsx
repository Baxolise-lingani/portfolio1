export default function NavBar() {
 
  return (
    <div>
      <nav>
        <div className="logo">
          <a href="#home">Baxolise Lingani</a>
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Work Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Message</a></li>
          <li><a href="#call">Call Me</a></li>
        </ul>
      </nav>
    </div>
  );
}