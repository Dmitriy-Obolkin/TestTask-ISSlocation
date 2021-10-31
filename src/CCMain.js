import React, { Component } from 'react';
import './App.js';
import CCGoogleMaps from './CCGoogleMaps.js';

export default class CCMain extends Component {
    constructor(props){
        super(props);
        this.state ={
            longitude: '',
            latitude: ''
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
                <b >ISS is now located at:</b>
                <p>latitude: {this.state.latitude}, longitude: {this.state.longitude}</p>
            </div>
        )
    }
}
