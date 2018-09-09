import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const google = window.google;
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://localhost:5000/api/getrisks", false);
    xhttp.send();
    this.risks = JSON.parse(xhttp.responseText);
  }

    render() {
        return (
            <Map google={this.props.google} zoom={14}>
                {this.risks.map((risk) => {
                    var iconUrl = null;
                    switch (risk.riskType) {
                        case 'fire':
                        iconUrl = "fireicon";
                        break;

                        case 'water':
                        iconUrl = "watericon";
                        break;

                        case 'electrical':
                        iconUrl = "electricalicon";
                        break;

                        case 'osha':
                        iconUrl = "oshaicon";
                        break;
                    }

                    const riskLocation = risk.location.split(',');
                    const latitude = riskLocation[0];
                    const longitude = riskLocation[1];
                    return (<Marker 
                        onClick={this.onMarkerClick} 
                        name={"Current location"} 
                        position={{lat: latitude, lng: longitude}} 
                        icon={{
                            url: "black-pin.png",
                            scaledSize: new google.maps.Size(40, 40)
                        }}
                        key={risk.id}
                    />);
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
