import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Nav from '../Nav'

export default class AddCampaignDonation extends Component {

    handleClick = () => {
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Campaign Donation</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title" /><br/>
                        <label htmlFor="goal">Goal</label><br />
                        <input type="number" id="goal" />
                        <div className="top">
                            <label htmlFor="level">Level</label><br />
                            <select onChange={(e) => console.log(e.target.value)} id="level">
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