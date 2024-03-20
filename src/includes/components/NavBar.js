import React from 'react';
import { Link } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {/* Need to fix this link, it should take to hoepage and then the supported Platforms */}
        <li><AnchorLink href="#SupportedPlatforms">Supported Platforms</AnchorLink></li>
        <li><Link to="/paste-tos">Paste TOS</Link></li>
        <li><Link to="/request">Request</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;