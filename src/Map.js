import React, { Component } from "react";
import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import Overlay from "pigeon-overlay";

class MapContainer extends Component {
  render() {
    return (
      <Map
        center={[50.879, 4.6997]}
        zoom={12}
        width={window.innerWidth}
        height={window.innerHeight}
      >
        <Marker
          anchor={[50.874, 4.6947]}
          payload={1}
          onClick={({ event, anchor, payload }) => {}}
        />

        <Overlay anchor={[50.879, 4.6997]} offset={[120, 79]}>
          <img src="pigeon.jpg" width={240} height={158} alt="" />
        </Overlay>
      </Map>
    );
  }
}

export default MapContainer;
