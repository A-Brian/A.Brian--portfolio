import React from 'react'
import "../../index.css"// Optional for custom Tailwind components
import'./contact.css'
import Walmart from "../../assets/walmart.png"
import Adobe from "../../assets/adobe.png"
import Microsoft from "../../assets/microsoft.png"
import Facebook from "../../assets/fb.jpg"
import Twitter from "../../assets/twitter.png"
import Instagram from "../../assets/instagram.png"
import Youtube from "../../assets/youtube.jpg"
const Contact = () => {
  return (
   <section className='contactPage'>
    <div className='clients'>
        <h1 className='contactPageTitle'>
            My Clients
        </h1>
        <p className='clientDesc'>
           I have had an opportunity to work with a diverse group of companies.
           Some of the notable companies I have worked with include. 
        </p>
        <div className='clientImgs'>
            <img src={Walmart} alt='Client' className='clientImg'/>
            <img src={Adobe} alt='Client' className='clientImg'/>
            <img src={Microsoft} alt='Client' className='clientImg'/>
            
        </div>
    </div>
    <div id='contact'></div>
    <h1 className='contactPageTitle'>Contact Me</h1>
    <span className='contactDesc'>Please fill out the form below to discuss any work opportunity</span>
  <form className='contactForm'>
    <input type='text' className='name' placeholder='Your Name'/>
    <input type='text' className='email' placeholder='Your Email'/>
    <textarea className='msg' name='message' rows={5} placeholder='Your Message'></textarea>
    <button type='submit' className='submitBtn' value='Send'>Submit</button>
    <div className='links'>
        <img src={Facebook } alt='facebook' className='link'/>
        <img src={Twitter} alt='twitter' className='link'/>
        <img src={Instagram} alt='instagram' className='link'/>
        <img src={Youtube} alt='youtube' className='link'/>
    </div>
  </form>
  
   </section>
  )
}

export default Contact