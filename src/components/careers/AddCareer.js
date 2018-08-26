import React, { Component } from 'react'
import Nav from '../Nav'
import CKEditor from "react-ckeditor-component";
import RaisedButton from 'material-ui/RaisedButton';

export default class AddCareer extends Component {
    state= {
        content: 'content'
    }

    onChange(evt){
        console.log("onChange fired with event info: ",evt, "and data: ",evt.editor.getData());
        this.setState({
            content: evt.editor.getData()
        })
        console.log(this.state)
      }
    
      onBlur(evt){
        console.log("onBlur fired with event info: ",evt);
      }
    
      afterPaste(evt){
        console.log("afterPaste fired with event info: ",evt);
      }

    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Career</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title" /><br/>
                        <label htmlFor="positions">Positions</label><br />
                        <input type="number" id="positions" />
                        <div className="top">
                            <label htmlFor="positions">Level</label><br />
                            <select onChange={(e) => console.log(e.target.value)}>
                                <option value="all">All</option>
                                <option value="presidential">Federal</option>
                                <option value="governorship">State</option>
                                <option value="governorship">Local</option>
                            </select> 
                        </div><br />
                        <label>Description</label><br />
                        <CKEditor
                            content={this.state.content}
                            events={{
                            blur: this.onBlur,
                            afterPaste: this.afterPaste,
                            change: this.onChange.bind(this)
                            }}
                        /><br />
                        <RaisedButton label="Save Changes" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                    </form>
                </div>
            </div>
        )
    }
}