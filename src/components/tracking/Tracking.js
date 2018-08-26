import React, { Component } from 'react'
import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios'
import Nav from '../Nav'
import TrackingItem from './TrackingItem'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  };


export default class Opinion extends Component {
    state = {
        isLoading: true,
        tracking_polls: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => this.setState({
            isLoading: false,
            tracking_polls: res.data.slice(0, 10)
        }))
    }
    render() {
        const trackingData = this.state.tracking_polls.map(tracking => {
            return (
                <TrackingItem key={tracking.id} item={tracking} history={this.props.history}/>
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
                    <h2>Tracking Polls</h2>
                    <div className="top">
                        <input type="text" placeholder="search" />   
                    </div>
                    <List>
                       {trackingData}
                    </List>
                </div>
                <FloatingActionButton style={style} onClick={() => {
                        this.props.history.push('/tracking-polls/add')
                    }}>
                        <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}