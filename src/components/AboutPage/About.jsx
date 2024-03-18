export default function About() {
  return (
    <main>
      <section className="about" id="about">
        <div className="heading-container">
          <h2 className="heading">About <span>Me</span></h2>
        </div>
        <div className="about-img">
          <img src="/src/assets/About.jpg" alt=""/>
        </div>
        
        <div className="about-content">
        
          <h3> Junior Software Developer</h3>
          <p>I'm Baxolise, a passionate Software Developer with a background in Mathematical Science. My journey into the world of software development began with a deep curiosity about how mathematical principles and problem-solving skills could be applied to create innovative solutions in the digital realm.</p>
            <br />
            <br />
            <br />
          <p>I thrive on challenges and believe that every problem can be solved with the right approach and a dash of creativity. My mathematical modeling and data analysis skills have not only equipped me with a strong analytical mindset but also honed my ability to dissect complex problems and derive elegant solutions.</p>
  
          {/* <p>As a Junior Software Developer, I'm committed to continuous learning and improvement. I have a solid foundation in HTML, CSS, and JavaScript, and I'm constantly expanding my knowledge by exploring front-end and back-end technologies. I'm excited to collaborate on projects that require a holistic understanding of web development and a touch of mathematical precision.</p>
  
          <p>Let's connect and explore the endless possibilities of combining mathematical science with the art of Software Developer!</p>  */}
          <a href="#" className="btn">Read More</a>
        </div>

      </section>
    </main>
  );
}
