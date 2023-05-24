import React from "react";
import Header from '../../components/Header/Header';
import './Skills.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact } from 'react-icons/fa';
import { SiBootstrap } from 'react-icons/si';


function Skills() {
  return (
    <section id="skills">
      <Header />  
      <div className="skills-container">
        <h1 className="title-skills">Skills</h1>
        <div class="container-skills">
          <div class="box-container">
            <div className="box-container-inner">
              <div className="box-container-front">
                <AiFillHtml5 className="icons-skills"/>
              </div>
              <div className="box-container-back">
                <h1>HTML</h1>
              </div>
            </div>
          </div>
          <div class="box-container">
            <div className="box-container-inner">
              <div className="box-container-front">
                <DiCss3  className="icons-skills"/>
              </div>
              <div className="box-container-back">
                <h1>CSS</h1>
              </div>
            </div>
          </div>
          <div class="box-container">
            <div className="box-container-inner">
              <div className="box-container-front">
                <IoLogoJavascript className="icons-skills"/>
              </div>
              <div className="box-container-back">
                <h1>Js</h1>
              </div>
            </div>
          </div>
          <div class="box-container">
            <div className="box-container-inner">
              <div className="box-container-front">
                <FaReact className="icons-skills"/>
              </div>
              <div className="box-container-back">
                <h1>React JS</h1>
              </div>
            </div>
          </div>
          <div class="box-container">
            <div className="box-container-inner">
              <div className="box-container-front">
                <SiBootstrap className="icons-skills"/>
              </div>
              <div className="box-container-back">
                <h1>Boots-<br></br>trap</h1>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Skills;