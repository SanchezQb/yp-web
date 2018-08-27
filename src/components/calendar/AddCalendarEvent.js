import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';

export default class AddCalendarEvent extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <div className="add-event">
                    <h2>Add Calendar Event</h2>
                    <form className="event-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title" /><br/>
                        <label htmlFor="start">Start Date</label><br/>
                        <input type="datetime-local" id="start"/><br />
                        <label htmlFor="start">End Date</label><br/>
                        <input type="datetime-local" id="end"/><br />
                        <label htmlFor="color">Pick color</label><br/>
                        <input type="color" id="color"/><br /><br />
                        <RaisedButton label="ADD" backgroundColor="#a09dd7" labelColor="#fff" onClick={this.handleClick}/>
                    </form>
                </div>
            </div>
        )
    }
}