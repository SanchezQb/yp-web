import React, { Component } from 'react'
import {
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';

export default class ExcosItem extends Component {
    state = {
        item: this.props.item,
        history: this.props.history
    }

    handleClick = () => {
        this.state.history.push(`/excos/view`, this.state.item)
    }
    render() {
        return (
                <TableRow onClick={() => this.handleClick()} className="table-row">
                    <TableRowColumn>{this.state.item.value.firstname} {this.state.item.value.lastname}</TableRowColumn>
                    <TableRowColumn>{this.state.item.position}</TableRowColumn>        
                    <TableRowColumn>{this.state.item.value.level}</TableRowColumn>
                </TableRow>
            
        )
    }
}