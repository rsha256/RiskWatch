import React, { Component } from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";

class MapContainer extends Component {
  constructor(props) {
    super(props);

    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://rskwatch.com:5000/api/getrisks", false);
    xhttp.send();
    this.risks = JSON.parse(xhttp.responseText);

    this.markers = this.risks.map(risk => (
      <Marker
        key={`risk_${risk.id}`}
        anchor={[
          JSON.parse(risk.location.split(",")[0]),
          JSON.parse(risk.location.split(",")[1])
        ]}
        payload={risk.id}
        onClick={this.onMarkerClick}
      />
    ));

    console.log(this.markers);
  }

  render() {
    return (
      <Map
        center={[40.296321, -74.62610306532605]}
        zoom={12}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        {this.markers}
      </Map>
    );
  }
}

export default MapContainer;
