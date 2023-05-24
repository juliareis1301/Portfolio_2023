import React from "react";
import './Habilidades.css';
import { AiFillHtml5 } from 'react-icons/ai';
import { DiCss3 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { BsFillBootstrapFill } from 'react-icons/bs';

function Habilidades() {
  return (
    <section id="habilidades">
      <div className="habilidades-container">
        <h2 className="title-habilidades">Habilidades:</h2>
        <div class="container-skills">
          <div class="box-container">
            <div className="skill-box">
              <AiFillHtml5 className="icon" />
            </div>
            <p id="legenda" class="hide">HTML</p>
          </div>
          <div class="box-container">
            <div class="skill-box">
              <DiCss3 className="icon" />
            </div>
            <p id="legenda" class="hide">CSS</p>
          </div>
          <div class="box-container">
            <div className="skill-box">
              <SiJavascript className="icon" />
            </div>
            <p id="legenda" class="hide">JavaScript</p>
          </div>
          <div class="box-container">
            <div className="skill-box">
              <FaReact className="icon" />
            </div>
            <p id="legenda" class="hide">React Js</p>
          </div>
          <div class="box-container">
            <div className="skill-box">
              <BsFillBootstrapFill className="icon" />
            </div>
            <p id="legenda" class="hide">Bootstrap</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Habilidades;