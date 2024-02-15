// TODO: focusing on Portfolio section
function Portfolio() {
  return (
    <>
     <section class="portfolio">
        <h3 class="head">Portfolio</h3>
        <div class="portfolio-nav">
            <a href="#">All</a>
            <a href="#">Website</a>
            <a href="#">Application</a>
            <a href="#">Personal Website</a>
        </div>
        <div class="project-box">
            <img src="project1.jpg" alt="Project 1" class="project-image"/>
            <div class="project-details">
                <div class="project-title">Project 1</div>
                <div class="project-links">
                    <a href="#">Live Demo</a>
                    <a href="#">GitHub</a>
                </div>
            </div>
        </div>
        <div class="project-box">
            <img src="project2.jpg" alt="Project 2" class="project-image"/>
            <div class="project-details">
                <div class="project-title">Project 2</div>
                <div class="project-links">
                    <a href="#">Live Demo</a>
                    <a href="#">GitHub</a>
                </div>
            </div>
        </div>
       
    </section>

    </>
  )
}
