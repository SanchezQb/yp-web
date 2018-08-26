import React, { Component }  from 'react';
import axios from 'axios'
import RaisedButton from 'material-ui/RaisedButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow
} from 'material-ui/Table';
import Nav from '../Nav'
import ElectoralItem from './ElectoralItem'
import { CSVLink } from 'react-csv';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  };

class Elected extends Component {
    state = {
        isLoading: true,
        electoralCandidates: []          
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => this.setState({
            isLoading: false,
            electoralCandidates: res.data
        }))
    }
    render() {
        const electoralCandidateData = this.state.electoralCandidates.map(electoralCandidate => {
            return (
                <ElectoralItem key={electoralCandidate.id} item={electoralCandidate} history={this.props.history}/>
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
                    <h2>Electoral Candidates</h2>
                    <div className="top">
                        <CSVLink filename={"electoral-candidates.csv"} data={this.state.electoralCandidates}>
                            <RaisedButton className="export-button" label="Export CSV" backgroundColor="#1e0d61" labelColor="#fff" onClick={this.export}/> 
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
                            {electoralCandidateData}
                        </TableBody>
                    </Table>
                    <FloatingActionButton style={style} onClick={() => {
                        this.props.history.push('/elected-officials/add')
                    }}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}


export default Elected