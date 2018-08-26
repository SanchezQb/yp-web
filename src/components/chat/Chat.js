import React, { Component } from 'react'
import {List} from 'material-ui/List';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios'
import Nav from '../Nav'
import ChatItem from './ChatItem'


export default class Chat extends Component {
    state = {
        isLoading: true,
        chats: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => this.setState({
            isLoading: false,
            chats: res.data.slice(0, 10)
        }))
    }
    render() {
        const chatData = this.state.chats.map(chat => {
            return (
                <ChatItem key={chat.id} item={chat} history={this.props.history}/>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#72632f" size={60} thickness={5} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Nav />
                <div className="questions">
                    <h2>Group Chats</h2>
                    <div className="top">
                        <input type="text" placeholder="search" />   
                    </div>
                    <List>
                       {chatData}
                    </List>
                </div>
            </div>
        )
    }
}