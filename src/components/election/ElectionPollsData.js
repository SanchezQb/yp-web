import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Nav from '../Nav'

export default class ElectionPollsData extends Component {
    state = {
        isLoading: true,
        data: this.props.location.state
    }

    handleClick = () => {
        this.props.history.push(`/questionnaire/edit/${this.state.data.id}`, this.state.data)
    }

    render() {
        return (
            <div>
                <Nav />
                <div className = "wrap">
                    <h2>{this.state.data.title}</h2>
                    <h4>1,000 Users</h4>
                    <h4>16th May - 17th May, 2018</h4>
                    <div>
                        <RaisedButton label="Delete Poll" backgroundColor="#F44336" labelColor="#fff" onClick={this.handleClick}/>
                    </div>
                    <div className="poll-results">
                        <div className="poll-result-item">
                            <h2>40%</h2>
                            <h5>Choice 1</h5>
                        </div>
                        <div className="poll-result-item">
                            <h2>20%</h2>
                            <h5>Choice 2</h5>
                        </div>
                        <div className="poll-result-item">
                            <h2>15%</h2>
                            <h5>Choice 3</h5>
                        </div>
                        <div className="poll-result-item">
                            <h2>25%</h2>
                            <h5>Choice 5</h5>
                        </div>
                    </div>
                    <h2>Comments</h2>
                </div>
            </div>
        )
    }
}