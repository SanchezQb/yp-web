import React, { Component } from 'react'
import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios'
import Nav from '../Nav'
import TownHallItem from './TownHallItem'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  };


export default class TownHall extends Component {
    state = {
        isLoading: true,
        meetings: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => this.setState({
            isLoading: false,
            meetings: res.data
        }))
    }
    render() {
        const meetingsData = this.state.meetings.map(meeting => {
            return (
                <TownHallItem key={meeting.id} item={meeting} history={this.props.history}/>
            )
        })
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
        return (
            <div>
                <Nav />
                <div className="questions">
                    <h2>Town Hall Meetings</h2>
                    <div className="topic-search">
                        <input type="text" placeholder="search" />   
                    </div>
                    <List>
                       {meetingsData}
                    </List>
                </div>
                <FloatingActionButton style={style} onClick={() => {
                        this.props.history.push('/townhall/add')
                    }}>
                        <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}