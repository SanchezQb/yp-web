import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav'
import VolunteersItem from './VolunteersItem'
import CircularProgress from 'material-ui/CircularProgress';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

export default class Volunteers extends Component {
    state = {
        isLoading: true,
        volunteers: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({
            isLoading: false,
            volunteers: res.data
        }))
    }
    render() {
        const volunteerData = this.state.volunteers.map(volunteer => {
            return (
                <VolunteersItem key={volunteer.id} item={volunteer} history={this.props.history}/>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#d74955" size={60} thickness={5} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Nav />
                <div className="wrap">
                <h2>Volunteers Management</h2>
                <div className="top">
                    <input type="text" placeholder="search" />   
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
                        {volunteerData}
                    </TableBody>
                </Table>
                </div>
            </div>
        )
    }
}