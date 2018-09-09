import React, { Component } from 'react'
import './main.css'
import logo from './logo.png'

export default class Failure extends Component {
	render() {
		return (
			<div>
				<div class="logo">
					<a href="https://www.youthpartyng.com"><img src={logo} /></a>
				</div>
				<div class="check">
					<svg id="i-close" viewBox="0 0 32 32" width="50" height="50" fill="none" stroke="#EA1B2A" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
						<path d="M2 30 L30 2 M30 30 L2 2" />
					</svg>
				</div>
				<h3 align="center">Sorry, this link is not valid</h3>
			</div>		
		)
	}
}
