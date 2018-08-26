import React, { Component } from 'react'
import Nav from '../Nav'
import Button from 'material-ui/Button';

export default class AddGallery extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Image</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title"/><br/>
                        <label htmlFor="url">Link / Url</label><br />
                        <input type="text" id="url" />
                        <Button variant="raised" className="export-button">
                            Default
                        </Button>                    
                    </form>
                </div>
            </div>
        )
    }
}