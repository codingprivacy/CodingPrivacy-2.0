import './style.scss';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import menu from './MenuList';
import logo from './assets/images/logo.png';

const NavBar = () => {
  const [hamburgerClick, setHamburgerClick] = useState(false);
  const handleHambuger = () => setHamburgerClick(!hamburgerClick);
  const closeSidebar = () => setHamburgerClick(false);
  return (
    <nav className="navbar">
      <div className="logo-wrapper">
        <img src={logo} alt="logo" />
      </div>
      <div className="hamburger-icon" onClick={handleHambuger} role="none">
        { hamburgerClick ? <FaTimes /> : <FaBars /> }
      </div>
      <ul className={hamburgerClick ? 'nav-menu active' : 'nav-menu'}>
        {menu.map((item) => (<NavLink className="nav-link" to={item.url} exact={item.exact} activeClassName="nav-link-active" onClick={closeSidebar}>{item.name}</NavLink>))}
      </ul>
      <div className={hamburgerClick ? 'btn-menu active' : 'btn-menu'}>
        <button type="button">Pull Request</button>
        <button type="button">Log In</button>
      </div>
    </nav>
  );
};

export default NavBar;
