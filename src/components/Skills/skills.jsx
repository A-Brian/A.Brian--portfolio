import React from 'react'
import "./skills.css"
import UIDesign from "../../assets/ux.png"
import WebDesign from "../../assets/web.jpg"
import AppDesign from "../../assets/app.png"
const Skills = () => {
  return (
<section className='skills'>
    <span className='skillTitle'>What I do</span>
    <span className='skillDesc'>I am a skilled web designer with experience in creating <br/>visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye on details. I am proeficient in HTML, CSS and Javascript.<br/> as well as design software such as Adobe photoshop and Illustrator.</span>
    <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>You can write your own content here.</p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Web Design</h2>
                <p>You can write your own content here.</p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>App Design</h2>
                <p>You can write your own content here.</p>
            </div>
        </div>

    </div>

</section>
  )
}

export default Skills