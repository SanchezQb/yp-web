import React, { Component }  from 'react';
import axios from 'axios'
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
import CareerItem from './CareerItem'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  };

class Career extends Component {
    state = {
        isLoading: true,
        careers: []          
    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => this.setState({
            isLoading: false,
            careers: res.data.slice(0, 10)
        }))
    }
    render() {
        const careerData = this.state.careers.map(career => {
            return (
                <CareerItem key={career.id} item={career} history={this.props.history}/>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#a92a56" size={60} thickness={5} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Careers</h2>
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
                            <TableHeaderColumn>Name</TableHeaderColumn>
                            <TableHeaderColumn>Applications</TableHeaderColumn>
                            <TableHeaderColumn>Level</TableHeaderColumn>
                        </TableRow>
                        </TableHeader>
                        <TableBody displayRowCheckbox={false}>
                            {careerData}
                        </TableBody>
                    </Table>
                    <FloatingActionButton style={style} onClick={() => {
                        this.props.history.push('/careers/add')
                    }}>
                        <ContentAdd />
                    </FloatingActionButton>
                </div>
            </div>
        )
    }
}


export default Career