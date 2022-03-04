import "../App.scss";
import "../App.scss";
import { BrowserRouter, Link } from "react-router-dom";
import logo from "../Assets/img/petalsLogo.svg";

function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="container">
          <div className="ft-row">
            <div className="ft-col">
              <ul>
                <li>HELP AND INFORMATION</li>
                <li>Help</li>
                <li>Track order</li>
                <li>Delivery & returns</li>
              </ul>
            </div>
            <div className="ft-col">
              <ul>
                <li>ABOUT FLOWER PART</li>
                <li>About us</li>
                <li>Careers</li>
                <li>Security</li>
              </ul>
            </div>
            <div className="ft-col">
              <ul>
                <li>SOCIALS</li>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Tiktok</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-footer">
        <div className="container">
          <div className="ft-content-wrapper">
            <h2>© 2022 PETALS</h2>
            <ul>
              <li>Privacy & cookies</li>
              <li>Ts&Cs</li>
              <li>Accessibility</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
