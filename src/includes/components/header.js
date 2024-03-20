import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import logo from "../assets/logo-01.png";

const Header = () => {
  return (
      <>
      <header>
        <div className="logo-container">
            <Link className="img-link" to="/">
                <img src={logo} alt="Easy Terms logo" width="50px"/>
            </Link>
        </div>
        <NavBar />
      </header>
    </>
  );
};

export default Header;
