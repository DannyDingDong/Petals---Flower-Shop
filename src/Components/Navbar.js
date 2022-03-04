import "../App.scss";
import "../App.scss";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../Assets/img/petalsLogo.svg";
function Navbar(props) {
  const { countCartItems } = props;
  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <div className="left-nav">
            <img src={logo} alt="" />
          </div>
          <div className="center-nav">
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
            <AiOutlineHeart />
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
