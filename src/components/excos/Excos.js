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
        excos: [],
        items: [],
        isLoading: true,
        error: false,
        filterBy: '',
        state: '',
        lga: '',
        selectedLGAs: [],
        position: ''          
    }
    componentDidMount() {
        this.fetchExcos()
    }

    fetchExcos = async () => {
        await axios({
            url: 'https://ypn-election-02.herokuapp.com/api/excos', 
            method: 'GET', 
            headers: {
                "Content-Type": "application/json",
                "Authorization": `${accountStore.user.token}`
            },
        })
        .then(res => {
            console.log(res.data.data)
            const { meta } = res.data.data;
            const payload = Object.keys(res.data.data.meta).map(item => {
                const ref = {}
                ref.position = item
                ref.value = meta[`${item}`]
                return ref
            })
            this.setState({excos: payload})
        }).then(() => {
            this.setState({items: this.state.excos, isLoading: false})
        })
        .catch(err => {
            this.setState({error: true, isLoading: false})
            alert(err.response.data.error)
        })
    }
    
    render() {
        const excosData = this.state.items.map(exco => {
            return (
                <ExcosItem key={exco.value.id} item={exco} history={this.props.history}/>
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
                            {excosData}
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


export default Excos