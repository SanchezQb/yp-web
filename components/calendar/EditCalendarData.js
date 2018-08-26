import React, { Component } from 'react'
import Button from 'material-ui/Button';
import Nav from '../Nav'

export default class EditElectoral extends Component {
    

    handleClick = () => {
        this.props.history.push('/home')
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>{this.props.location.state.title}</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title" value={this.props.location.state.title} /><br/>
                        <Button variant="raised" className="export-button">
                            Default
                        </Button>                    
                    </form>
                </div>
            </div>
        )
    }
}