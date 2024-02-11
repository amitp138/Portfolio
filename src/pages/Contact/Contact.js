import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
const Contact = () => {
  const [state, handleSubmit] = useForm("mbjnorqz");
  const navigate = useNavigate();
  useEffect(() => {
    if (state.succeeded) {
      alert("Mail sent successfully");
      navigate("/");
    }
  }, [state.succeeded, navigate]);
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>
      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">Don't be Shy !</h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>
          <div className="contact__info">
            <a href="mailto:amitpande1008@gmail.com" className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <span className="info__title">Mail me</span>
                <h4 className="info__desc">amitpande1008@gmail.com</h4>
              </div>
            </a>
            <a href="tel:+917666437162" className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 7666437162</h4>
              </div>
            </a>
          </div>
          <div className="contact__socials">
            <a
              href="https://www.linkedin.com/in/amit-pandey-006b28240/"
              target="_blank"
              rel="noreferrer"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/AmitPan1008"
              target="_blank"
              rel="noreferrer"
              className="contact__social-link"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/amitp138"
              target="_blank"
              rel="noreferrer"
              className="contact__social-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/amitpande1008/"
              target="_blank"
              rel="noreferrer"
              className="contact__social-link"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="form__control"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                name="subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
              id="message"
              name="message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="button" type="submit" disabled={state.submitting}>
            Send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
