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
    console.log(this.risks);
    this.state = {
      markerData: {},
      activeMarker: null,
      showingInfoWindow: false
    };
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      markerData: props,
      showingInfoWindow: true,
      activeMarker: marker
    });
    console.log(this.state.markerData.imageUrl);
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
          lat: 39.9578174,
          lng: -75.195382
        }}
      >
        {this.risks.map(risk => {
          var iconUrl = null;
          switch (risk.riskType) {
            case "fire":
              iconUrl = "icons/fireicon";
              break;

            case "water":
              iconUrl = "icons/watericon";
              break;

            case "electrical":
              iconUrl = "icons/electricalicon";
              break;

            case "osha":
              iconUrl = "icons/oshaicon";
              break;
          }

          const riskLocation = risk.location.split(",");
          const latitude = riskLocation[0];
          const longitude = riskLocation[1];
          return (
            <Marker
              onClick={this.onMarkerClick}
              name={"Current location"}
              position={{ lat: latitude, lng: longitude }}
              icon={{
                url: iconUrl,
                scaledSize: new google.maps.Size(35, 35)
              }}
              key={risk.id}
              imageUrl={"/images/" + risk.imageFileName}
              // placeAddress={this.getPlaceAddress(latitude, longitude)}
            />
          );
        })}
        <InfoWindow
          onClose={this.onInfoWindowClose}
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <h1>{this.state.markerData.placeAddress}</h1>
          <img src={this.state.markerData.imageUrl} />
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBaPrjle3PHIeszmO4Bn7XlYHgrF1pTDzw"
})(MapContainer);
