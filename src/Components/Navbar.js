import "../App.scss";
import "../App.scss";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../Assets/img/petalsLogo.svg";
import { useState } from "react";
function Navbar(props) {
  const { countCartItems } = props;
  const [isMobile, setIsMobile] = useState(false);
  const [isHamburgerActive, setHamburgerActive] = useState("false");

  const handleToggle = () => {
    setHamburgerActive(!isHamburgerActive);
  };

  return (
    <>
      <nav>
        <div className="mobileNav">
          <div className="mobile-nav-left">
            <GiHamburgerMenu onClick={() => handleToggle()} />
          </div>
          <div className="mobile-nav-middle">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="mobile-nav-right">
            <Link to="/Cart" className="cart-link">
              <AiOutlineShoppingCart />
              <div className="cartCounter">
                {countCartItems ? <span>{countCartItems}</span> : ""}
              </div>
            </Link>
          </div>
        </div>
        <div className="nav-wrapper">
          <div className="left-nav">
            <img src={logo} alt="" />
          </div>
          <div
            className={isHamburgerActive ? "center-nav" : "center-nav navShow"}
          >
            <ul className="nav-list">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Shop">Shop</Link>
              </li>
              <li>
                <Link to="/Contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="right-nav">
            <Link to="/Cart" className="cart-link">
              <AiOutlineShoppingCart />
              <div className="cartCounter">
                {countCartItems ? <span>{countCartItems}</span> : ""}
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
