import React from 'react';
import '../Footer/Footer.css';
import logo from '../../assets/Pick-Up_2.png'

function footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <img src= {logo} alt="" className='logo'/>
          <p>About us</p>
          <p>Hubs Nearby</p>
          <p>Contact</p>   
        </div>
        <div className="footer-section">
          <h4>Creadincial</h4>
          <p>Price</p>
          <p>Hubs</p>
          <p>Services</p>
          <p>Achivements</p>
          <p>Feedback</p>
          <p>Support</p>
        </div>
        <div className="footer-section">
          <h4>Suscription</h4>
          <p>Gold</p>
          <p> Platinium</p>
          <p>Dimond</p>
        </div>
        <div className="footer-section">
          <h4>Links</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Telegram</p>
        </div>
      </div>
      <div className="copyright">
        <p>
          Devloped by Akash
        </p>
      </div>
    </>
  )
}

export default footer;