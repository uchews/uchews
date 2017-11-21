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
          title={`Choice 1`}
          name={this.props.results[0][0].name}
          position={{lat: this.props.results[0][0].geometry.location.lat, lng: this.props.results[0][0].geometry.location.lng}} />
        <Marker
          title={`Choice 2`}
          name={this.props.results[1][0].name}
          position={{lat: this.props.results[1][0].geometry.location.lat, lng: this.props.results[1][0].geometry.location.lng}} />
        <Marker
          title={`Choice 3`}
          name={this.props.results[2][0].name}
          position={{lat: this.props.results[2][0].geometry.location.lat, lng: this.props.results[2][0].geometry.location.lng}} />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
        </InfoWindow>
      </Map>
    )
  }
}

export default GoogleApiWrapper({ apiKey: ('AIzaSyD5KxvxlVHvVI_xiMNxlcLtP_cj9PauItI') })(MapContainer);