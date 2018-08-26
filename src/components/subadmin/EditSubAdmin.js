import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Nav from '../Nav'

export default class Editquestionnaire extends Component {
    state = {
        title: this.props.location.state.name,
        body: this.props.location.state.body
    }

    handleClick = () => {
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>{this.state.title}</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title" value={this.state.title} /><br/>
                        <label htmlFor="email">Email</label><br />
                        <input type="email" id="email" />
                        <h3>Group Rights</h3>
                        <input type="checkbox" name="vehicle" value="Bike"/>Right 1<br/>
                        <input type="checkbox" name="vehicle" value="Car"/>Right 2<br/><br/>
                        <RaisedButton label="Save Changes" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                    </form>
                </div>
            </div>
        )
    }
}