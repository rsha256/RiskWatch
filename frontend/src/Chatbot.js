import React, {Component} from "react";

export class Chatbot extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="chatbox-container">
        <div className="container">
          <img src="../../../../../Users/rahul/Desktop/pfp.png" alt="Avatar1" />
          <p>Hello. How are you today?</p>
          <span className="time-right">11:00</span>
        </div>

        <div className="container darker">
          <img src="../../../../../Users/rahul/Desktop/pfp.png" alt="Avatar2" className="right" />
          <p>Hey! I'm fine. Thanks for asking!</p>
          <span className="time-left">11:01</span>
        </div>

        <div className="container">
          <img src="../../../../../Users/rahul/Desktop/pfp.png" alt="Avatar1" />
          <p>Sweet! So, what do you wanna do today?</p>
          <span className="time-right">11:02</span>
        </div>

        <div className="container darker">
          <img src="../../../../../Users/rahul/Desktop/pfp.png" alt="Avatar2" />
          <p>Nah, I dunno. Play soccer.. or learn more coding perhaps?</p>
          <span className="time-left">11:05</span>
        </div>
      </div>
    );
  }
}

export default Chatbot;
