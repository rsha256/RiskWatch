import React, {Component} from "react";
import "./Chatbot.css";
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
import * as ReactDOM from "react-dom";
import {render} from "react-dom";
import {Overlay} from "react-bootstrap";

function CustomPopover({className, style}) {
  return (
    <div
      className={className}
      style={{
        ...style,
        position: 'absolute',
        backgroundColor: '#EEE',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
        border: '1px solid #CCC',
        borderRadius: 3,
        marginLeft: -5,
        marginTop: 5,
        padding: 10
      }}
    >
      <p style={{opacity: "1"}}><strong>Holy guacamole!</strong> Check this info.</p>
    </div>
  );
}

class Chatbot extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      show: true
    };
  }

  handleToggle() {
    this.setState({show: !this.state.show});
  }

  render() {
    return (
      <div style={{height: 100, position: 'relative'}}>
        <Button
          ref={button => {
            this.target = button;
          }}
          onClick={this.handleToggle}
        >
          I am an Overlay target
        </Button>
      </div>
    );
  }
}

export default Chatbot;


/*
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
              action="http://184.73.76.65:5000/api/addrisk"
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
                  this.setState({imageURL: imageURL});
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
                                                                        that may develop into a high threat in the near
                                                                        future
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
                                                                      Everything from common household burns to
                                                                      all-consuming
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
*/

