import React, { Component } from 'react'
import Nav from '../Nav'
import Button from 'material-ui/Button';

export default class AddCalendarEvent extends Component {
    render() {
        return (
            <div>
                <Nav />
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
                        <Button variant="raised" className="export-button">
                            Default
                        </Button>                    
                    </form>
                </div>
            </div>
        )
    }
}