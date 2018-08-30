import React, { Component } from 'react'
import Nav from '../Nav';
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton';
import config from '../../config';

export default class AddExco extends Component {
    state = { processing: false };
        handleChange = (e) => this.setState({ [e.target.getAttribute('name')]: e.target.value});

        handleSubmit = () => {
            if(this.state.processing) return alert('Currently processing your last request');
            const { token } = JSON.parse(localStorage.getItem('admin'))
            if(!token) return alert('Please sign in as an admin to proceed')
            const data = {}; 
            if(!this.state.role) return alert('Please specify the position of this exco');
            data[`${this.state.role}`] = this.state;
            alert('Making a call to the server right away');
           this.setState({ processing: true });
            axios.request({
                method: 'put',
                url: `${config.electionUrl}/excos`,
                data,
                headers: {
                    Authorization: token
                }
            })
            .then(() => {
                this.setState({ processing: false });
                alert(`Successfully added ${this.state.firstname} as the ${this.state.role}`)
                this.props.history.push('/home');
            })
            .catch((err) => {
                this.setState({ processing: false });
                alert(err.response.data.message || `Something went wrong and we could not complete that action. Try again`);
            })
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
                    
                        <label htmlFor="name">firstname</label><br/>
                        <input type="text" id="name" name="firstname" onChange={this.handleChange}/><br/>

                        <label htmlFor="name">lastname</label><br/>
                        <input type="text" id="name" name="lastname" onChange={this.handleChange}/><br/>

                        <label htmlFor="username">Bio</label><br />
                        <textarea type="text" id="username" name="bio" onChange={this.handleChange}/>

                        <label htmlFor="username">Level(Federal, State or Local?)</label><br />
                        <input type="text" id="username" name="level" onChange={this.handleChange}/>

                        <label htmlFor="username">State (If any)</label><br />
                        <input type="text" id="username" name="state" onChange={this.handleChange}/>

                        <label htmlFor="username"> Lga (If any)</label><br />
                        <input type="text" id="username" name="lga" onChange={this.handleChange}/>
                        <RaisedButton label="Save" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleSubmit}/>
                    </form>
                </div>
            </div>
        )
    }
}