export default function Home() {
  return (
    <>
        
            {/* <!--Start Home Section--> */}

            <section className="home" id="home">
                <div className="home-content-wrapper">
                    <div className="content-content">
                        <div className="home-content">
                            <h1>Hello <span>,</span></h1>
                            <h2>It's <span>Baxolise Lingani.</span></h2>
                            <p>I'm a <span>Juniour Software Developer</span></p>
            
                            <div className="buttons">
                                <a href="Resume/Baxolise Lingani Resume.docx"><button className="hireMeButton">Hire Me</button></a> 
                                <a href="#portfolio"><button className="portfolioButton">Portfolio</button></a>
                            </div>
                            <a href="#about">
                                <div className="scroll-down"></div>
                            </a>
                        </div>
                    </div>
                    <div className="image-container">
                        <img src="/images/home_image-removebg-preview.png" alt="Home Image"/>
                    </div>
                </div>
            </section>
        
    </>
  )
}
