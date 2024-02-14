export default function Home() {
  return (
    <main>
        <div class="container">
            {/* <!--Start Home Section--> */}

            <section class="home" id="home">
                <div class="content-content">
                    <div class="home-content">
                        <h1>Hello <span>,</span></h1>
                        <h2>It's <span>Baxolise Lingani.</span></h2>
                        <p>I'm a <span>Juniour Software Developer</span></p>
            
                        <div class="buttons">
                            <button class="hireMeButton">Hire Me</button>
                            <button class="portfolioButton">Portfolio</button>
                        </div>
                        <a href="#about">
                            <div class="scroll-down"></div>
                        </a>
                    </div>
    
                    <div class="image-container">
                        <img src="/src/assets/images/home_image-removebg-preview.png" alt="Home Image"/>
                    </div>
                </div>
            </section>
        </div>
    </main>
  )
}
