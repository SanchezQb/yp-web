import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';

export default class AddTracking extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Tracking Poll</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title" /><br/>
                        <label>Choices</label><br />
                        <input type="text" placeholder="Choice 1" id="choice1" />
                        <input type="text" placeholder="Choice 2" id="choice2" />
                        <input type="text" placeholder="Choice 3" id="choice3" />
                        <button className="add-choice">Add Choice</button><br/><br/>
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