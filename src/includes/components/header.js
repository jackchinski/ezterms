import NavBar from "./navBar";
import { Link } from "react-router-dom";

import "../css/header.css";
import "../../App.css";

import logo from "../../assets/logo-01.png";


const Header = () => {
  return (
      <>
      <header>
        <div className="nav-container inner-container">
          <div className="logo-container">
              <Link className="img-link" to="/">
                  <img src={logo} alt="Easy Terms logo" width="60px"/>
              </Link>
          </div>
          <NavBar />
        </div>
      </header>
    </>
  );
};

export default Header;
