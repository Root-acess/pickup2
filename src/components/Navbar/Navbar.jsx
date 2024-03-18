import React, { useState } from 'react';
import './Navbar.css';
import logoLight from '../../assets/Pick-Up_1.png';
import logoDark from '../../assets/Pick-Up_2.png';
import searchIconLight from '../../assets/search-w.png';
import searchIconDark from '../../assets/search-b.png';
import toggleDay from '../../assets/day.png';
import toggleNight from '../../assets/night.png';

const Navbar = ({ theme, setTheme }) => {
    const [isInputFocused, setInputFocused] = useState(false);

    const toggleMode = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    const handleInputFocus = () => {
        setInputFocused(true);
    };

    const handleInputBlur = () => {
        setInputFocused(false);
    };

    return (
        <div className={`navbar ${theme === 'dark' ? 'dark' : ''} ${isInputFocused ? 'blur-background' : ''}`}>
            <img src={theme === 'light' ? logoLight : logoDark} alt="" className='logo' />
            <ul>
                <li>Home</li>
                <li>HubsNearby</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className='search-box'>
                <input
                    type="text"
                    placeholder='Search'
                    onFocus={handleInputFocus}
                    onBlur={handleInputBlur}
                />
                <img src={theme === 'light' ? searchIconLight : searchIconDark} alt="" />
            </div>
            <img onClick={toggleMode} src={theme === 'light' ? toggleNight : toggleDay} alt="" className='toggle-icon' />
        </div>
    );
}

export default Navbar;
