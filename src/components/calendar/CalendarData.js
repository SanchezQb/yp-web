import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';
import moment from 'moment'

export default class CalendarData extends Component {

    handleClick = () => {
        this.props.history.push(`/calendar-management/edit/${this.props.location.state.id}`, this.props.location.state )
    }
    
    render() {
        const event = this.props.location.state
        console.log(this.props.location.state)
        return (
            <div>
                <Nav />
                <div className="calendar-data">
                    <h2>{event.title.toUpperCase()}</h2>
                    <h5>Attendees: {event.attendees.length}</h5>
                    <h5>Location: {event.details.location}</h5>
                    <h5>Date: {moment(new Date(event.start)).format('dddd, MMMM Do YYYY')}, Time: {moment(new Date(event.start)).format('h:mm A')} </h5>
                    <div>
                        <h3>Description</h3>
                        <h4>{event.details.description}</h4>
                    </div>
                    <div>
                        <RaisedButton className="action-buttons" label="Edit" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                        <RaisedButton label="Delete" backgroundColor="#F44336" labelColor="#fff" onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        )
    }
}