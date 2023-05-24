import React from "react";
import './About.css';
import Header from '../../components/Header/Header';

function About () {
  return(
    <section id="about">
      <Header/>
      <div className="about-container">
        <h1 className="title-about">About me...</h1>
        <p className="txt-about"> Hello! My name is Julia, and I'm passionate about
            technology with a focus on front-end development. 
            Programming in React and JavaScript is my passion, 
            and I love creating interactive and dynamic web applications.
            I have strong skills in CSS, HTML, and also some knowledge 
            of Bootstrap, which enables me to create appealing and 
            responsive user interfaces. Furthermore, I have completed 
            several personal projects, where I was able to enhance my 
            skills and put into practice all the knowledge I have acquired.<br></br>
            Currently, I am pursuing the third semester of Computer Science, 
            which provides me with a solid theoretical foundation and allows me 
            to explore more advanced programming concepts</p>
      </div>
    </section>
  )
}

export default About