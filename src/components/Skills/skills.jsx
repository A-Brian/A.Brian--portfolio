import React from 'react'
import "./skills.css"
import UIDesign from "../../assets/ux.png"
import WebDesign from "../../assets/web.jpg"
import AppDesign from "../../assets/app.png"
const Skills = () => {
  return (
<section id='skills'>

    <span className='skillTitle'>What I do</span>
    <span className='skillDesc'>I am a skilled web designer with experience in creating <br/>visually appealing and user-friendly websites. I have a strong understanding of design and a keen eye on details. I am proeficient in HTML, CSS and Javascript.<br/> as well as design software such as Adobe photoshop and Illustrator.</span>
    <div className='skillBars'>
        <div className='skillBar'>
            <img src={UIDesign} alt='UIDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>UI/UX Design</h2>
                <p>I combine user research and design principles to create user-centered interfaces for websites and applications. I focus on both the usability and aesthetics of the product, ensuring a smooth and enjoyable user experience.</p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={WebDesign} alt='WebDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Web Design</h2>
                <p>I have experience crafting user-friendly and visually appealing websites. I focus on creating layouts that are clear, functional, and responsive, ensuring a positive experience for visitors across all devices.</p>
            </div>
        </div>

        <div className='skillBar'>
            <img src={AppDesign} alt='AppDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>App Design</h2>
                <p>I bring mobile applications to life by designing intuitive and engaging user interfaces (UI) that prioritize user needs. I possess a strong understanding of user experience UX principles and leverage them to create smooth and efficient interactions for various platforms.</p>
            </div>
        </div>

    </div>

</section>
  )
}

export default Skills