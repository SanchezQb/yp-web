import React from 'react';
import axios from 'axios';
import qs from 'query-string';
import Success from '../forgot/success';
import Failure from '../forgot/failure';

export default class ConfirmEmailPage extends React.Component {
    state = { 
        processsing: true
    }

    componentDidMount = () => {
        const { tk } = qs.parse(this.props.location.search)
	 axios({
		 method: 'get',
		 url: `https://ypn-base-01.herokuapp.com/confirm/mail/?tk=${tk}`,
	 })
	 .then((response) => this.setState({ processing: false, success: true, token: response.data.data.token }))
	 .catch((err) => this.setState({ processing: false, success: false }))
    }

    render = () => {
        if(this.state.processing) return (
            <div style={{ height: '100vh', width: '100%', flexDirection: 'column', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> 
						<p style={{ fontSize: '20px', fontWeight: '600', color: '#E5E7E9' }}>Loading</p>
			</div>
        )
        if(!this.state.success) return (
            <Failure />
        )
        return (
            <Success  message="Successfully confirmed your email"/>
        )
    }
}