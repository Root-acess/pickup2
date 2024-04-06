import React from 'react'
//import '../login/login.css';


const Resister = () => {
  return (
    <div id="form-ui">
      <form action="" method="post" id="form">
        <div id="form-body">
          <div id="welcome-lines">
            <div id="welcome-line-1">Sign Up</div>
            <div id="welcome-line-2">Join Us Today!</div>
          </div>
          <div id="input-area">
            <div class="form-inp">
              <input placeholder="Full Name" type="text" />
            </div>
            <div class="form-inp">
              <input placeholder="Email Address" type="text" />
            </div>
            <div class="form-inp">
              <input placeholder="Password" type="password" />
            </div>
            <div class="form-inp">
              <input placeholder="Confirm Password" type="password" />
            </div>
          </div>
          <div id="submit-button-cvr">
            <button id="submit-button" type="submit">Sign Up</button>
          </div>
          
          <div id="bar"></div>
        </div>
      </form>
    </div>

  )
}

export default Resister;