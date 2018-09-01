import React, { Component } from 'react'
import './main.css'

export default class Success extends Component {
	render() {
		return (
			<div>
				<div class="logo">
					<a href="https://www.youthpartyng.com"><img src="logo.png" /></a>
				</div>
				<div class="form">
					<form>
						<label class="label" for="password">New Password</label><br/>
						<input id="password" type="password" name="password"/><br/>
						<label class="label" for="password2">Confirm Password</label><br/>
						<input id="password2" type="password" name="password2"/><br/>
						<button type="submit">Submit</button>
					</form>
				</div>
			</div>	
		)
	}
}


