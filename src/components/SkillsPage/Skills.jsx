
export default function Skills() {
  return (
    <section className="skills" id="skills">
        <div className="header-container">
              <h2 className="section-heading">Skills</h2>
        </div>
      <div className="container">
        <div className="skills-content">
          
          <div className="skills-img">
            <img src="/images/Skills-removebg-preview.png" alt="Skills Image" />
          </div>
          <div className="skills-details">
            <div className="skill-item">
              <h3>HTML-85%</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <h3>CSS-85%</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <h3>JavaScript-80%</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <h3>python-80%</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '80%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <h3>Java-70%</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <h3>Figma-75%</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '75%' }}></div>
              </div>
            </div>
            <div className="skill-item">
              <h3>Vite React.js-65%</h3>
              <div className="progress-bar-container">
                <div className="progress-bar" style={{ width: '65%' }}></div>
              </div>
            </div>
            {/* Add more skill items as needed */}
          </div>
        </div>
      </div>
    </section>
  )
}
