import React, {Component} from 'react';
import { withGoogleMap, GoogleMap, Marker} from 'react-google-map';
import { GoogleMapLoader } fomr 'react-google-maps-loader'

class GoogleMap extends Component {
  var MY_API_KEY = "AIzaSyA7F-pSE1g5X19zoOdDS00Y6mTXa8VoHIw"
  render() {
    const GettingStartedGoogleMap = withGoogleMap( props => (
      <GoogleMap defaultZoom={3} defaultCenter={{ lat: -25.363882, lng: 131.044922 }}>
      </GoogleMap>
    ))

    return (
        <GettingStartedGoogleMap
          containerElement={
            <div style={{height: `100%`, width: `100%`}} />
          }

          mapElement={
            <div style={{height: `100%`, width: `100%`}} />
          }
          />
    )
  }
}

export default GoogleMapLoader(Map, {
  libraries: ["places"],
  key: MY_API_KEY,
})