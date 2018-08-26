import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';

export default class AddQuestionnaire extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Sub-Admin Group</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title" /><br/>
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id="email" />
                        <label htmlFor="password">Password</label><br />
                        <input type="password" id="password" />
                        <label htmlFor="password2">Confirm Password</label><br />
                        <input type="password" id="password2" />
                        <h3>Group Rights</h3>
                        <input type="checkbox" name="vehicle" value="Bike"/>Right 1<br/>
                        <input type="checkbox" name="vehicle" value="Car"/>Right 2<br/><br />
                        <RaisedButton label="Save" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                    </form>
                </div>
            </div>
        )
    }
}