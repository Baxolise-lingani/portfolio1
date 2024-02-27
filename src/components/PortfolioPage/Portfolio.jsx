import React, { useState } from 'react';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'Bakery',
      category: 'website',
      image: './src/assets/Images/bakery.jpg',
      links: {
        external: 'https://stupendous-peony-023e04.netlify.app',
        github: 'https://github.com/Baxolise-lingani/Snesh-s-Bakery',
      },
    },
    {
      title: 'C Bank',
      category: 'application',
      image: './src/assets/Images/bank app.png',
      links: {
        github: 'https://github.com/Baxolise-lingani/bank-app',
      },
    },
    {
      title: 'Personal Website',
      category: 'personal-website',
      image: './src/assets/Images/Personal website.jpg',
      links: {
        external: 'https://cozy-khapse-b3af1e.netlify.app',
        github: 'https://github.com/Baxolise-lingani/Personal-portfolio',
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
