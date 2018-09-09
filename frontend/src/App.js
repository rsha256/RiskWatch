import React, { Component } from "react";
import logo from "./logo.gif";
import "./App.css";
import {
  Button,
  // Form,
  FormGroup,
  Label,
  Input,
  // FormText,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  // Collapse,
  // NavbarToggler,
  NavbarBrand,
  // Nav,
  Navbar
  // NavItem,
  // NavLink
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

function toast() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000);
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      collapsed: true,
      imageURL: "Select an Image"
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
              className="btn btn-success capsule-border"
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
            //   action="http://184.73.76.65:5000/api/addrisk"
              method="post"
              encType="multipart/form-data"
              id="upload-form"
            >
              <input
                type="file"
                name="image"
                id="img-input-field"
                onChange={event => {
                  const urlSegments = event.target.value.split("\\");
                  const imageURL = urlSegments[urlSegments.length - 1];
                  this.setState({ imageURL: imageURL });
                }}
                className="btn btn-success-outline"
              />
              <label
                htmlFor="img-input-field"
                className="btn btn-outline-success capsule-border"
              >
                {this.state.imageURL}
              </label>

              <br />
              <br />
              <br />

              <FormGroup tag="fieldset">
                <legend>Rank the danger:</legend>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="ranking" />{" "}
                    <span className="orange-text">Low threat;</span> unlikely to
                    harm anyone
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="ranking" />{" "}
                    <span className="orange-text">Medium threat;</span> a threat
                    that may develop into a high threat in the near future
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="ranking" />{" "}
                    <span className="orange-text">High threat;</span> not
                    911-important enough, but still pretty important
                  </Label>
                </FormGroup>
              </FormGroup>
              <br />
              <FormGroup tag="fieldset">
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="hazardtype" value="fire" />{" "}
                    <span className="orange-text">Fire Hazard </span> -
                    Everything from common household burns to all-consuming
                    bonfires.
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
            <Button
              color="primary"
              onClick={toast}
              form="upload-form"
              type="submit"
            >
              Submit
            </Button>
            <div id="snackbar">Your Upload was Completed Successfully!</div>
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
