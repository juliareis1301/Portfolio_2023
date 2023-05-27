import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiHomeAlt2 } from 'react-icons/bi';
import { MdEmojiPeople } from  'react-icons/md';
import { GiSkills } from 'react-icons/gi';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { IoMdContacts } from 'react-icons/io';

function Header() {
  return (
    <div className="header-container">
      <Navbar className="navbar-custom" expand="lg">
        <Container className="navbar_container" fluid>
          <Navbar.Brand href="#" style={{ color: '#FEF4F4', fontSize: '32px' }}>
            JRS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px', gap: '30px' }}
              navbarScroll
            >
              <Nav.Link className='options-custom' href="/" style={{ color: '#FEF4F4', fontSize: '16px' }}>
                <BiHomeAlt2 className='icons-header'/>
                Home
              </Nav.Link>
              <Nav.Link  className='options-custom' href="/about" style={{ color: '#FEF4F4', fontSize: '16px' }}>
                <MdEmojiPeople className='icons-header'/>
                About 
              </Nav.Link>
              <Nav.Link className='options-custom' href="/skills" style={{ color: '#FEF4F4', fontSize: '16px' }}>
               <GiSkills className='icons-header'/>
                Skills
              </Nav.Link>
              <Nav.Link className='options-custom' href="/projects" style={{ color: '#FEF4F4', fontSize: '16px' }}>
                <AiOutlineFundProjectionScreen className='icons-header'/>
                Projects
              </Nav.Link>
              <Nav.Link className='options-custom' href="/contact" style={{ color: '#FEF4F4', fontSize: '16px' }}>
               <IoMdContacts className='icons-header'/>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default Header;
