import "../App.scss";
import flowerImg from "../Assets/img/contactFlower.jpg";

function Contactpage() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-title">
          <h1>We’d Love to hear from you</h1>
          <p>
            Order by 3pm for flower delivery today. All flowers are hand-crafted
            by your local artisan florist and beautifully gift-wrapped in
            eco-friendly packaging.
          </p>
        </div>
        <div className="contact-form">
          <div className="side-img">
            <img src={flowerImg} alt="" />
          </div>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            onSubmit="submit"
            data-netlify-honeypot="bot-field"
          >
            <input class="d-none" name="bot-field" />
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name..."
            ></input>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email..."
            ></input>
            <textarea
              id="message"
              name="message"
              placeholder="Message..."
            ></textarea>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactpage;
