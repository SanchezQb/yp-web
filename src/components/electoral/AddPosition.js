import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';
import { StateData } from '../../StateData'
import { ConstituencyData } from '../../ConstituencyData'
import '../../App.css'
import axios from 'axios'
import accountStore from '../../stores/Account'


export default class AddPosition extends Component {

    state = {
        name: '',
        level: 'Federal',
        state: '',
        type: 1,
        local: '',
        meta: {},
        closing: '',
        requirement1: '',
        requirement2: '',
        requirement3: '',
        requirements: [],
        stateConstituency: [],
        federalConstituency: [],
        selectedLGAs: [],
        selectedConstituency: [],
        disabled: false

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

    addElectoralCandidate = () => {

    }

    setStateConstituency = () => {
        let stateConstituency = []
        ConstituencyData.map((v) => {
            let state = v['state']['name']
            if(state === this.state.state) {
                let constituency = v['state']['stateConstituency']
                constituency.map((v, i) => {
                    stateConstituency.push(v['locals'])
                })
            }
        })
        this.setState({
            stateConstituency
        })
    }
    setFederalConstituency = () => {
        let federalConstituency = []
        ConstituencyData.map((v) => {
            let state = v['state']['name']
            if(state === this.state.state) {
                let constituency = v['state']['federalConstituency']
                constituency.map((v, i) => {
                    federalConstituency.push(v['locals'])
                })
            }
        })
        this.setState({
            federalConstituency
        })
    }
    handleSelectConstituency = (item) => {
        this.setState({
            selectedConstituency: item
        })
        alert(`${item.join(', ')} selected`)
    }

    addPosition = async () => {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NTgsInJvbGUiOjUsInVzZXJuYW1lIjoiYm9va3R1c29sdXRpb25zIiwibGFzdG5hbWUiOm51bGwsImVtYWlsIjoidGVjaG5pY2FsQGJvb2t0dS5vcmciLCJmaXJzdG5hbWUiOiJCb29rdHUgU29sdXRpb25zIiwiYXZhdGFyIjpudWxsLCJudF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnViM1JwWm1sallYUnBiMjV6SWpwYlhYMC5zVUNEcWs4SEpBOW5Pb05Fc2lRbGZRbWRuaWxfT0hXS0d3eFNhMnFiUHQ4IiwibWV0YSI6bnVsbCwidmluIjpudWxsLCJtZW1iZXJzaGlwX251bWJlciI6bnVsbH0.xPMheOdUtHeHUHRbc_zJW9q1Vvq0lJwz0WRvBSPF0Co'
        const request = {
            name: this.state.name,
            type: this.state.type,
            meta: {
                level: this.state.level || null,
                state: this.state.state || null,
                lga: this.state.local || null,
                constituency: this.state.selectedConstituency || null,
                closingDate: this.state.closing || null,
                requirements: [this.state.requirement1, this.state.requirement2, this.state.requirement3] || null
            }
        }
       this.setState({disabled: true})
       if(!this.state.name || !this.state.type) {
           return alert('Please fill in all fields')
       }
       await axios({
        url: 'https://ypn-election-02.herokuapp.com/api/position', 
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
            "Authorization": token
        },
        data: request
        })
        .then(res => {
            this.setState({disabled: false})
            alert('Position added successfully')
            this.props.history.pop()
        })
        .catch(err => {
            this.setState({disabled: false})
            console.log(err)
        })
    }
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Position</h2>
                    <form className="edit-form">
                        <label htmlFor="name">Name</label><br/>
                        <input type="text" id="name" onChange={(e) => this.setState({name: e.target.value})} /><br/>
                        <div>
                            <label htmlFor="level">Level</label><br/>
                            <select 
                                id="level"
                                onChange={(e) => this.setState({level: e.target.value}, () => {
                                    if(this.state.level === 'federal'){
                                        this.setState({type: 1})
                                    }
                                    else if(this.state.level === 'state' || this.state.level === 'house of reps' || this.state.level == 'senate'){
                                        this.setState({type: 2})
                                    }
                                    else {
                                        this.setState({type: 3})
                                    }
                                })}>
                                <option value="Federal">Federal</option>
                                <option value="State">State</option>
                                <option value="Senate">Senate</option>
                                <option value="House of Reps">House of Representatives</option>
                                <option value="Local">Local Government</option>
                            </select> 
                        </div>
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
                                    <label>State</label><br/>
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
                                    <label>Local Government</label><br/>
                                    <select onChange={(e) => this.setState({local: e.target.value})}>
                                        {this.state.selectedLGAs}
                                    </select> 
                                </div>
                            </div>
                        :
                        null
                        }
                        {this.state.level === 'Senate' ?
                            <div>
                                <div>
                                    <label>State</label><br/>
                                    <select
                                        onChange={(e) => {
                                            this.setState({state: e.target.value}, () => {
                                                this.setStateConstituency()
                                            })
                                        }}
                                    >
                                    {
                                        StateData.map((item, index) => {
                                            let state = item['state']['name'];
                                            return <option key={index} value={state} label={state}>{state}</option>
                                        })
                                        }
                                    </select> 
                                </div>
                                <div>
                                    <h5>Senate Constituency</h5>
                                    {this.state.stateConstituency.map((item, i) => {
                                           return (
                                               <h5 key={i} style={{cursor: 'pointer', fontWeight: 100, paddingTop: 10,paddingBottom: 10, margin: 0, backgroundColor: this.state.backgroundColor}}onClick={() => this.handleSelectConstituency(item)} className="contData">{item.join(", ")}</h5>
                                           )
                                       })}
                                </div>
                            </div>
                        :
                        null
                        }
                        {this.state.level === 'House of Reps' ?
                            <div>
                                <div>
                                    <label>State</label><br/>
                                    <select
                                        onChange={(e) => {
                                            this.setState({state: e.target.value}, () => {
                                                this.setFederalConstituency()
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
                                    <h5>House of reps Constituency</h5>
                                    {this.state.federalConstituency.map((item, i) => {
                                           return (
                                               <h5 className="contData" key={i} style={{cursor: 'pointer', fontWeight: 100, paddingTop: 10,paddingBottom: 10, margin: 0, backgroundColor: this.state.backgroundColor}} onClick={() => this.handleSelectConstituency(item)} className="contData">{item.join(", ")}</h5>
                                           )
                                       })}
                                       
                                </div>
                            </div>
                        :
                        null
                        }
                        <label htmlFor="start">Closing Date</label><br/>
                        <input type="datetime-local" onChange={(e) => this.setState({closing: e.target.value})} id="end"/><br />
                        <label htmlFor="name">Requirements</label><br/>
                        <span>1</span><input type="text" id="name" onChange={(e) => this.setState({requirement1: e.target.value})}/><br/>
                        <span>2</span><input type="text" id="name" onChange={(e) => this.setState({requirement2: e.target.value})}/><br/>
                        <span>3</span><input type="text" id="name" onChange={(e) => this.setState({requirement3: e.target.value})}/><br/>
                        <RaisedButton disabled={this.state.disabled} label="Save" backgroundColor="#64DD17" labelColor="#fff" onClick={this.addPosition}/>
                    </form>
                </div>
            </div>
        )
    }
}