import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton';
import { ChatFeed } from 'react-chat-ui'
import { CSVLink } from 'react-csv';
import Nav from '../Nav'

export default class ChatData extends Component {
    state = {
        isLoading: true,
        data: this.props.location.state,
        messages: [
            {
              id: 1,
              message: "I'm the recipient! (The person you're talking to)",
            }, // Gray bubble
            { 
                id: 2,
                message: "I'm you -- the blue bubble!" 
            }, // Blue bubble
            { 
                id: 3,
                message: "I'm you -- the blue bubble!" 
            }, // Blue bubble
            { 
                id: 4, 
                message: "I'm you -- the blue bubble!"
             }, // Blue bubble
            { 
                id: 5, 
                message: "I'm you -- the blue bubble!" 
            },
            { 
                id: 0, 
                message: "I'm you -- the blue bubble!" 
            },
            { 
                id: 0, 
                message: "I'm you -- the blue bubble!" 
            }, // Blue bubble
            
          ],
    }

    render() {
        return (
            <div>
                <Nav />
                <div className = "wrap">
                    <h2>{this.state.data.title}</h2>
                    <div>
                    <h3>Chat Messages</h3>
                        <CSVLink filename={"debate-messages.csv"} data={this.state.messages}>
                            <RaisedButton className="export-button" label="Export CSV" onClick={this.export}/> 
                        </CSVLink>
                        <div className="chat">
                            <ChatFeed
                                messages={this.state.messages} // Boolean: list of message objects
                                hasInputField={false} // Boolean: use our input, or use your own
                                bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
                                // JSON: Custom bubble styles
                                showSenderName
                                bubbleStyles={
                                    {
                                    text: {
                                        fontSize: 30
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
            </div>
        )
    }
}