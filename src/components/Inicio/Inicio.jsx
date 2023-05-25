import React from 'react'
import './Inicio.css'
import eu from '../../Image/Eu.jpeg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header/Header'


function Inicio() {

  return (

    <div className='inicio-container'>
      <section id="inicio">
      <Header />
        <div className="container">
          <div className="row">
            <div className="card-title">
              <div className='title'>
              <h1 className='prazer'>Hi there! <span role='img' aria-label='Emoji' className='emoji'>👋</span></h1>
                <h1 className='name'>
                  I'm <span className='name-text'>Julia Reis</span>
                </h1>        
                <h3 className='dev'>web developer</h3>
              </div>
            
                <div className='box'>
                  <img src={eu} className="eu img-fluid" alt="Imagem" />
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Inicio;