import React, { Component } from 'react'
import Nav from '../Nav';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import { StateData } from '../../StateData'
import config from '../../config';

export default class AddCampaignDonation extends Component {
    state = { 
        target: 0,
        title: '',
        description: '',
        disabled: false,
        level: 'Federal',
        local: '',
        location: 'Federal',
        selectedLGAs: [],
     };

        setType = () => {
            if(this.state.level === 'Federal') {
                return 1
            }
            else if(this.state.level === "State") {
                return 2
            }
            else if(this.state.level === "Local") {
                return 3
            }
            else {
                return 1
            }
        }
        handleSubmit = async () => {
            const authToken = JSON.parse(localStorage.getItem('authenticated'))
            const request = {
                target: parseInt(this.state.target),
                title: this.state.title,
                description: this.state.description,
                type: 3,
                meta: {
                    type: this.setType(),
                    location: this.state.location,
                    level: this.state.level
                }
            }
            if(!this.state.title) return alert('Please specify title')
            if(this.state.target === 0) return alert('Please Specify Target')
            if(!this.state.description) return alert('Please specify description')
            if(!this.state.location) return alert('Please specify location')
            this.setState({disabled: true})
            await axios({
              mode:'no-cors',
              url: `${config.nodeService}/donations`, 
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
            alert(`Successfully added donation, ${this.state.title}`)
            this.props.history.push('/home')
          })
          .catch(error => {
              console.log(error.response)
              this.setState({disabled: false})
              alert('An error occurred while adding debate, please try again')
          })
        }


        setLGAs = () => {						
            let selectedLGAs = [];
            StateData.map((v) => {
                let state = v['state']['name'];
                if(state === this.state.state){
                    let LGAS = v['state']['locals'];
                    LGAS.map((v,i) => {
                        selectedLGAs.push(<option key={i} value={v['name']} label={v['name']}>{v['name']}</option>);
                    });
                }
            });
            this.setState({
                selectedLGAs
            });
        }
    
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Project Donation</h2>
                    <form className="edit-form">
                        <label htmlFor="name">Title </label><br/>
                        <input type="text" id="name" name="role" onChange={(e) => this.setState({title: e.target.value})}/><br/>
                    
                        <label htmlFor="name">Target</label><br/>
                        <input type="number" id="name" name="firstname" onChange={(e) => this.setState({target: e.target.value})}/><br/>

                        <label htmlFor="username">Description</label><br />
                        <textarea type="text" id="username" name="description" onChange={(e) => this.setState({description: e.target.value})}/>

                         <select 
                            id="level"
                            onChange={(e) => this.setState({level: e.target.value})}>
                            <option value="Federal">Federal</option>
                            <option value="State">State</option>
                            <option value="Local">Local Government</option>
                        </select>
                        {this.state.level === 'State' ?
                            <div>
                               <label>State</label><br/>
                                <select
                                    id="state"
                                    onChange={(e) => {
                                        this.setState({state: e.target.value, location:`${e.target.value} State`}, () => {
                                            this.setLGAs()
                                        })
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
                        {this.state.level === 'Local' ?
                            <div>
                                <div>
                                    <h5>State</h5>
                                    <select
                                        onChange={(e) => {
                                            this.setState({state: e.target.value}, () => {
                                                this.setLGAs()
                                            })
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
                                <div>
                                    <h5>Local Government</h5>
                                    <select onChange={(e) => this.setState({local: e.target.value, location: `${e.target.value}, ${this.state.state} State`})}>
                                    <option style={{color: '#000'}}label='Select LGA'>Select LGA</option>
                                        {this.state.selectedLGAs}
                                    </select> 
                                </div>
                            </div>
                        :
                        null
                        }
                        <RaisedButton disabled={this.state.disabled} label="Save" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleSubmit}/>
                    </form>
                </div>
            </div>
        )
    }
}