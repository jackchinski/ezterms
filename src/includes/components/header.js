import NavBar from "./navBar";
import { Link } from "react-router-dom";

import "../css/header.css";
import "../../App.css";

import logo from "../../assets/updated-logo.png";


const Header = () => {
  return (
      <>
      <header>
        <div className="nav-container inner-container">
          <div className="logo-container">
              <Link className="img-link" to="/">
                  <img src={logo} alt="Easy Terms logo" width="60px"/>
              </Link>
              <h1>Ez Terms</h1>
          </div>
          <NavBar />
        </div>
      </header>
    </>
  );
};

export default Header;
