import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home  from './components/pages/Home/Home';
import HubsNearBy from './components/HubsNearBy/HubsNearBy';
import Footer from './components/Footer/Footer';
import Login from './components/pages/login/Login';
import  SignUp from './components/pages/resister/Resister';

export const ROUTES = {
  HOME: '/',
  HUBS: '/hubs',
  LOGIN: '/login',
  SIGNUP: '/signup'
}

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`container ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />}/>
          <Route path={ROUTES.HUBS} element={<HubsNearBy />}/>
          <Route path={ROUTES.LOGIN} element={<Login />}/>
          <Route path={ROUTES.SIGNUP} element={<SignUp />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;
