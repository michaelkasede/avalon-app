import React, { Component } from 'react';
import { Button,Nav,Navbar,NavDropdown,Form,FormControl } from 'react-bootstrap';
import './App.css';
//import homeimage from "./homepage.js";

class App extends Component {
    render(){
      return(
        <div className="App">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Avalon</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">About</Nav.Link>
                <NavDropdown title="Events" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#event/3.1">Quad Biking</NavDropdown.Item>
                  <NavDropdown.Item href="#event/3.2">Zip Lining</NavDropdown.Item>
                  <NavDropdown.Item href="#event/3.3">Hiking</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#event/3.4">Rafting</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form inline>
                <FormControl type="text" placeholder="Type here" className="mr-sm-2" />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
        </div>
      )
    }
}

export default App;