import React from "react";
import flowerImg from "../Assets/img/contactFlower.jpg";
const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="side-img">
        <img src={flowerImg} alt="" />
      </div>
      {/* <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
        // data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        {/* <input class="d-none" name="bot-field" /> */}
      {/* <input type="text" id="name" name="name" placeholder="Name..."></input>
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
        <input type="submit" value="SUBMIT"></input>
      </form> */}

      <form
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1" />
        <input type="text" name="first-name" />
        <input type="email" name="email" />
        <textarea name="comments" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
