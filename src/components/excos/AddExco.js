import React, { Component } from 'react'
import Nav from '../Nav';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import { StateData } from '../../StateData'
import config from '../../config';

export default class AddExco extends Component {
    state = { 
        disabled: false,
        level: 'Federal',
        state: '',
        local: '',
        selectedLGAs: [],
     };
        handleChange = (e) => this.setState({ [e.target.getAttribute('name')]: e.target.value});

        handleSubmit = () => {
            const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NTgsInJvbGUiOjUsInVzZXJuYW1lIjoiYm9va3R1c29sdXRpb25zIiwibGFzdG5hbWUiOm51bGwsImVtYWlsIjoidGVjaG5pY2FsQGJvb2t0dS5vcmciLCJmaXJzdG5hbWUiOiJCb29rdHUgU29sdXRpb25zIiwiYXZhdGFyIjpudWxsLCJudF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnViM1JwWm1sallYUnBiMjV6SWpwYlhYMC5zVUNEcWs4SEpBOW5Pb05Fc2lRbGZRbWRuaWxfT0hXS0d3eFNhMnFiUHQ4IiwibWV0YSI6bnVsbCwidmluIjpudWxsLCJtZW1iZXJzaGlwX251bWJlciI6bnVsbH0.xPMheOdUtHeHUHRbc_zJW9q1Vvq0lJwz0WRvBSPF0Co'
            // const { token2 } = JSON.parse(localStorage.getItem('admin'))
            if(!token) return alert('Please sign in as an admin to proceed')
            const data = {}; 
            if(!this.state.role) return alert('Please specify the position of this exco');
            data[`${this.state.role}`] = this.state;
            this.setState({disabled: true})
            axios.request({
                method: 'put',
                url: `${config.electionUrl}/excos`,
                data,
                headers: {
                    Authorization: token
                }
            })
            .then(() => {
                this.setState({disabled: false });
                alert(`Successfully added ${this.state.firstname} as the ${this.state.role}`)
                this.props.history.push('/home');
            })
            .catch((err) => {
                this.setState({ disabled: false });
                alert(err.response.data.message || `Something went wrong and we could not complete that action. Try again`);
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
                    <h2>Add Exco</h2>
                    <form className="edit-form">
                        <label htmlFor="name">Role (what office does this person hold?) </label><br/>
                        <input type="text" id="name" name="role" onChange={this.handleChange}/><br/>
                    
                        <label htmlFor="name">Firstname</label><br/>
                        <input type="text" id="name" name="firstname" onChange={this.handleChange}/><br/>

                        <label htmlFor="name">Lastname</label><br/>
                        <input type="text" id="name" name="lastname" onChange={this.handleChange}/><br/>

                        <label htmlFor="username">Bio</label><br />
                        <textarea type="text" id="username" name="bio" onChange={this.handleChange}/>

                        <label htmlFor="name">Image (Secure URL)</label><br/>
                        <input type="text" id="image" name="avatar" onChange={this.handleChange}/><br/>

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
                                    <select onChange={(e) => this.setState({local: e.target.value})}>
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