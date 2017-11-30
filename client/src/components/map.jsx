import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const style = {
  map: {
    width: '43%',
    height: '400px',
  },
}

class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(this.state.activeMarker);
  }

  onMapClicked(props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  render() {
    return (
      <Map google={this.props.google}
           onClick={this.onMapClicked}
           style={style.map}
           zoom={12}
           initialCenter={{
            lat: this.props.results[0][0].geometry.location.lat,
            lng: this.props.results[0][0].geometry.location.lng
          }}>
        <Marker
          label={`#1`}
          title={`Choice 1`}
          onClick={this.onMarkerClick}
          name={this.props.results[0][0].name}
          address={this.props.results[0][0].formatted_address}
          position={{lat: this.props.results[0][0].geometry.location.lat, lng: this.props.results[0][0].geometry.location.lng}} />
        <Marker
          label={`#2`}
          title={`Choice 2`}
          onClick={this.onMarkerClick}
          name={this.props.results[1][0].name}
          address={this.props.results[1][0].formatted_address}
          position={{lat: this.props.results[1][0].geometry.location.lat, lng: this.props.results[1][0].geometry.location.lng}} />
        <Marker
          label={`#3`}
          title={`Choice 3`}
          onClick={this.onMarkerClick}
          name={this.props.results[2][0].name}
          address={this.props.results[2][0].formatted_address}
          position={{lat: this.props.results[2][0].geometry.location.lat, lng: this.props.results[2][0].geometry.location.lng}} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
              <p>{this.state.selectedPlace.address}</p>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({ apiKey: (process.env.GOOGLE_API_KEY) })(MapContainer);