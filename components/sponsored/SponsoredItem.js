import React, { Component } from 'react'
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default class SponsoredItem extends Component {
    state = {
        item: this.props.item,
        history: this.props.history
    }

    handleClick = () => {
        this.state.history.push(`/sponsored-candidates/${this.state.item.id}`, this.state.item)
    }
    render() {
        return (
                <TableRow onClick={() => this.handleClick()} className="table-row">
                        <TableRowColumn>{this.state.item.id}</TableRowColumn>
                        <TableRowColumn>{this.state.item.name}</TableRowColumn>
                        <TableRowColumn>{this.state.item.username}</TableRowColumn>
                </TableRow>
            
        )
    }
}