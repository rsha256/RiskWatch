import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Map from "./Map";
import Chatbot from "./Chatbot";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<Map />, document.getElementById("map"));
ReactDOM.render(<Chatbot />, document.getElementById("chatbox"));
