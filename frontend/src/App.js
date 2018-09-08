import React, { Component } from 'react';
import logo from './logo.gif';
import './App.css';
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
)

class App extends Component {
  render() {
    return (
      <div className="App">
      {/* APP STARTS HERE */}

      <div className="container">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <h1 className="App-title">
            Welcome to FireWatch! 
          </h1>


        <div>
          <button type="button" className="btn btn-success">
            <FontAwesomeIcon icon={"cloud-upload-alt"} />
            Upload Image
          </button>
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
