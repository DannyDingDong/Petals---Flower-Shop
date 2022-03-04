import "../App.scss";
// import flowerImg from "../Assets/img/contactFlower.jpg";
import ContactForm from "../Components/ContactForm";

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
        <ContactForm />
      </div>
    </div>
  );
}

export default Contactpage;
