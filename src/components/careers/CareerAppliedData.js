import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import Nav from '../Nav'

export default class CareerAppliedData extends Component {
    state = {
        data: this.props.location.state,
        url: ''
      }
    
      onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
      }
    render() {
        return (
            <div>
                <Nav />
                <div className = "wrap">
                    <h2>{this.state.data.name}</h2>
                    <div style={{marginBottom: 20}}>
                        <RaisedButton className="action-buttons" label="Download CV" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                    </div>
                    <div>
                        <RaisedButton className="action-buttons" label="Approve" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                        <RaisedButton label="Reject" backgroundColor="#F44336" labelColor="#fff" onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        )
    }
}