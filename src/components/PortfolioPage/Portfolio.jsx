// TODO: focusing on Portfolio section
export default function Portfolio() {
  return (
    <>
     <section className="portfolio" id="portfolio">
        <h3 className="head">Previous <span>Project</span></h3>
        <div className="portfolio-nav">
            <a href="#">All</a>
            <a href="#">Website</a>
            <a href="#">Application</a>
            <a href="#">Personal Website</a>
        </div>
        <div className="project-container">
            <div className="project-box">
                <img src="/src/assets/images/bakery.jpg" alt="Project 1" className="project-image"/>
                <div className="project-details">
                    <div className="project-title">Bakery</div>
                    <div className="project-links">
                        <a href="#"><i className='bx bx-link-external'></i></a>
                        <a href="#"><i className='bx bxl-github' ></i></a>
                    </div>
                </div>
            </div>
            <div className="project-box">
                <img src="/src/assets/images/bank app.png" alt="Project 2" className="project-image"/>
                <div className="project-details">
                    <div className="project-title">C Bank</div>
                    <div className="project-links">
                        <a href="#"><i className='bx bx-link-external'></i></a>
                        <a href="#"><i class='bx bxl-github' ></i></a>
                    </div>
                </div>
            </div>
            <div className="project-box">
                <img src="/src/assets/images/Personal website.jpg" alt="Project 3" className="project-image"/>
                <div className="project-details">
                    <div className="project-title">Personal Website</div>
                    <div className="project-links">
                        <a href="#"><i className='bx bx-link-external'></i></a>
                        <a href="#"><i className='bx bxl-github' ></i></a>
                    </div>
                </div>
            </div>
        </div>
       
    </section>

    </>
  )
}
