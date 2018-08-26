import React, { Component } from 'react'
import Nav from '../Nav'
import Button from 'material-ui/Button';

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
                    <Button variant="raised" className="export-button">
                        Default
                    </Button>                    
                    <Button variant="raised" className="export-button">
                        Default
                    </Button>                
                </div>
            </div>
        )
    }
}