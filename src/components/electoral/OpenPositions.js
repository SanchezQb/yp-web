import React, { Component }  from 'react';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import accountStore from '../../stores/Account'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import Nav from '../Nav'
import { CSVLink } from 'react-csv';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  };

class OpenPositions extends Component {
    state = {
        positions: [],
        items: [],
        isLoading: true,
        error: false,
        filterBy: '',
        state: '',
        lga: '',
        selectedLGAs: [],         
    }
    componentDidMount() {
        this.fetchExcos()
    }

    fetchExcos = async () => {
        const token = 'eyJhbGciOiJIUzI1NiJ9.eyJpZCI6NTgsInJvbGUiOjUsInVzZXJuYW1lIjoiYm9va3R1c29sdXRpb25zIiwibGFzdG5hbWUiOm51bGwsImVtYWlsIjoidGVjaG5pY2FsQGJvb2t0dS5vcmciLCJmaXJzdG5hbWUiOiJCb29rdHUgU29sdXRpb25zIiwiYXZhdGFyIjpudWxsLCJudF90b2tlbiI6ImV5SmhiR2NpT2lKSVV6STFOaUo5LmV5SnViM1JwWm1sallYUnBiMjV6SWpwYlhYMC5zVUNEcWs4SEpBOW5Pb05Fc2lRbGZRbWRuaWxfT0hXS0d3eFNhMnFiUHQ4IiwibWV0YSI6bnVsbCwidmluIjpudWxsLCJtZW1iZXJzaGlwX251bWJlciI6bnVsbH0.xPMheOdUtHeHUHRbc_zJW9q1Vvq0lJwz0WRvBSPF0Co'
        await axios({
            url: 'https://ypn-election-02.herokuapp.com/api/position', 
            method: 'GET', 
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
        })
        .then(res => {
            console.log(res.data.data.filter(item => item.name !== 'Excos'))
        })
    }
    
    render() {
        const positonsData = this.state.items.map(exco => {
            return (
                <h1 key={exco.value.id} item={exco} history={this.props.history}>Data</h1>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#008000" size={60} thickness={5} />
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
                            <RaisedButton className="export-button" label="Export CSV" backgroundColor="#008000" labelColor="#fff" onClick={this.export}/> 
                        </CSVLink>
                        <input type="text" placeholder="search" />
                    </div>
                    <Table>
                        <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Role</TableHeaderColumn>
                            <TableHeaderColumn>Level</TableHeaderColumn>
                        </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {positonsData}
                        </TableBody>
                    </Table>
                    <FloatingActionButton style={style} onClick={() => {
                        this.props.history.push('/excos/add')
                    }}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}


export default OpenPositions