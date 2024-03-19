import React from 'react';
import hero from '../../assets/hero.jpg'
import Button1 from '../../components/Buttons/Btn1'
import '../Home/Home.css'

export const Home = () => {
  return (
    <div>
      <section className='home' id='home' >
        <div className="Home_container">
          <div className="home_content">
            <p className="subtitle">pickup</p>
            <h1 className="title">Connect Globally, Deliver Locally</h1>
            <p className="text">Your Gateway to Seamless Postal Solutions</p>
          </div>
          <Button1  className='btn'/>
          <div className="img">
            <img src={hero} alt="hero section" />
          </div>
        </div>

      </section>
    </div>
  )
}


//anylised the code and wriite css to design this?