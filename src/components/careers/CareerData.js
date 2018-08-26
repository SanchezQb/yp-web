import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';
import Nav from '../Nav'
import axios from 'axios'
import CareerAppliedItem from './CareerAppliedItem'

export default class ElectoralData extends Component {
    state = {
        isLoading: true,
        data: this.props.location.state,
        appliedUsers: []
    }

    handleClick = () => {
        this.props.history.push(`/careers/edit/${this.state.data.id}`, this.state.data)
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({
            appliedUsers: res.data,
            isLoading: false
        }))
    }

    render() {
        const users = this.state.appliedUsers.map((appliedUser) => {
            return (
                <CareerAppliedItem key={appliedUser.id} item={appliedUser} history={this.props.history}/>
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
                    <div>
                        <RaisedButton className="action-buttons" label="Edit Career" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                    </div>
                    <h3>Users Applied</h3>
                    {renderData}
                    {users}
                </div>
            </div>
        )
    }
}