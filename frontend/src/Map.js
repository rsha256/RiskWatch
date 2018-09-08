import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const google = window.google;
export class MapContainer extends Component {
  constructor() {
    super();
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://184.73.76.65:5000/api/getrisks", false);
    xhttp.send();
    this.risks = JSON.parse(xhttp.responseText);
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        {this.risks.map(risk => {
          const riskLocation = risk.location.split(",");
          const latitude = riskLocation[0];
          const longitude = riskLocation[1];
          return (
            <Marker
              onClick={this.onMarkerClick}
              name={"Current location"}
              position={{ lat: latitude, lng: longitude }}
              icon={{
                url: "black-pin.png",
                scaledSize: new google.maps.Size(40, 40)
              }}
            />
          );
        })}
        <InfoWindow onClose={this.onInfoWindowClose}>
          <div>
            <h1>Hello World</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBaPrjle3PHIeszmO4Bn7XlYHgrF1pTDzw"
})(MapContainer);
