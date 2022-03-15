import React from "react";
import flowerImg from "../Assets/img/contactFlower.jpg";
import emailjs from "emailjs-com";
import { useState } from "react";
const ContactForm = () => {
  const [submitted, setSubmitted] = useState(true);
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_y8fkstf",
        "template_f1q77wf",
        e.target,
        "5uFW0jhnCtWV0T2tu"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSubmitted(false);
  }
  return (
    <div className="contact-form">
      <div className="side-img">
        <img src={flowerImg} alt="" />
      </div>
      {submitted ? (
        <form onSubmit={sendEmail}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name..."
            required
          ></input>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Email..."
            required
          ></input>
          <textarea
            id="message"
            name="message"
            placeholder="Message..."
            required
          ></textarea>
          <input type="submit" value="SUBMIT"></input>
        </form>
      ) : (
        <div className="onSubmitMessage">Thanks for emailing.</div>
      )}
    </div>
  );
};

export default ContactForm;
