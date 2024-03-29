import React from 'react';
import '../Footer/Footer.css';

function footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <h4>Company</h4>
          <p>About us</p>
          <p>Our offerings</p>
          <p>Newsroom</p>
          <p>Investors</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>AI</p>
          <p>Gift Cards</p>
        </div>
        <div className="footer-section">
          <h4>Products</h4>
          <p>Ride</p>
          <p>Drive</p>
          <p>Deliver</p>
          <p>Eat</p>
          <p>Uber for business</p>
          <p>Uber Freight</p>
        </div>
        <div className="footer-section">
          <h4>Global citizenship</h4>
          <p>Safety</p>
          <p>Diversity and Inclusion</p>
          <p>Sustainability</p>
        </div>
        <div className="footer-section">
          <h4>Travel</h4>
          <p>Reserve</p>
          <p>Airports</p>
          <p>Cities</p>
        </div>
      </div>
      <div className="copyright">
        <p>
          Cloned by Akash
        </p>
      </div>
    </>
  )
}

export default footer;