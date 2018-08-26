import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';

export default class CalendarData extends Component {

    handleClick = () => {
        this.props.history.push(`/calendar-management/edit/${this.props.location.state.id}`, this.props.location.state )
    }
    
    render() {
        const event = this.props.location.state
        return (
            <div>
                <Nav />
                <div className="calendar-data">
                    <h2>{event.title.toUpperCase()}</h2>
                    <div>
                        <RaisedButton className="action-buttons" label="Edit" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                        <RaisedButton label="Delete" backgroundColor="#F44336" labelColor="#fff" onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        )
    }
}