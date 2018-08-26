import React, { Component } from 'react'
import { ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';


export default class CandidateUsersItem extends Component {
    state = {
        item: this.props.item,
        history: this.props.history
    }

    handleClick = () => {
        this.state.history.push(`/candidate-donations/donated/${this.state.item.id}`, this.state.item)
    }
    render() {
        return (
            <div>
                <ListItem
                    onClick={() => this.handleClick()}
                    primaryText={`Q. ${this.state.item.name}`}
                    secondaryText={`A. ${this.state.item.id}`}
                />
                <Divider /> 
            </div> 
        )
    }
}