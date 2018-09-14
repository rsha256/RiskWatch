import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import MapContainer from "./Map";

ReactDOM.render(<App />, document.getElementById("root"));
ReactDOM.render(<MapContainer />, document.getElementById("map"));
registerServiceWorker();
