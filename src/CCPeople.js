import React, { Component } from 'react'

export default class CCPeople extends Component {
    constructor(props){
        super(props);
        this.state = {
            peoples: [],
        }
    }

    componentDidMount(){
        fetch ("http://api.open-notify.org/astros.json")
        .then(res=>res.json())
        .then(
            (result) => {
                    //if (result.people.craft == 'ISS')
                    //{
                        this.setState({
                            peoples: result.people
                        })
                    //}
            
            }
        )
    }

    render() {
        const {peoples} = this.state;
        
        
        
        return (
            <ul>
                Total amount:  people is space:
                {peoples.map(item => (
                    <li key={item.name}>
                        {item.name + " - " + item.craft}
                    </li>
                ))}
            </ul>
        )
                
    }
}
