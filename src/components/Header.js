import { Link } from "react-router-dom";
import { useState } from "react";
import mainlogo from "./homeAssets/Logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [isHamburgerMenuOpen, sethamburgerMenu] = useState(false);
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  function toggleHamburgerMenu() {
    sethamburgerMenu(!isHamburgerMenuOpen);
  }

  return (
    <>
      <nav className="laptopNavBar">
        <div className="container">
          <Link to="/" className="nav-item">
            <img src={mainlogo} alt="" />
          </Link>

          <ul className="leadtext">
            <li>
              <Link to="/" className="nav-item">
                Home
              </Link>
            </li>
            <li>
              <a href="/#about" onClick={handleClick("about")}>
                About
              </a>
            </li>
            <li>
              <a href="/#menu" onClick={handleClick("menu")}>
                Menu
              </a>
            </li>
            <li>
              <Link to="/booking/bookingform" className="nav-item">
                Reservation
              </Link>
            </li>
            <li>
              <a href="" className="button secondary buttontxt">
                Order Online
              </a>
            </li>
            <li>
              <a href="">Login</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav>
        <div className="mobileNavBar">
          <Link to="/" className="nav-item">
            <img src={mainlogo} alt="" />
          </Link>
          <div onClick={toggleHamburgerMenu} className="menuIcon">
            <FontAwesomeIcon icon={faBars} size="2xl" />
          </div>
        </div>
        {isHamburgerMenuOpen ? (
          <div className="hamburgerMenu">
            <ul className="leadtext">
              <li onClick={toggleHamburgerMenu}>
                <Link to="/" className="nav-item">
                  Home
                </Link>
              </li>
              <li onClick={toggleHamburgerMenu}>
                <a
                  href="/#about"
                  onClick={handleClick("about")}
                  className="nav-item"
                >
                  About
                </a>
              </li>
              <li onClick={toggleHamburgerMenu}>
                <a
                  href="/#menu"
                  onClick={handleClick("menu")}
                  className="nav-item"
                >
                  Menu
                </a>
              </li>
              <li onClick={toggleHamburgerMenu}>
                <Link to="/booking/bookingform" className="nav-item">
                  Reservation
                </Link>
              </li>
              <li onClick={toggleHamburgerMenu}>
                <a href="" className="button secondary buttontxt nav-item">
                  Order Online
                </a>
              </li>
              <li onClick={toggleHamburgerMenu}>
                <a href="" className="nav-item">
                  Login
                </a>
              </li>
            </ul>
          </div>
        ) : null}
      </nav>
    </>
  );
}
export default Header;
