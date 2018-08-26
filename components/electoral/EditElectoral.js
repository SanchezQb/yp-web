import React, { Component } from 'react'
import Button from 'material-ui/Button';
import Nav from '../Nav'

export default class EditElectoral extends Component {
    state = {
        name: this.props.location.state.name,
        username: this.props.location.state.username
    }

    handleClick = () => {
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>{this.state.name}</h2>
                    <form className="edit-form">
                        <label htmlFor="name">Name</label><br/>
                        <input type="text" id="name" value={this.state.name} /><br/>
                        <label htmlFor="username">Username</label><br />
                        <input type="text" id="username" value={this.state.username} />
                        <Button variant="raised" className="export-button">
                            Default
                        </Button>                    
                    </form>
                </div>
            </div>
        )
    }
}