import React from 'react'
import './projects.css'
import Project1 from "../../assets/sacco.png"
import Project2 from "../../assets/shopping.png"
import Project3 from "../../assets/church.jpg"
const Projects = () => {
  return (
    <section class="projects">
    <h2>My Software Projects</h2>
    <div class="project-container">
      <article class="project">
        <img src={Project1} alt="Project 1 "/>
        <h3>Sacco App</h3>
        <p>A brief description of Project 1. It's a cool project that does something awesome.</p>
        <a href="https://github.com/yourusername/project1" class="project-link">View on Github</a>
      </article>
      <article class="project">
        <img src={Project2} alt="Project 2 "/>
        <h3>Shopping Website</h3>
        <p>A brief description of Project 2. This project focuses on solving a specific problem.</p>
        <a href="https://github.com/yourusername/project2" class="project-link">View on Github</a>
      </article>
      <article class="project">
        <img src={Project3} alt="Project 3 "/>
        <h3>Church Website</h3>
        <p>A brief description of Project 3. This one is my latest and greatest project!</p>
        <a href="https://github.com/yourusername/project3" class="project-link">View on Github</a>
      </article>
    </div>
  </section>
  )
}

export default Projects