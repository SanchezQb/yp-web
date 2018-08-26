import React, { Component } from 'react'
import Button from 'material-ui/Button';
import Nav from '../Nav'

export default class VolunteersData extends Component {
    state = {
        isLoading: true,
        data: this.props.location.state
    }

    handleClick = () => {
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
                <Nav />
                <div className = "wrap">
                    <h2>{this.state.data.name}</h2>
                    <div>
                        <Button variant="raised" className="export-button">
                            Default
                        </Button>                        
                        <Button variant="raised" className="export-button">
                            Default
                        </Button>                   
                     </div>
                </div>
            </div>
        )
    }
}