import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav'
import OfficeItem from './OfficeItem'
import { CircularProgress } from 'material-ui/Progress';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

export default class Office extends Component {
    state = {
        isLoading: true,
        requests: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({
            isLoading: false,
            requests: res.data
        }))
    }
    render() {
        const requestData = this.state.requests.map(request => {
            return (
                <OfficeItem key={request.id} item={request} history={this.props.history}/>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#0881af" size={80} thickness={5} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Nav />
                <div className="wrap">
                <h2>Run for Office Management</h2>
                <div className="top">
                    <h5>Filter</h5>
                    <select onChange={(e) => console.log(e.target.value)}>
                        <option value="all">All</option>
                        <option value="presidential">Federal</option>
                        <option value="governorship">State</option>
                        <option value="governorship">Local</option>
                    </select> 
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Username</TableHeaderColumn>
                            <TableHeaderColumn>Date</TableHeaderColumn>
                            <TableHeaderColumn>Description</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {requestData}
                    </TableBody>
                </Table>
                </div>
            </div>
        )
    }
}