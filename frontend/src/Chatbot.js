import React, {Component} from "react";
import "./Chatbot.css";
import {
  // Button,
  Modal,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import "./Chatbot.css"
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faComment
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icon from "@material-ui/core/Icon/Icon";

library.add(
  faComment
);

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  extendedIcon: {
    marginRight: theme.spacing.unit,
  },
});

function FloatingActionButtons(props) {
  const {classes} = props;
  return (
    <div>
      <Button variant="fab" color="primary" aria-label="Edit" className={classes.button}>
        <Icon>edit_icon</Icon>
      </Button>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

class Chatbot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
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
      <div>
        <Button style={{backgroundColor: "red", color: "white", marginLeft: "95vw", marginTop: "80vh"}} aria-label="Add"
                variant="fab"
                onClick={this.toggle}>
          <AddIcon />
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Chat</ModalHeader>
          <ModalBody>
            <div className="chat">
              <div className="chat-title">
                <h1>Rahul Shah</h1>
                <h2>rshah2020</h2>
                <div className="container">
                  <img width={"80px"} height={"80px"} src="https://avatars2.githubusercontent.com/u/28417128?s=460&v=4"
                       alt="Rahul" />
                  <p>Hello. How are you today?</p>
                  <span className="time-right">1:32</span>
                </div>

                <div className="chat-popup" id="myForm">
                  <form action="" method="post" className="form-container">
                    <h1>Chat</h1>

                    <label htmlFor="msg"><b>Message</b></label>
                    <textarea placeholder="Type message.." name="msg" required />

                    <button type="submit" className="btn">Send</button>
                    <button type="button" className="btn cancel" onClick="closeForm()">Close</button>
                  </form>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default Chatbot;
