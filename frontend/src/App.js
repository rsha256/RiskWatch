import React, { Component } from "react";
import logo from "./logo.gif";
import "./App.css";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Collapse,
  NavbarToggler,
  NavbarBrand,
  Nav,
  Navbar,
  NavItem,
  NavLink
} from "reactstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCoffee,
  faCog,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faCloud,
  faCloudUploadAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

  render() {
    return (
      <div className="App">
        <div className="nav-color">
          <Navbar color="faded" light>
            <NavbarBrand href="#" className="mr-auto">
              <img src={logo} className="App-logo" alt="logo" />
              &nbsp; RiskWatch
            </NavbarBrand>
            <button
              color="success"
              className="btn btn-success"
              onClick={this.toggle}
            >
              <FontAwesomeIcon icon={"cloud-upload-alt"} />
              &nbsp;&nbsp;Add Risk
            </button>
          </Navbar>
        </div>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Report Something!</ModalHeader>
          <ModalBody>
            <form
              action="http://localhost:5000/api/addrisk"
              method="post"
              encType="multipart/form-data"
              id="upload-form"
            >
              <h3>Select an image:</h3>
              <input type="file" name="image" id="img-input-field" />
              <label htmlFor="img-input-field" />

              <br />
              <br />
              <br />

              <FormGroup tag="fieldset">
                <legend>Rank the danger:</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="ranking" />{" "}
                    <span className="yellow-text">Low threat;</span> unlikely to
                    harm anyone
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="ranking" />{" "}
                    <span className="orange-text">Medium threat;</span> a threat
                    that may develop into a high threat near in the future
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="ranking" />{" "}
                    <span class="red-text">High threat;</span> not 911-important
                    enough but still pretty important
                  </Label>
                </FormGroup>
              </FormGroup>
              <br />
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="hazardtype" value="fire" />{" "}
                    <span className="orange-text">Fire Hazard </span> -
                    Encompassing everything from common household burns to
                    all-consuming bonfires.
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="hazardtype" value="water" />{" "}
                    <span className="orange-text">Water Hazard</span> -
                    Encompassing flooding and tidal waves.
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="hazardtype" value="osha" />{" "}
                    <span className="orange-text">OSHA Violations</span> -
                    Workplace-related safety hazards
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="hazardtype" value="electrical" />{" "}
                    <span className="orange-text">Electrical Hazards</span> -
                    Fallen power lines
                  </Label>
                </FormGroup>
              </FormGroup>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" form="upload-form" type="submit">
              Submit
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
