import React from 'react'
import "./intro.css"
import bg from "../../assets/brian.jpg"
import {Link} from 'react-scroll';
import btnImg from '../../assets/bag.png'
const Intro = () => {
  return (
    <section className='intro'>
      <div className='introContent'>
      <span className='hello'>Hello,</span>
      <span className='introText'>I'm,
      <span className='introName'> Brian</span>
      <br/>Website designer
      </span>
      <p className='introPara'>I am a skilled web designer with experience in creating <br/>visually appealing and user-friendly websites.</p>
      <Link>
      <button className='btn'>
        <img src={btnImg} alt='' className='btnImg'/>Hire me
      </button>
      </Link>
      </div>
      <img src={bg} alt='' className='bg'/>
    </section>
  )
}

export default Intro