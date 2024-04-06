import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        {location.pathname === "/" && (
          <li><AnchorLink href="#SupportedPlatforms">Supported Platforms</AnchorLink></li>
        )}
        <li><Link to="/paste-tos">Paste TOS</Link></li>
        <li><Link to="/request">Request</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
