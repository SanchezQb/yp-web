import React, { Component } from 'react'
import './main.css'

export default class Success extends Component {
	render() {
		return (
			<div>
				<div class="logo">
					<a href="https://www.youthpartyng.com"><img src="logo.png" /></a>
				</div>
				<div class="check">
					<svg id="i-checkmark" viewBox="0 0 32 32" width="50" height="50" fill="none" stroke="#82BE30" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
						<path d="M2 20 L12 28 30 4" />
					</svg>
				</div>
				<h3 align="center">Your password has successfully been reset</h3>
			</div>	
		)
	}
}
