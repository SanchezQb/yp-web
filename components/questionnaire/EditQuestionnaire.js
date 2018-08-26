import React, { Component } from 'react'
import Button from 'material-ui/Button';
import Nav from '../Nav'

export default class EditElectoral extends Component {
    state = {
        title: this.props.location.state.title,
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
                        <label htmlFor="title">Question</label><br/>
                        <input type="text" id="title" value={this.state.title} /><br/>
                        <label htmlFor="body">Answer</label><br />
                        <input type="text" id="body" value={this.state.body} />
                        <Button variant="raised" className="export-button">
                            Default
                        </Button>                    
                    </form>
                </div>
            </div>
        )
    }
}