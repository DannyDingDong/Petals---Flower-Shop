import "../App.scss";
import { Link } from "react-router-dom";
import sunflower from "../Assets/img/SunflowerMain.png";
import aboutFlower from "../Assets/img/aboutFlower.png";
import { BsChevronDown, BsFlower1, BsCalendarWeekFill } from "react-icons/bs";

function Homepage() {
  return (
    <div className="home-body">
      <section className="landing-page">
        <div className="container">
          <div className="lp-center">
            <img src={sunflower} alt="" />
            <h1>PETALS</h1>
            <h4>EST 1932</h4>
          </div>
          <div className="lp-learn-more">
            <a href="#about">
              <p>LEARN MORE</p>
              <BsChevronDown />
            </a>
          </div>
        </div>
      </section>
      <section className="about-us" id="about">
        <div className="container">
          <div className="about-row">
            <div className="about-col about-title-col">
              <h3>ABOUT</h3>
              <img classname="about-flower-img" src={aboutFlower} alt="" />
            </div>
            <div className="about-col about-info-col">
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec,
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="card-section">
        <div className="container">
          <div className="card-row">
            <div className="card-col">
              <div className="card">
                <BsFlower1 />
                <h3>BUY 1 PLANT 2</h3>
                <p>
                  For every one flower you purchase we plant two. To Help grow
                  the environemnt.
                </p>
              </div>
            </div>
            <div className="card-col">
              <div className="card">
                <BsCalendarWeekFill />
                <h3>BEST TIME FOR YOU</h3>
                <p>
                  Choose the date and time you’d like your flowers to arrive and
                  we'll deliver.
                </p>
              </div>
            </div>
            <div className="card-col">
              <div className="card">
                <BsFlower1 />
                <h3>WELL PROTECTED</h3>
                <p>
                  We use state of the art packaging to ensure your flowers do
                  not get damaged.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gift-section">
        <h2 className="gift-title">FLOWERS</h2>
        <div className="gift-section-bg">
          <div className="container">
            <div className="gift-wrapper">
              <h1>GET THE PERFECT GIFT</h1>
              <Link to="/Shop">VIEW ALL</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
