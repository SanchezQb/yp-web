import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';

export default class AddElectionPolls extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Election Poll</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title" /><br/>
                        <label>Choices</label><br />
                        <select onChange={(e) => console.log(e.target.value)}>
                            <option value="all">Select Electoral Candidate</option>
                            <option value="presidential">Candidate one</option>
                            <option value="governorship">Candidate two</option>
                            <option value="governorship">Candidate three</option>
                        </select>
                        <label htmlFor="start">Start Date</label><br/>
                        <input type="datetime-local" id="start"/><br />
                        <label htmlFor="start">End Date</label><br/>
                        <input type="datetime-local" id="end"/><br />
                        <RaisedButton label="Save" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                    </form>
                </div>
            </div>
        )
    }
}