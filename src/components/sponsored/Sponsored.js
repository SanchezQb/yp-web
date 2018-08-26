import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav'
import SponsoredItem from './SponsoredItem'
import CircularProgress from 'material-ui/CircularProgress';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow
} from 'material-ui/Table';

export default class Sponsored extends Component {
    state = {
        isLoading: true,
        sponsored: []
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({
            isLoading: false,
            sponsored: res.data
        }))
    }
    render() {
        const sponsoredData = this.state.sponsored.map(sponsored => {
            return (
                <SponsoredItem key={sponsored.id} item={sponsored} history={this.props.history}/>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#24747b" size={60} thickness={5} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Sponsored Candidates</h2>
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
                            {sponsoredData}
                        </TableBody>
                    </Table>
                    </div>
            </div>
        )
    }
}