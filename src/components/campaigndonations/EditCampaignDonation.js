import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Nav from '../Nav'

export default class EditCampaignDonation extends Component {
    state = {
        title: this.props.location.state.title,
        body: this.props.location.state.body
    }

    handleClick = () => {
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>{this.state.title}</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title" value={this.state.title} /><br/>
                        <label htmlFor="positions">Goal</label><br />
                        <input type="number" id="body" />
                        <div className="top">
                            <label htmlFor="positions">Level</label><br />
                            <select onChange={(e) => console.log(e.target.value)}>
                                <option value="all">All</option>
                                <option value="presidential">Federal</option>
                                <option value="governorship">State</option>
                                <option value="governorship">Local</option>
                            </select> 
                        </div><br />
                        <RaisedButton label="Save Changes" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                    </form>
                </div>
            </div>
        )
    }
}