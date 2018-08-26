import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Nav from '../Nav'

export default class QuestionnaireData extends Component {
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
                    <div>
                        <RaisedButton className="action-buttons" label="Edit Question" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                        <RaisedButton label="Delete Question" backgroundColor="#F44336" labelColor="#fff" onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        )
    }
}