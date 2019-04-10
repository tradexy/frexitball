// nav bar of website, include UK and EU as emojis to be seen in mobile phones.
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="nav">
    <h2 className="logo"><NavLink className="logo-link" exact to="/">
    UK vs EU Football 2019 - 🇬🇧⚽🇪🇺</NavLink></h2>
    <ul className="nav-menu">
        <li><NavLink className="nav-menu__link" exact to="/">Home</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/aaas">United Kingdom</NavLink></li>
        <li><NavLink className="nav-menu__link" to="/bbbs">European Union</NavLink></li>  
        <li><NavLink className="nav-menu__link" to="/cccs">Cities and Stadia</NavLink></li>   
    </ul>
  </div>
);

export default Navbar;