import React, { Component }  from 'react';
import axios from 'axios'
import Button from 'material-ui/Button';

import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import Nav from '../Nav'
import ExcosItem from './ExcosItem'
import { CSVLink } from 'react-csv';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  };

class Excos extends Component {
    state = {
        isLoading: true,
        excos: []          
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({
            isLoading: false,
            excos: res.data
        }))
    }
    render() {
        const excosData = this.state.excos.map(exco => {
            return (
                <ExcosItem key={exco.id} item={exco} history={this.props.history}/>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#008000" size={80} thickness={5} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Excos</h2>
                    <div className="top">
                        <CSVLink filename={"excos-data.csv"} data={this.state.excos}>
                            <Button variant="raised" className="export-button">
                                        Default
                            </Button>
                        </CSVLink>
                        <input type="text" placeholder="search" />
                    </div>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Designation</TableHeaderColumn>
                            <TableHeaderColumn>Email</TableHeaderColumn>
                        </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {excosData}
                        </TableBody>
                    </Table>
                    <Button variant="fab" color="primary" aria-label="add" >
                        
                    </Button>
                </div>
            </div>
        )
    }
}


export default Excos