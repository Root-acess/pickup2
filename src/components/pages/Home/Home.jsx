import React from 'react'
import './Home.css'
import Btn1 from '../../../components/Buttons/Gstart'
import Btn2 from '../../../components/Buttons/Learnmore'
import hero1 from '../../../assets/banner1.png'
import hero2 from '../../../assets/hero.png'
import login from '../login/Login'


const Home = () => {
  return (
    <>
     <div className="Home_container">
          <div className="main-left">
            <h1>Send Your First Persel with Pick-up</h1>
            <br />
            <div className="main-btns">
            <a href={(login)}><Btn1 /></a> 
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
              <Btn2 />
            </div>
              
          </div>
        </div>

        <div className="ride-wrap">
          <div className="ride-left">
            <h1>Always the way you want</h1>
            <p>Request for you first experiance</p>
            <div className="location-wrap">
              <div className="location-flex">
                <input
                  type="text"
                  placeholder="Enter location"
                />
              </div>
            </div>
            <div className="loc-dest-line">
              <hr />
            </div>
            <div className="location-wrap">
              <div className="location-flex">
                <input
                  type="text"
                  placeholder="Enter destination"
                />
              </div>
            </div>

            <button className="prices-btn">See prices</button>
          </div>
          <div className="ride-right">
         <img src={hero2} alt="" />
          </div>
        </div>
    </>
  )
}

export default Home