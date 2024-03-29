import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { ChatFeed } from 'react-chat-ui'
import { CSVLink } from 'react-csv';
import Nav from '../Nav'

export default class TownHallData extends Component {
    state = {
        isLoading: true,
        data: this.props.location.state,
        messages: [
            {
                id: 1,
                message: "I'm the recipient! (The person you're talking to)",
                senderName: 'Elon Musk'
              }, // Gray bubble
              { 
                  id: 2,
                  message: "I'm you -- the blue bubble!",
                  senderName: 'Hasstrup Ezekiel'
              }, // Blue bubble
              { 
                  id: 3,
                  message: "I'm you -- the blue bubble!",
                  senderName: 'Baysix'
              }, // Blue bubble
              { 
                  id: 0, 
                  message: "I'm you -- the blue bubble!",
                  senderName: 'Chisom' 
              },
              {
                  id: 1,
                  message: "I'm the recipient! (The person you're talking to)",
                  senderName: 'Elon Musk'
                }, // Gray bubble
                { 
                    id: 2,
                    message: "I'm you -- the blue bubble!",
                    senderName: 'Hasstrup Ezekiel'
                }, // Blue bubble
                { 
                    id: 3,
                    message: "I'm you -- the blue bubble!",
                    senderName: 'Baysix'
                }, // 
                {
                  id: 1,
                  message: "I'm the recipient! (The person you're talking to)",
                  senderName: 'Elon Musk'
                }, // Gray bubble
                { 
                    id: 2,
                    message: "I'm you -- the blue bubble!",
                    senderName: 'Hasstrup Ezekiel'
                }, // Blue bubble
                { 
                    id: 3,
                    message: "I'm you -- the blue bubble!",
                    senderName: 'Baysix'
                }, // 
            ]  
    }

    handleClick = () => {
        this.props.history.push(`/townhall/edit/${this.state.data.id}`, this.state.data)
    }

    render() {
        return (
            <div>
                <Nav />
                <div className = "wrap">
                    <h2>{this.state.data.title}</h2>
                    <div>
                        <RaisedButton className="action-buttons" label="Edit Meeting" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                        <RaisedButton label="Delete Meeting" backgroundColor="#F44336" labelColor="#fff" onClick={this.handleClick}/>
                    </div>
                    <h3>Chat Messages</h3>
                    <CSVLink filename={"debate-messages.csv"} data={this.state.messages}>
                        <RaisedButton className="export-button" label="Export CSV" onClick={this.export}/> 
                    </CSVLink>
                    <div className="chat">
                        <ChatFeed
                            maxHeight={300}
                            messages={this.state.messages} // Boolean: list of message objects
                            hasInputField={false} // Boolean: use our input, or use your own
                            bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
                            // JSON: Custom bubble styles
                            showSenderName
                            bubbleStyles={
                                {
                                text: {
                                    fontSize: 30,
                                },
                                chatbubble: {
                                    borderRadius: 4,
                                    padding: 40
                                }
                                }
                            }
                            />
                    </div>
                </div>
            </div>
        )
    }
}