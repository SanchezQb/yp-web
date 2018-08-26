import React, { Component } from 'react'
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';


export default class DebateItem extends Component {
    state = {
        item: this.props.item,
        history: this.props.history
    }

    handleClick = () => {
        this.state.history.push(`/debate/${this.state.item._id}`, this.state.item)
    }
    render() {
        return (
            <div>
                <ListItem
                    onClick={() => this.handleClick()}
                    primaryText={`Q. ${this.state.item.topic}`}
                    // secondaryText={`A. ${this.state.item.body}`}
                />
                <Divider /> 
            </div> 
        )
    }
}