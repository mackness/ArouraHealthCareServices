import React from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />

        <InfoWindow>
          <div>
            <h1>hello</h1>
          </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MapContainer)
