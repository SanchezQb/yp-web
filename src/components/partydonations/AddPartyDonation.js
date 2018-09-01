import React, { Component } from 'react'
import Nav from '../Nav';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import { StateData } from '../../StateData'
import config from '../../config';

export default class AddPartyDonation extends Component {
    state = { 
        disabled: false,
        level: 1,
        local: '',
        selectedLGAs: [],
     };
        handleChange = (e) => this.setState({ [e.target.getAttribute('name')]: e.target.value});

        // handleSubmit = () => {
        //     const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NTgsInJvbGUiOjUsInVzZXJuYW1lIjoiYm9va3R1c29sdXRpb25zIiwibGFzdG5hbWUiOm51bGwsImVtYWlsIjoidGVjaG5pY2FsQGJvb2t0dS5vcmciLCJmaXJzdG5hbWUiOiJCb29rdHUgU29sdXRpb25zIiwiYXZhdGFyIjpudWxsLCJudF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnViM1JwWm1sallYUnBiMjV6SWpwYlhYMC5zVUNEcWs4SEpBOW5Pb05Fc2lRbGZRbWRuaWxfT0hXS0d3eFNhMnFiUHQ4IiwibWV0YSI6bnVsbCwidmluIjpudWxsLCJtZW1iZXJzaGlwX251bWJlciI6bnVsbH0.xPMheOdUtHeHUHRbc_zJW9q1Vvq0lJwz0WRvBSPF0Co'
        //     // const { token2 } = JSON.parse(localStorage.getItem('admin'))
        //     if(!token) return alert('Please sign in as an admin to proceed')
            
        //     if(!this.state.title || !this.state.location) return alert('Please specify the position of this exco');
        //     data[`${this.state.role}`] = this.state;
        //     this.setState({disabled: true})
        //     axios.request({
        //         method: 'put',
        //         url: `${config.electionUrl}/excos`,
        //         data,
        //         headers: {
        //             Authorization: token
        //         }
        //     })
        //     .then(() => {
        //         this.setState({disabled: false });
        //         alert(`Successfully added ${this.state.firstname} as the ${this.state.role}`)
        //         this.props.history.push('/home');
        //     })
        //     .catch((err) => {
        //         this.setState({ disabled: false });
        //         alert(err.response.data.message || `Something went wrong and we could not complete that action. Try again`);
        //     })
        // }
        handleSubmit = async () => {
            const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NTgsInJvbGUiOjUsInVzZXJuYW1lIjoiYm9va3R1c29sdXRpb25zIiwibGFzdG5hbWUiOm51bGwsImVtYWlsIjoidGVjaG5pY2FsQGJvb2t0dS5vcmciLCJmaXJzdG5hbWUiOiJCb29rdHUgU29sdXRpb25zIiwiYXZhdGFyIjpudWxsLCJudF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnViM1JwWm1sallYUnBiMjV6SWpwYlhYMC5zVUNEcWs4SEpBOW5Pb05Fc2lRbGZRbWRuaWxfT0hXS0d3eFNhMnFiUHQ4IiwibWV0YSI6bnVsbCwidmluIjpudWxsLCJtZW1iZXJzaGlwX251bWJlciI6bnVsbH0.xPMheOdUtHeHUHRbc_zJW9q1Vvq0lJwz0WRvBSPF0Co'
            const request = {
                target: this.state.target,
                title: this.state.title,
                description: this.state.description,
                type: 1,
                meta: {
                    type: this.state.level,
                    location: this.state.location
                }
            }
            if(!this.state.title) return alert('Please specify title')
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
                  "Authorization": token,
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
        console.log(this.state)
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Party Donation</h2>
                    <form className="edit-form">
                        <label htmlFor="name">Title </label><br/>
                        <input type="text" id="name" name="role" onChange={(e) => this.setState({title: e.target.value})}/><br/>
                    
                        <label htmlFor="name">Target</label><br/>
                        <input type="number" id="name" name="firstname" onChange={(e) => this.setState({target: e.target.value})}/><br/>

                        <label htmlFor="username">Description</label><br />
                        <textarea type="text" id="username" name="bio" onChange={this.handleChange}/>

                        <select 
                            id="level"
                            onChange={(e) => this.setState({level: e.target.value})}>
                            <option value={1}>Federal</option>
                            <option value={2}>State</option>
                            <option value={3}>Local Government</option>
                        </select>
                        {this.state.level === 'State' ?
                            <div>
                               <label>State</label><br/>
                                <select
                                    id="state"
                                    onChange={(e) => {
                                        this.setState({state: e.target.value, location: e.target.value}, () => {
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
                                            this.setState({state: e.target.value, location: e.target.value}, () => {
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
                                    <select onChange={(e) => this.setState({local: e.target.value, location: e.target.value})}>
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