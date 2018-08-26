import React, { Component }  from 'react';
import axios from 'axios'
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import Nav from '../Nav'
import UserItem from './UserItem'
import { CSVLink } from 'react-csv';

class Users extends Component {
    state = {
        isLoading: true,
        users: []          
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({
            isLoading: false,
            users: res.data
        }))
    }
    render() {
        const userData = this.state.users.map(user => {
            return (
                <UserItem key={user.id} item={user} history={this.props.history}/>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#FFA500" size={80} thickness={5} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>User Management</h2>
                    <div className="top">
                        <CSVLink filename={"user-data.csv"} data={this.state.users}>
                            <Button variant="raised" className="export-button">
                                Default
                            </Button>                        
                        </CSVLink>
                        <input type="text" placeholder="search" />
                    </div>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>ID</TableHeaderColumn>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Username</TableHeaderColumn>
                        </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {userData}
                        </TableBody>
                    </Table>
                </div>
            </div>
        )
    }
}


export default Users