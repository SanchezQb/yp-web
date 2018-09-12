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
        const authToken = JSON.parse(localStorage.getItem('authenticated'))
        const request = {
            details: {
                description: this.state.description
            },
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            topic: this.state.topic,
            members: []
            
        }
        this.setState({disabled: true})
        await axios({
          mode:'no-cors',
          url: `${config.messagingUrl}?type=2`, 
          method: 'POST', 
          data: request,
          headers: {
              "Content-Type": "application/json",
              "Authorization": authToken,
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
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Debate Topic</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Topic</label><br/>
                        <input type="text" id="title" onChange={(e) => this.setState({topic: e.target.value})}/><br/>

                        <label htmlFor="title">Description</label><br/>
                        <textarea maxLength="280" type="text" id="username" name="bio" onChange={(e) => this.setState({description: e.target.value})}/>

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