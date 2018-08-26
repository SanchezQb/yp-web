import React, { Component } from 'react'
import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios'
import Nav from '../Nav'
import ElectionPollsItem from './ElectionPollsItem'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  };


export default class ElectionPolls extends Component {
    state = {
        isLoading: true,
        election_polls: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => this.setState({
            isLoading: false,
            election_polls: res.data.slice(0, 10)
        }))
    }
    render() {
        const electionPollsData = this.state.election_polls.map(election_poll => {
            return (
                <ElectionPollsItem key={election_poll.id} item={election_poll} history={this.props.history}/>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#590649" size={60} thickness={5} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Nav />
                <div className="questions">
                    <h2>Election Polls</h2>
                    <div className="top">
                        <input type="text" placeholder="search" />  
                        <h5>View History</h5> 
                    </div>
                    <List>
                       {electionPollsData}
                    </List>
                </div>
                <FloatingActionButton style={style} onClick={() => {
                        this.props.history.push('/election-polls/add')
                    }}>
                        <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}