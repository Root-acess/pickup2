import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import lightLogo from '../../assets/Pick-Up_1.png';
import darkLogo from '../../assets/Pick-Up_2.png';
import lightSearchIcon from '../../assets/search-w.png';
import darkSearchIcon from '../../assets/search-b.png';
import dayIcon from '../../assets/day.png';
import nightIcon from '../../assets/night.png';

const Navbar = ({ theme, setTheme }) => {
  const toggleMode = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return (
    <div className={`navbar ${theme === 'dark' ? 'dark' : ''}`}>
      <Link to="/">
        <img src={theme === 'light' ? lightLogo : darkLogo} alt="Logo" className="logo" />
      </Link>
      <ul>
        {navItems.map((item, index) => (
          <NavItem key={index} to={item.to} theme={theme}>
            {item.label}
          </NavItem>
        ))}
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={theme === 'light' ? lightSearchIcon : darkSearchIcon} alt="Search Icon" />
      </div>
      <img onClick={toggleMode} src={theme === 'light' ? nightIcon : dayIcon} alt="Toggle Icon" className="toggle-icon" />
    </div>
  );
};

const NavItem = ({ to, children, theme }) => (
  <li>
    <Link to={to} style={{ color: theme === 'dark' ? 'white' : 'black' }}>
      {children}
    </Link>
  </li>
);

const navItems = [
  { to: "/", label: "Home" },
  { to: "/hubs", label: "Hubs Nearby" },
  { to: "#", label: "About" },
  { to: "#", label: "Contact" },
];

export default Navbar;
