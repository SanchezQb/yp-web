import React, { Component } from 'react'
import Nav from './Nav'
import Button from 'material-ui/Button';

export default class Membership extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Membership</h2>
                    <div className="price-change">
                        <label id="membership" htmlFor="price">Current membership Price: NGN5,000</label><br/>
                        <input type="number" id="price" />
                        <Button variant="raised" className="export-button">
                            Default
                        </Button>                    
                    </div>
                </div>
            </div>
        )
    }
}