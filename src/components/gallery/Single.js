import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';

export default class Single extends Component {
    state = {
        isLoading: true,
        data: this.props.location.state
    }

    handleClick = () => {
        this.props.history.push(`/gallery/edit/${this.state.data.id}`, this.state.data)
    }

    render() {
        const image = this.state.data
        return (
            <div>
                <Nav />
                <div class="container">
                    <img src={image.url} alt={image.title} class="image"/>
                    <div class="overlay">
                        <div class="text">{image.title}</div>
                    </div>
                </div>
                <div className="button-container">
                    <RaisedButton className="action-buttons" label="Edit Image Data" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                    <RaisedButton label="Delete Image" backgroundColor="#F44336" labelColor="#fff" onClick={this.handleClick}/>
                </div>
            </div>
        )
    }
}