import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';

export default class AddExco extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Exco</h2>
                    <form className="edit-form">
                        <label htmlFor="name">Name</label><br/>
                        <input type="text" id="name" /><br/>
                        <label htmlFor="username">Username</label><br />
                        <input type="text" id="username" />
                        <RaisedButton label="Save" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                    </form>
                </div>
            </div>
        )
    }
}