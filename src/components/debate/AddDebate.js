import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'
import config from '../../config';

export default class AddDebate extends Component {

    state = {
        disabled: false,
        description: '',
        topic: '',
        startDate: '',
        endDate: '',
    }


    handleSubmit = async () => {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NTgsInJvbGUiOjUsInVzZXJuYW1lIjoiYm9va3R1c29sdXRpb25zIiwibGFzdG5hbWUiOm51bGwsImVtYWlsIjoidGVjaG5pY2FsQGJvb2t0dS5vcmciLCJmaXJzdG5hbWUiOiJCb29rdHUgU29sdXRpb25zIiwiYXZhdGFyIjpudWxsLCJudF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnViM1JwWm1sallYUnBiMjV6SWpwYlhYMC5zVUNEcWs4SEpBOW5Pb05Fc2lRbGZRbWRuaWxfT0hXS0d3eFNhMnFiUHQ4IiwibWV0YSI6bnVsbCwidmluIjpudWxsLCJtZW1iZXJzaGlwX251bWJlciI6bnVsbH0.xPMheOdUtHeHUHRbc_zJW9q1Vvq0lJwz0WRvBSPF0Co'
        const request = {
            details: {
                title: this.state.topic,
                description: this.state.description
            },
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            topic: this.state.topic,
            
        }
        this.setState({disabled: true})
        await axios({
          mode:'no-cors',
          url: `${config.messagingUrl}?type=2`, 
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
        alert(`Successfully added debate, ${this.state.topic}`)
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
                <Nav />
                <div className="wrap">
                    <h2>Add Debate Topic</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Topic</label><br/>
                        <input type="text" id="title" onChange={(e) => this.setState({topic: e.target.value})}/><br/>

                        <label htmlFor="title">Description</label><br/>
                        <textarea type="text" id="username" name="bio" onChange={(e) => this.setState({description: e.target.value})}/>

                        <label htmlFor="start">Start Date</label><br/>
                        <input type="datetime-local" onChange={(e) => this.setState({startDate: e.target.value})} id="end"/><br />

                        <label htmlFor="start">End Date</label><br/>
                        <input type="datetime-local" onChange={(e) => this.setState({endDate: e.target.value})} id="end"/><br />
                        
                        <RaisedButton disabled={this.state.disabled} label="Save" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleSubmit}/>
                    </form>
                </div>
            </div>
        )
    }
}