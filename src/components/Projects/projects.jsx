import React from 'react'
import './projects.css'
import Project1 from "../../assets/watch.jpg"
import Project2 from "../../assets/shopping.png"
import Project3 from "../../assets/church.jpg"
const Projects = () => {
  return (
    <section id="projects">
    <h2>My Software Projects</h2>
    <div class="project-container">
      <article class="project">
        <img src={Project1} alt="Project 1 "/>
        <h3>Vitals Monitoring System</h3>
        <p>I designed a mobile app (Sacco) to empower cooperative members by streamlining financial management.</p>
        <a href="https://github.com/A-Brian/Vitals_Monitoring_System" class="project-link">View on Github</a>
      </article>
      <article class="project">
        <img src={Project2} alt="Project 2 "/>
        <h3>Shopping Website</h3>
        <p>I launched Online shopping, an e-commerce platform offering online purchase.</p>
        <a href="https://github.com/A-Brian/Online-shop_project" class="project-link">View on Github</a>
      </article>
       <article class="project">
        <img src={Project3} alt="Project 3 "/>
        <h3>Church Website</h3>
        <p>I designed a new website for a local church to create a welcoming online space for their community.</p>
        <a href="https://github.com/yourusername/project3" class="project-link">View on Github</a>
      </article> 
    </div>
  </section>
  )
}

export default Projects