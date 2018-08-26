import React, { Component } from 'react'
import Button from 'material-ui/Button';
import '../App.css';

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }

    handleClick = () => {
        this.props.history.push('/home')
    }

    render() {
        return (
            <form className = "login-form">
                <h2>Login</h2>
                <label htmlFor="username">Username</label><br/>
                <input type="text" id="username" onChange={(e) => {this.setState({username: e.target.value})}} /><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="password" id="password" onChange={(e) => {this.setState({password: e.target.value})}} /><br />
                    <Button variant="raised" className="export-button login-button" onClick={this.handleClick}>
                        Default
                    </Button>            
                </form>
        )
    }
}