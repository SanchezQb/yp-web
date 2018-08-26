import React, { Component } from 'react'
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default class CandidateDonationItem extends Component {
    state = {
        item: this.props.item,
        history: this.props.history
    }

    handleClick = () => {
        this.state.history.push(`/candidate-donations/${this.state.item.id}`, this.state.item)
    }
    render() {
        return (
                <TableRow onClick={() => this.handleClick()} className="table-row">
                        <TableRowColumn>{this.state.item.title}</TableRowColumn>
                        <TableRowColumn>Federal</TableRowColumn>
                        <TableRowColumn>N500,000</TableRowColumn>
                </TableRow>
            
        )
    }
}