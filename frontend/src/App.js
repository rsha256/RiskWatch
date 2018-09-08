import React, { Component } from 'react';
import logo from './logo.gif';
import './App.css';
import { Button, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter, Collapse, NavbarToggler, NavbarBrand, Nav, Navbar, NavItem, NavLink } from 'reactstrap';
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faCloud,
  faCloudUploadAlt
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

library.add(
  faCloud,
  faCloudUploadAlt,
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare
);

// var Modal = ReactBootstrap.Modal;

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      modal: false,
      collapsed: true
    };
    
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div className="App">
      {/* APP STARTS HERE */}

      {/* <NAVBAR> */}
      <div className="nav-color">
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">FireWatch</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="https://yeet.yee">Link Daniel Cant see</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/rshah2020/DanielCannotAccessThisSecretRepo">Another Link Daniel Cant see</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
      {/* </NAVBAR> */}

      <div>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1 className="App-title">
            Welcome to FireWatch! 
          </h1>


        <div>
          <button color="success" className="btn btn-success" onClick={this.toggle}>
            <FontAwesomeIcon icon={"cloud-upload-alt"} />
            &nbsp;&nbsp;Add Risk
          </button>

          {/* <MODAL> */}
          
          <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>Report Something!</ModalHeader>
            <ModalBody>
              <form action="http://localhost:5000/api/addrisk" method="post" encType="multipart/form-data" id="upload-form">
              <h3>Select an image:</h3>
                <input type="file" name="image" id="img-input-field" />
                <label htmlFor="img-input-field"/>

                {/* <label for="low">Low</label>
                <input type="radio" name="ranking" id="low" value="low" /><br />
                <label for="medium">Medium</label>
                <input type="radio" name="ranking" id="medium" value="medium" /><br />
                <label for="high">High</label>
                <input type="radio" name="ranking" id="high" value="high" /><br /><br />   */}

                <br /><br /><br />

                <FormGroup tag="fieldset">
                <legend>Rank the danger:</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="ranking" />{' '}
                    <span className="amber-text">Low threat;</span> unlikely to harm anyone
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="ranking" />{' '}
                    <span className="orange-text">Medium threat;</span> a threat that may develop into a high threat near in the future
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Label check>
                    <Input type="radio" name="ranking" />{' '}
                    <span className="amber-text text-darken-4">High threat;</span> not 911-important enough but still pretty important
                  </Label>
                </FormGroup>
            </FormGroup>
              <br />
            <FormGroup check>
                <Label check>
                  <Input type="radio" name="hazardtype" value="fire"></Input>{' '}
                  <span className="orange-text">Fire Hazard </span> - Encompassing everything from common household burns to all-consuming 
                      bonfires.
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                  <Input type="radio" name="hazardtype" value="water"></Input>{' '}
                  <span className="orange-text">Water Hazard</span> - Encompassing flooding and tidal waves.
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                  <Input type="radio" name="hazardtype" value="osha"></Input>{' '}
                  <span className="orange-text">OSHA Violations</span> - Workplace-related safety hazards
                </Label>
            </FormGroup>
            <FormGroup check>
                <Label check>
                  <Input type="radio" name="hazardtype" value="electrical"></Input>{' '}
                  <span className="orange-text">Electrical Hazards</span> - Fallen power lines
                </Label>
            </FormGroup>

              </form>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" form="upload-form" type="submit">Submit</Button>
              <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            </ModalFooter>
          </Modal>
          
          {/* </MODAL> */}

        </div>

        </div>
        
        <p className="App-footer">
          FireWatch was made by a group of broke high school students. &copy; 2018
        </p>
      </div>
      {/* APP ENDS HERE */}
      </div>
    );
  }
}

export default App;
