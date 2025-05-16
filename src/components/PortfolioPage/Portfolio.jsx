import React, { useState } from 'react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'Bakery',
      category: 'website',
      image: '/images/bakery.jpg',
      links: {
        external: 'https://stupendous-peony-023e04.netlify.app',
        github: 'https://github.com/Baxolise-lingani/Snesh-s-Bakery',
      },
    },
    {
      title: 'C Bank',
      category: 'application',
      image: '/images/bank app.png',
      links: {
        github: 'https://github.com/Baxolise-lingani/bank-app',
      },
    },
    {
      title: 'Personal Website',
      category: 'personal-website',
      image: '/images/Personal website.jpg',
      links: {
        external: 'https://cozy-khapse-b3af1e.netlify.app',
        github: 'https://github.com/Baxolise-lingani/Personal-portfolio',
      },
    },
    {
      title: 'Joke App',
      category: 'application',
      image: '/workspaces/portfolio1/public/images/joke.jpeg',
      links: {
        
        github: 'https://github.com/Baxolise-lingani/Jokes-App',
      },
    },
    {
      title: 'Simon Game',
      category: 'application', 
      image: '/workspaces/portfolio1/public/images/simongame.jpeg', 
      links: {
     		github: 'https://github.com/Baxolise-lingani/Simon-game-challeng', 
      }, 
      
    }, 
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);
  const containerStyles =
      selectedCategory !== 'all'
        ? {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }
        : {};

  return (
    <>
      <section className="portfolio" id="portfolio">
        <h3 className="head">
          Previous <span>Project</span>
        </h3>
        <div className="portfolio-nav">
          <a href="#portfolio" onClick={() => setSelectedCategory('all')} active>
            All
          </a>
          <a href="#portfolio" onClick={() => setSelectedCategory('website')}>
            Website
          </a>
          <a href="#portfolio" onClick={() => setSelectedCategory('application')}>
            Application
          </a>
          <a href="#portfolio" onClick={() => setSelectedCategory('personal-website')}>
            Personal Website
          </a>
        </div>
        <div className="project-container" style={containerStyles}>
          {filteredProjects.map((project, index) => (
            <div className="project-box" key={index}>
              <img
                src={project.image}
                alt={`Project ${index + 1}`}
                className="project-image"
              />
              <div className="project-details">
                <div className="project-title">{project.title}</div>
                <div className="project-links">
                  <a href={project.links.external}>
                    <i className="bx bx-link-external"></i>
                  </a>
                  <a href={project.links.github}>
                    <i className="bx bxl-github"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
