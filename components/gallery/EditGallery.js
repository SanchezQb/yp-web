import React, { Component } from 'react'
import Button from 'material-ui/Button';
import Nav from '../Nav'

export default class EditExco extends Component {
    state = {
        title: this.props.location.state.title,
        url: this.props.location.state.url
    }

    handleClick = () => {
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Edit {this.state.title}</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title" value={this.state.title} /><br/>
                        <label htmlFor="url">Link / Url</label><br />
                        <input type="text" id="url" value={this.state.url} />
                        <Button variant="raised" className="export-button">
                            Default
                        </Button>                    
                    </form>
                </div>
            </div>
        )
    }
}