import React, {Component} from 'react'
import {Container,Navbar,Nav,NavDropdown} from 'react-bootstrap'
import './Myheader.css'
class Myheader extends Component {
    render(){
        return (
          <Container className="navmenu">
            <Navbar fixed="top">
              <Navbar.Brand href="#home"><img className="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group"/></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav >
                  <Nav.Link active href="#home">About us</Nav.Link>
                  <Nav.Link href="#link">Career</Nav.Link>
                  <NavDropdown title="Departments" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                    Marketing and PR
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Customer Success and Sales
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                    IT, Product, Design and UX
                    </NavDropdown.Item>
                    
                    <NavDropdown.Item href="#action/3.4">
                    Finance and Administration
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
               
              </Navbar.Collapse>
            </Navbar>
          </Container>
        );
    }
}
export default Myheader;