import React, { Component } from 'react'
import Nav from '../Nav'
import Button from 'material-ui/Button';

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
                        <Button variant="raised" className="export-button">
                                Default
                        </Button>                        
                        <Button variant="raised" className="export-button">
                                Default
                        </Button>                    
                    </div>
                </div>
            </div>
        )
    }
}