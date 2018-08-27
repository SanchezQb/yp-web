import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import { observer } from 'mobx-react'

import '../App.css';
import accountStore from '../stores/Account';


@observer
export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }


    render() {
        // const actions = (
        //     <RaisedButton label="OK" />
        // )
        return (
            <form className = "login-form">
                <h2>Login</h2>
                <label htmlFor="username">Email</label><br/>
                <input type="text" id="username" onChange={(e) => {this.setState({email: e.target.value})}} /><br/>
                <label htmlFor="password">Password</label><br/>
                <input type="password" id="password" onChange={(e) => {this.setState({password: e.target.value})}} /><br />
                <RaisedButton disabled={accountStore.disabled} label="Log In" backgroundColor="#F0BA00" labelColor="#fff" onClick={() => accountStore.login(this.state,this.props.history)}/>
            </form>
        )
    }
}