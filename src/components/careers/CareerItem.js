import React, { Component } from 'react'
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default class CareerItem extends Component {
    state = {
        item: this.props.item,
        history: this.props.history
    }

    handleClick = () => {
        this.state.history.push(`/careers/${this.state.item.id}`, this.state.item)
    }
    render() {
        return (
                <TableRow onClick={() => this.handleClick()} className="table-row">
                        <TableRowColumn>{this.state.item.title}</TableRowColumn>
                        <TableRowColumn>12</TableRowColumn>
                        <TableRowColumn>Federal</TableRowColumn>
                </TableRow>
            
        )
    }
}