import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ToggleCheckBox from 'material-ui/svg-icons/toggle/check-box';
import FlatButton from 'material-ui/FlatButton';
import { StateData } from '../../StateData'
import { ConstituencyData } from '../../ConstituencyData'
import CircularProgress from 'material-ui/CircularProgress';
import '../../App.css'
import axios from 'axios'
import config from '../../config';


const styles = {
    input: {
       paddingVertical: 4
    }
  };

export default class AddTownHall extends Component {

    state = {
        title: '',
        level: 'Federal',
        state: '',
        local: '',
        location: ['Federal'],
        stateConstituency: [],
        federalConstituency: [],
        selectedLGAs: [],
        selectedConstituency: [],
        disabled: false,
        open: false,
        users: [],
        items: [],
        focus: null,
        isLoading: true,
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

    componentDidMount() {
        this.fetchFocus()
    }

    fetchFocus = async () => {
        const authToken = JSON.parse(localStorage.getItem('authenticated'))
        await axios({
            url: `${config.baseUrl}/users`, 
            method: 'GET', 
            headers: {
                "Content-Type": "application/json",
                "Authorization": authToken
            },
        }).then(res => {
           this.setState({
               isLoading: false,
               users: res.data.data
           })
        }).then(() => {
            this.setState({
                items: this.state.users
            })
        })
        .catch(err => {
            this.setState({
                isLoading: false,
                error: true
            })
        })
    }
    filterList = (text) => {
        let updatedList = this.state.users
        updatedList = updatedList.filter(v => {
            return v.firstname.toLowerCase().search(
                text.toLowerCase()) !== -1;
        })
        this.setState({
            items: updatedList
        })
    }

   handleClick = () => {
        this.setState({open: true})
    }

    handleClose = () => {
        this.setState({open: false})
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
            selectedConstituency: item,
            location: item
        })
        alert(`${item.join(', ')} selected`)
    }

    addTownHall = async () => {
        const authToken = JSON.parse(localStorage.getItem('authenticated'))        
        const request = {
            topic: this.state.title,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            members: [],
            focus: {
                user: this.state.focus,
            },
            details: {
                description: this.state.description,
                location: this.state.location
            }
        }
       if(!this.state.title) return alert('Please specify townhall title')
       if(!this.state.description) return alert('Please provide some description')
       if(!this.state.focus) return alert('Please select townhall focus')
       this.setState({disabled: true})
       await axios({
        url: `${config.messagingUrl}?type=3`, 
        method: 'POST', 
        headers: {
            "Content-Type": "application/json",
            "Authorization": authToken
        },
        data: request
        })
        .then(res => {
            this.setState({disabled: false})
            alert('Town hall added successfully')
            this.props.history.push('/home')
        })
        .catch(err => {
            this.setState({disabled: false})
           alert('An error occured while adding townhall, please try again ')
        })
    }

    handleSelect = (focus) => {
        this.setState({focus})
    }

    renderRightIcon = (item) => {
        if(this.state.focus && this.state.focus.id === item.id) {
            return <ToggleCheckBox />
        }
        else return null
    }
   
    render() {
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#434d65" size={60} thickness={5} />
                    </div>
                </div>
            )
        }
        const actions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleClose}
            />,
          ];
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Town Hall Meeting</h2>
                    <form className="edit-form">
                        <label htmlFor="name">Title</label><br/>
                        <input type="text" id="name" onChange={(e) => this.setState({title: e.target.value})} /><br/>

                        <label htmlFor="title">Description</label><br/>
                        <textarea maxLength="280" type="text" id="username" name="bio" onChange={(e) => this.setState({description: e.target.value})}/>

                         <label htmlFor="start">Start Date</label><br/>
                        <input type="datetime-local" onChange={(e) => this.setState({startDate: e.target.value})} id="end"/><br />

                        <label htmlFor="start">End Date</label><br/>
                        <input type="datetime-local" onChange={(e) => this.setState({endDate: e.target.value})} id="end"/><br />
                        {this.state.focus ? <h3>{`${this.state.focus.firstname} ${this.state.focus.lastname}`}</h3>: null}
                        <RaisedButton label="Add Focus" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/><br /><br />
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
                                        this.setState({state: e.target.value, location: [e.target.value]}, () => {
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
                                    <select onChange={(e) => this.setState({local: e.target.value, location: [e.target.value]})}>
                                        <option style={{color: '#000'}}label='Select LGA'>Select LGA</option>
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
            
                        <RaisedButton disabled={this.state.disabled} label="Save" backgroundColor="#64DD17" labelColor="#fff" onClick={this.addTownHall}/>
                        <Dialog
                            title="Add Focus"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                            autoScrollBodyContent={true}
                            >
                            <div style={styles.block}>
                                <input type="text" placeholder='Search by firstname' style={styles.input} onChange={(e) => this.filterList(e.target.value)} id="end"/><br />
                                <List>
                                {this.state.items.map(item => {
                                    return (
                                        <ListItem
                                            key={item.id}
                                            style={styles.listItem}
                                            onClick={() => this.handleSelect(item)}
                                            primaryText={`${item.firstname} ${item.lastname}`}
                                            rightIcon={this.renderRightIcon(item)}
                                            leftAvatar={item.avatar ? <Avatar src={item.avatar}/>: <Avatar>{item.firstname.split("")[0]}</Avatar>}
                                        />
                                    )
                                })}
                                </List>
                            </div>
                        </Dialog>
                    </form>
                </div>
            </div>
        )
    }
}

