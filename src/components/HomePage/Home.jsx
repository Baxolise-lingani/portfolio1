export default function Home() {
  return (
    <>
        <div className="container">
            {/* <!--Start Home Section--> */}

            <section className="home" id="home">
                <div className="content-content">
                    <div className="home-content">
                        <h1>Hello <span>,</span></h1>
                        <h2>It's <span>Baxolise Lingani.</span></h2>
                        <p>I'm a <span>Juniour Software Developer</span></p>
            
                        <div className="buttons">
                            <button className="hireMeButton">Hire Me</button>
                            <button className="portfolioButton">Portfolio</button>
                        </div>
                        <a href="#about">
                            <div className="scroll-down"></div>
                        </a>
                    </div>
    
                    <div className="image-container">
                        <img src="/src/assets/images/home_image-removebg-preview.png" alt="Home Image"/>
                    </div>
                </div>
            </section>
        </div>
    </>
  )
}
