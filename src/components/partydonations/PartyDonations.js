import React, { Component }  from 'react';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import CircularProgress from 'material-ui/CircularProgress';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import Nav from '../Nav'
import PartyDonationItem from './PartyDonationItem'
import { CSVLink } from 'react-csv';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  };

class PartyDonations extends Component {
    state = {
        isLoading: true,
        donations: []          
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({
            isLoading: false,
            donations: res.data
        }))
    }
    render() {
        const donationsData = this.state.donations.map(donation => {
            return (
                <PartyDonationItem key={donation.id} item={donation} history={this.props.history}/>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#1e0d61" size={60} thickness={5} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Party Donation History</h2>
                    <div className="top">
                        <CSVLink filename={"party_donations.csv"} data={this.state.donations}>
                            <RaisedButton className="export-button" label="Export CSV" backgroundColor="#1e0d61" labelColor="#fff" onClick={this.export}/> 
                        </CSVLink>
                        <input type="text" placeholder="search" />
                    </div>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Amount</TableHeaderColumn>
                            <TableHeaderColumn>Date</TableHeaderColumn>
                        </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {donationsData}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}


export default PartyDonations