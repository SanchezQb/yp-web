import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';
import { StateData } from '../../StateData'
import axios from 'axios'
import config from '../../config';

export default class AddCalendarEvent extends Component {

    state = {
        name: '',
        startDate: '',
        endDate: '',
        location: '',
        state:'',
        country: '',
        description: '',
        displayPicture: '',
        level: 'Federal',
        disabled: false    
    }

    handleSubmit = async () => {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NTgsInJvbGUiOjUsInVzZXJuYW1lIjoiYm9va3R1c29sdXRpb25zIiwibGFzdG5hbWUiOm51bGwsImVtYWlsIjoidGVjaG5pY2FsQGJvb2t0dS5vcmciLCJmaXJzdG5hbWUiOiJCb29rdHUgU29sdXRpb25zIiwiYXZhdGFyIjpudWxsLCJudF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnViM1JwWm1sallYUnBiMjV6SWpwYlhYMC5zVUNEcWs4SEpBOW5Pb05Fc2lRbGZRbWRuaWxfT0hXS0d3eFNhMnFiUHQ4IiwibWV0YSI6bnVsbCwidmluIjpudWxsLCJtZW1iZXJzaGlwX251bWJlciI6bnVsbH0.xPMheOdUtHeHUHRbc_zJW9q1Vvq0lJwz0WRvBSPF0Co'
        const request = {
            name: this.state.name,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            details: {
                location: this.state.location,
                state: this.state.state,
                country: this.state.country,
                description: this.state.description,
                displayPicture: this.state.displayPicture,
                level: this.state.level
            }
        }
        this.setState({disabled: true})
        await axios({
            mode:'no-cors',
            url: `${config.nodeService}/events`, 
            method: 'POST', 
            data: request,
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                'Access-Control-Allow-Origin': '*'
            },
        })
        .then(res => {
          this.setState({disabled: false})
          alert(`Successfully added event, ${this.state.name}`)
          this.props.history.push('/home')
        })
        .catch(error => {
            console.log(error.response)
            this.setState({disabled: false})
            alert('An error occurred while adding debate, please try again')
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <Nav/>
                <div className="wrap">
                    <h2>Add Event</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title" onChange={(e) => this.setState({name: e.target.value})}/><br/>

                        <label htmlFor="title">Description</label><br/>
                        <textarea type="text" id="username" name="bio" onChange={(e) => this.setState({description: e.target.value})}/>

                        <label htmlFor="start">Start Date</label><br/>
                        <input type="datetime-local" onChange={(e) => this.setState({startDate: e.target.value})} id="end"/><br />

                        <label htmlFor="start">End Date</label><br/>
                        <input type="datetime-local" onChange={(e) => this.setState({endDate: e.target.value})} id="end"/><br />

                        <label htmlFor="start">Select Level</label><br/>
                        <select 
                            id="level"
                            onChange={(e) => this.setState({level: e.target.value})}>
                            <option value="Federal">Federal</option>
                            <option value="State">State</option>
                        </select>
                        {this.state.level === 'State' ?
                            <div>
                               <label>State</label><br/>
                                <select
                                    id="state"
                                    onChange={(e) => {
                                        this.setState({state: e.target.value})
                                    }}
                                   >
                                   {
                                    StateData.map((item, index) => {
                                        let state = item['state']['name'];
                                        return <option style={{color: '#000'}}key={index} value={state} label={state}>{state}</option>
                                    })
                                    }
                                </select> 
                            </div>
                        :
                        null
                        }

                        <label>Location</label><br/>
                        <input type="text" onChange={(e) => this.setState({location: e.target.value})} id="end"/><br />

                        <label>Display Picture URL</label><br/>
                        <input type="text" onChange={(e) => this.setState({displayPicture: e.target.value})} id="end"/><br />
                        
                        <RaisedButton disabled={this.state.disabled} label="Save" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleSubmit}/>
                    </form>
                </div>
            </div>
        )
    }
}