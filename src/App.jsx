import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Home } from './components/Home/Home';
import HubsNearBy from './components/HubsNearBy/HubsNearBy';

export const ROUTES = {
  HOME: '/',
  HUBS: '/hubs'
}

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <div className={`container ${theme}`}>
      <Router>
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path={ROUTES.HOME} element={<Home/>}/>
          <Route path={ROUTES.HUBS} element={<HubsNearBy/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App