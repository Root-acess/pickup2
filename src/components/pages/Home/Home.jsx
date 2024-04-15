import React from 'react';
import './Home.css';
import Btn1 from '../../../components/Buttons/Gstart';
import Btn2 from '../../../components/Buttons/Learnmore';
import hero1 from '../../../assets/Develope.svg';
import hero2 from '../../../assets/rocket image.png';
import login from '../login/Login';

const Home = ({ theme }) => {
  return (
    <>
     <div className={`Home_container ${theme === 'dark' ? 'dark' : ''}`}>
          <div className="main-left">
            <h1>Send Your First Persel with Pick-up</h1>
            <br />
            <div className="main-btns">
            <a href={(login)}><Btn1 theme={theme} /></a> 
            </div>
          </div>
        </div>

        <div className="started-container">
          <div className="started-left">
           <img src={hero1} alt="" />
          </div>
          <div className="started-right">
            <h1>
              Fastest Delivery <br /> All Over <br /> India
            </h1>
            <p>
            we understand the significance of timely and efficient delivery services 
            tailored to meet your personal needs. Our platform is designed to provide you with 
            seamless access to a range of delivery options,ensuring that your parcels reach their 
            destination safely and promptly
            </p>
            <div className="learnmore">
              <Btn2 theme={theme} />
            </div>
          </div>
        </div>

        <div className="ride-wrap">
          <div className="ride-left">
            <h1>Always the way you want</h1>
            <p>Over 1k happy customers accross the India</p> 
            <p>Best user experiance ever</p>
            <button className="prices-btn">See prices</button>
          </div>
          <div className="ride-right">
            <img src={hero2} alt="" />
          </div>
        </div>
    </>
  )
}

export default Home;
