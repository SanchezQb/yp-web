import React, { Component } from 'react'
import Nav from '../Nav'

export default class CampaignUsersData extends Component {
    state = {
        data: this.props.location.state,
        url: ''
      }
    
    render() {
        return (
            <div>
                <Nav />
                <div className = "wrap">
                    <h2>{this.state.data.name}</h2>
                </div>
            </div>
        )
    }
}