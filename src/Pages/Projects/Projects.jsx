import React from "react";
import './Projects.css';
import Header from '../../components/Header/Header'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import marvel from '../../Image/marvel.png';
import spotify from '../../Image/spotifypage.png';
import pokedex from '../../Image/pokedex.png';
import portfolio from  '../../Image/portfolio.png';


function Projects() {


  const handleButtonClickMarvel = () => {
    const marvelProject = 'marvelcomicsshowcase.netlify.app';
    const fullURL = `https://${marvelProject}`
    window.open(fullURL, '_blank');
  }

  const handleButtonClickSpotify = () => {
    const spotifyProject = 'spotifypage-julia.netlify.app/'
    const fullURL = `https://${spotifyProject}`;
    window.open(fullURL, '_blank');
  }

  const  handleButtonClickPokedex = () => {
    const pokedexProject = 'pokedexjuliareis.netlify.app/'
    const fullURL = `https://${pokedexProject}`;
    window.open(fullURL,'_blank')
  }


  const handleButtonClickPortfolio = () => {
    const portfolioProject = 'juliareis-portfolio1.netlify.app/';
    const fullURL = `https://${portfolioProject}`;
    window.open(fullURL, '_blank')
  }


  return (
    <section id="projects">
      <Header/>
      <h1 className="title-projects">Projects</h1>
      <div className="projects-container">
      <div className="projects-card">
        <Card style={{ width: '18rem',backgroundColor:'#FEF4F4' }}>
          <Card.Img variant="top" src={marvel} />
          <Card.Body>
            <Card.Title className="title-card">Marvel showcase</Card.Title>
            <Card.Text>
            Project developed with React and Bootstrap using API from
            Marvel for character search, comics and series.
            </Card.Text>
            <Button onClick={handleButtonClickMarvel} className="btn custom-btn">Check out</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' ,backgroundColor:'#FEF4F4' }}>
          <Card.Img variant="top" src={spotify} />
          <Card.Body>
            <Card.Title className="title-card">Spotify page</Card.Title>
            <Card.Text>
            Spotify page responsive <br></br>
            replica using React<br></br>
            JS. 
            </Card.Text>
            <Button onClick={handleButtonClickSpotify} variant="primary">Check out</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem',backgroundColor:'#FEF4F4' }}>
          <Card.Img variant="top" src={pokedex} />
          <Card.Body>
            <Card.Title className="title-card">Pokedéx</Card.Title>
            <Card.Text>
            Pokedex created with HTML, CSS and JS.<br></br> 
            In order to use the pokemon api in the<br></br>
            future.
            </Card.Text>
            <Button  onClick={handleButtonClickPokedex} variant="primary">Check out</Button>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem' ,backgroundColor:'#FEF4F4'}}>
          <Card.Img variant="top" src={portfolio} />
          <Card.Body>
            <Card.Title className="title-card">Portfolio</Card.Title>
            <Card.Text>
              My first project with HTML, CSS and JS <br></br><br></br><br></br>
            </Card.Text>
            <Button onClick={handleButtonClickPortfolio}  variant="primary">Check out</Button>
          </Card.Body>
        </Card>
        </div>
      </div>
    </section>
  );
}

export default Projects;