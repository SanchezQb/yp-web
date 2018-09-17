import React, { Component } from 'react';
import axios from 'axios';
import qs from 'query-string'
import Failure from './failure';
import './main.css'

export default class ForgotPasswordPage extends Component {
	state = { 
		processing: true
	}

	componentDidMount = () => {
	 const { tk } = qs.parse(this.props.location.search)
	 axios({
		 method: 'get',
		 url: `https://ypn-base-01.herokuapp.com/reset/password/?tk=${tk}`,
	 })
	 .then((response) => this.setState({ processing: false, success: true, token: response.data.data.token }))
	 .catch((err) => this.setState({ processing: false, success: false }))
	}

	handleChange = (e) => this.setState({ [e.target.getAttribute('name')]: e.target.value });

	handleSubmitForm = (e) => {
		e.preventDefault();
		const { token } = this.state;
		if(!this.state.password || !this.state.password2) return alert('Please fill in all the fields');
		if(this.state.password !== this.state.password2) return alert('Seems like those passwords dont match');
		axios({
			method: 'put',
			url: `https://ypn-base-01.herokuapp.com/user`,
			data: {
				user: {
					password: this.state.password
				}
			},
			headers: {
				Authorization: token
			}
		})
		.then(() => {
			alert('Successfully reset your password')
			window.open('https://youthpartyng.com/', '_self')
		})
		.catch((err) => {
			alert('Something went wrong and we could not reset your password, Please try again')
		})
	}

	render() {
		if(this.state.processing) return (
			<div style={{ height: '100vh', width: '100%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
						<p style={{ fontSize: '20px', fontWeight: '600', color: '#E5E7E9' }}>Loading</p>
			</div>
		);
		if(!this.state.success) return (
			<Failure />
		)
		return (
			<div>
				<div class="logo">
					<a href="https://www.youthpartyng.com"><img src="logo.png" /></a>
				</div>
				<div class="form">
					<form>
						<label class="label" for="password">New Password</label><br/>
						<input id="password" type="password" name="password" onChange={this.handleChange} /><br/>
						<label class="label" for="password2">Confirm Password</label><br/>
						<input id="password2" type="password" name="password2" onChange={this.handleChange}/><br/>
						<button type="submit" onClick={this.handleSubmitForm}>Submit</button>
					</form>
				</div>
			</div>	
		)
	}
}


