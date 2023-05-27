import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import YT from "../imgs/YT.png";
import Insta from "../imgs/insta.png";
import LinkedIn from "../imgs/linkedin.png";
import GitHUB from "../imgs/gt.png";
import HTML from "../imgs/html.png";
import CSS from "../imgs/css.png";
import JS from "../imgs/js.png";
import REACT from "../imgs/react.png";
import "./contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm
      // "service_oljn48a",
      // "template_yth79lb",
      // form.current,
      // "HUbS_osSYpV5rW042"
      ()
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("Email sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("There is an ERROR!");
        }
      );
  };

  return (
    <div className="contact-skills" id="skills">
      <h3 className="title-skills">Skills</h3>
      <div className="skills">
        <div className="html">
          <img src={HTML} alt="html" />
        </div>
        <div className="css">
          <img src={CSS} alt="css" />
        </div>
        <div className="javascript">
          <img src={JS} alt="javascript" />
        </div>
        <div className="react">
          <img src={REACT} alt="react" />
        </div>
      </div>

      <div className="links" id="contact">
        <li className="social">
          <a href="https://www.youtube.com/channel/UC7oTYwf-cd89kp49ME7U28Q">
            <img src={YT} />
          </a>
        </li>
        <li className="social">
          <a href="https://www.instagram.com/dean_mustafa_">
            <img src={Insta} />
          </a>
        </li>
        <li className="social">
          <a href="https://www.linkedin.com/in/fakhriddin-mustafaev-855a46225/">
            <img src={LinkedIn} />
          </a>
        </li>
        <li className="social">
          <a href="https://github.com/DeanMustafa">
            <img className="LN" src={GitHUB} />
          </a>
        </li>
      </div>
      
      <form className="contact-me" ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input
          className="input"
          type="text"
          name="user_name"
          placeholder="Ex. Fakhriddin Mustafaev"
        />
        <label>Email</label>
        <input
          className="input"
          type="email"
          name="user_email"
          placeholder="Ex. dean.mustafa21@gmail.com"
        />
        <label>Message</label>
        <textarea
          name="message"
          placeholder="Send me a message (you can resize this form from right bottom corner)"
        />
        <input className="submit" type="submit" value="Send" />
      </form>
    </div>
  );
}

export default Contact;
