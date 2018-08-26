import React, { Component } from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'


export default class Polls extends Component {

    render() {
        return(
            <div>
                <Nav />
                <div className="paper">
                    <Link to={'/opinion-polls'} className="paper-link">
                        <div className="paper-item" style={{backgroundColor: '#FFA500'}}>
                            <h3>Opinion Polls</h3>
                        </div>
                    </Link>
                    <Link to={'/exit-polls'} className="paper-link">
                        <div className="paper-item" style={{backgroundColor: '#0881af'}}>
                            <h3>Exit Polls</h3>
                        </div>
                    </Link>
                    <Link to={'/push-polls'} className="paper-link">
                        <div className="paper-item" style={{backgroundColor: '#d74955'}}>
                            <h3>Push Polls</h3>
                        </div>
                    </Link>
                    <Link to={'/tracking-polls'} className="paper-link">
                        <div className="paper-item" style={{backgroundColor: '#008000'}}>
                            <h3>Tracking Polls</h3>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}