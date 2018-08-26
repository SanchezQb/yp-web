import React, { Component } from 'react'
import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import Nav from '../Nav'
import DebateItem from './DebateItem'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  };


export default class Debate extends Component {
    state = {
        isLoading: true,
        debates: []
    }

    componentDidMount() {
        this.getDebates()
    }

    // getDebates = async () => {
    //     await axios({
    //       url: `https://ypn-node.herokuapp.com/api/v1/convos/type/2`, 
    //       method: 'GET', 
    //       headers: {
    //           "Content-Type": "application/json",
    //           "Authorization": `${accountStore.user.token}`
    //       },
    //   })
    //   .then(res => {
    //       this.setState({
    //           debates: res.data.data.reverse(),
    //           isLoading: false
    //       })
    //   })
    //   .catch(error => {
    //       this.setState({
    //           isLoading: false,
    //           error: true
    //       })
    //   })
    // }
    render() {
        const topicsData = this.state.debates.map(debate => {
            return (
                <DebateItem key={debate._id} item={debate} history={this.props.history}/>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#4055c2" size={60} thickness={5} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Nav />
                <div className="questions">
                    <h2>Debate Topics</h2>
                    <div className="topic-search">
                        <input type="text" placeholder="search" />   
                    </div>
                    <List>
                       {topicsData}
                    </List>
                </div>
                <FloatingActionButton style={style} onClick={() => {
                        this.props.history.push('/debate/add')
                    }}>
                        <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}