import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import Nav from '../Nav'
import axios from 'axios'
import CandidateUsersItem from './CandidateUsersItem'

export default class CandidateDonationData extends Component {
    state = {
        isLoading: true,
        data: this.props.location.state,
        donatedUsers: []
    }

    handleClick = () => {
        this.props.history.push(`/candidate-donations/edit/${this.state.data.id}`, this.state.data)
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({
            donatedUsers: res.data,
            isLoading: false
        }))
    }

    render() {
        const users = this.state.donatedUsers.map((donatedUser) => {
            return (
                <CandidateUsersItem key={donatedUser.id} item={donatedUser} history={this.props.history}/>
            )
        })
        const isLoading = this.state.isLoading;
        const renderData = isLoading ? (
            <div className="loader">
                <CircularProgress color="#1e0d61" size={60} thickness={5} />
            </div>
        ) : (
          <div></div>
        );
    
        return (
            <div>
                <Nav />
                <div className = "wrap">
                    <h2>{this.state.data.title}</h2>
                    <h3>Users Donated</h3>
                    {renderData}
                    {users}
                </div>
            </div>
        )
    }
}