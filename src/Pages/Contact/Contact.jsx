import React from "react";
import './Contact.css'
import { AiFillGithub,AiFillLinkedin } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import Header from "../../components/Header/Header";

function Contact () {
  return(
    <section id="contact">
      <Header/>
      <div className="contact-container">
        <h1 className="title-about">FIND ME ON</h1>
        <p className="subtitle">feel free to connect with me</p>
        <div className="social-container">
          <ul className="social-link">
            <li className="social-icons">
              <a
                href="https://github.com/juliareis1301"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons icon-colour">
                  <AiFillGithub/>
              </a>
            </li>
          </ul>
          <ul className="social-link">
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/juliareis1301/"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons icon-colour">
                  <AiFillLinkedin/>
              </a>
            </li>
          </ul>
          <ul className="social-link">
            <li className="social-icons">
              <a
                href="https://www.instagram.com/ju_lhareis/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="home-social-icons icon-colour">
                  <BsInstagram/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Contact;