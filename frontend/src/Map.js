import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// FAB Stuff
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import NavigationIcon from '@material-ui/icons/Navigation';
import { faAlignRight } from "@fortawesome/free-solid-svg-icons";

export class MapContainer extends Component {
  render() {
    return (
        <Map google={this.props.google} zoom={14}>
          <Marker onClick={this.onMarkerClick} name={"Current location"} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Hello World</h1>
            </div>
          </InfoWindow>
          <Button variant="fab" color="secondary" aria-label="Add" className={faAlignRight}>
            <AddIcon />
          </Button>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBaPrjle3PHIeszmO4Bn7XlYHgrF1pTDzw"
})(MapContainer);
