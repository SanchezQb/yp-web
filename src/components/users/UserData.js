import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Nav from '../Nav'

export default class UserData extends Component {
    state = {
        isLoading: true,
        data: this.props.location.state
    }

    handleClick = () => {
        this.props.history.push(`/users/edit/${this.state.data.id}`, this.state.data)
    }

    render() {
        return (
            <div>
                <Nav />
                <div className = "wrap">
                    <h2>{this.state.data.name}</h2>
                    <div>
                        <RaisedButton className="action-buttons" label="Edit User" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                        <RaisedButton label="Delete User" backgroundColor="#F44336" labelColor="#fff" onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        )
    }
}