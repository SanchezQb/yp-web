import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';
import { StateData } from '../../StateData'
import { ConstituencyData } from '../../ConstituencyData'
import '../../App.css'


export default class AddElectoral extends Component {

    state = {
        position: '',
        state: '',
        local: '',
        stateConstituency: [],
        federalConstituency: [],
        selectedLGAs: [],
        selectedConstituency: [],
        backgroundColor: '#fff',
        target: null

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
    render() {
        console.log(this.state)
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Electoral Candidate</h2>
                    <form className="edit-form">
                        <label htmlFor="name">Name</label><br/>
                        <input type="text" id="name" /><br/>
                        <label htmlFor="username">Username</label><br />
                        <input type="text" id="username" />
                        <div>
                            <h5>Position</h5>
                            <select 
                                onChange={(e) => this.setState({position: e.target.value})}>
                                <option value="president">President</option>
                                <option value="governor">Governor</option>
                                <option value="senate">Senate</option>
                                <option value="house of reps">House of Representatives</option>
                                <option value="local">Local Government</option>
                            </select> 
                        </div>
                        {this.state.position === 'governor' ?
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
                        :
                        null
                        }
                        {this.state.position === 'local' ?
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
                                        {this.state.selectedLGAs}
                                    </select> 
                                </div>
                            </div>
                        :
                        null
                        }
                        {this.state.position === 'senate' ?
                            <div>
                                <div>
                                    <h5>State</h5>
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
                        {this.state.position === 'house of reps' ?
                            <div>
                                <div>
                                    <h5>State</h5>
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
                                    <h5>Federal Constituency</h5>
                                    {this.state.federalConstituency.map((item, i) => {
                                           return (
                                               <h5 key={i} style={{cursor: 'pointer', fontWeight: 100, paddingTop: 10,paddingBottom: 10, margin: 0, backgroundColor: this.state.backgroundColor}} onClick={() => this.handleSelectConstituency(item)} className="contData">{item.join(", ")}</h5>
                                           )
                                       })}
                                       
                                </div>
                            </div>
                        :
                        null
                        }
                        <RaisedButton label="Save" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                    </form>
                </div>
            </div>
        )
    }
}