import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import './App.js';

export class CCGoogleMaps extends Component {
    constructor(props){
        super(props);
        this.state ={
            longitude: 0,
            latitude: 0
        }
    }

    componentDidMount(){
        fetch ("http://api.open-notify.org/iss-now.json")
        .then(res=>res.json())
        .then(
            (result) => {
                this.setState({
                    longitude: result.iss_position.longitude,
                    latitude: result.iss_position.latitude
                });
            },
        )
    }
    

    render() {
        return (
            <div>
                <Map style={{ width: '75%', height: '85vh'}}
                    google={this.props.google}
                    center={{
                        lat: this.state.latitude,
                        lng: this.state.longitude
                    }}
                    zoom={6}
                    onClick={this.onMapClicked}
                ><Marker onClick={this.onMarkerClick}
                name={'ISS location'} position={{lat: this.state.latitude, lng: this.state.longitude}} /></Map>
        </div>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyBybr15rX7Fkxfv8wi7yl0xx34PytsqdVE")
  })(CCGoogleMaps)

  
