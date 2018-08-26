import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import '../App.css';
import accountStore from '../stores/Account';

export default class Login extends Component {
    state = {
        username: '',
        password: ''
    }


    render() {
        console.log(accountStore.authenticated)
        return (
            <form className = "login-form">
                <h2>Login</h2>
                <label htmlFor="username">Username</label><br/>
                <input type="text" id="username" onChange={(e) => {this.setState({username: e.target.value})}} /><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="password" id="password" onChange={(e) => {this.setState({password: e.target.value})}} /><br />
                <RaisedButton label="Log In" backgroundColor="#F0BA00" labelColor="#fff" onClick={() => accountStore.login(this.props.history)}/>
            </form>
        )
    }
}