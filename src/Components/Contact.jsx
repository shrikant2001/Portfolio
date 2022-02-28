import React from 'react'
import '../Styles/Contact.scss'

const Contact = () => {
  return (
    <div className='main-contact' id='contact'>
      <div className='main-contact-container'>
        <div className='title display-2'>CONTACT ME</div>

        <div className="msg-socials">
        <div className="msg-container">
          <div className="enter enter-name"><input className='inputs' type="text" placeholder='Name' /></div>
          <div className="enter enter-name"><input className='inputs' type="text" placeholder='xyz@abc.com' /></div>
          <div className="enter enter-msg"><textarea className='inputs' placeholder="your message" id="" rows="10"></textarea></div>
        </div>
        <div className="empty-container">
          
        </div>
        <div className="social-container">
          <div className="display-6 text-center"> <b>Socials</b> </div>
          <div className="social-box">
            <div className='social-detail'>
              <img className='icon' src="https://img.icons8.com/stickers/400/000000/linkedin.png"/>
              <a href="https://www.linkedin.com/in/shrikant-jadhav-21a3b1201/">Linkedin </a>
            </div>

            <div className='social-detail'>
              <img className='icon' src="https://img.icons8.com/stickers/400/000000/whatsapp.png"/>
              <a href="https://wa.me/919021699924">Whatsapp </a>
            </div>
            
            <div className='social-detail'>
              <img className='icon' src="https://img.icons8.com/stickers/400/000000/twitter-squared.png"/>
              <a href="https://twitter.com/The_real_shri">Twitter </a>
            </div>

            <div className='social-detail'>
            <img className='icon' src="https://img.icons8.com/stickers/400/000000/instagram-new--v2.png"/>
              <a href="https://www.instagram.com/shrickant/">Instagram </a>
            </div>
          </div>
        </div>
        </div>
        

        
      </div>
    </div>
  )
}

export default Contact