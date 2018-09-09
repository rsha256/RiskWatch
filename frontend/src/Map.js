import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const google = window.google;
export class MapContainer extends Component {
  constructor(props) {
    super(props);
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://184.73.76.65:5000/api/getrisks", false);
    xhttp.send();
    this.risks = JSON.parse(xhttp.responseText);
    console.log(this.risks)
  }

    render() {
        return (
            <Map 
                google={this.props.google} 
                zoom={14}
                style={{
                    backgroundColor: "black"
                }}
                >
                {this.risks.map((risk) => {
                    var iconUrl = null;
                    switch (risk.riskType) {
                        case 'fire':
                        iconUrl = "icons/fireicon";
                        break;

                        case 'water':
                        iconUrl = "icons/watericon";
                        break;

                        case 'electrical':
                        iconUrl = "icons/electricalicon";
                        break;

                        case 'osha':
                        iconUrl = "icons/oshaicon";
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
                            url: iconUrl,
                            scaledSize: new google.maps.Size(35, 35)
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
