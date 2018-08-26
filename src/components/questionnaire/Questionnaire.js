import React, { Component } from 'react'
import {List} from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';
import axios from 'axios'
import Nav from '../Nav'
import QuestionItem from './QuestionItem'

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  };


export default class Questionnaire extends Component {
    state = {
        isLoading: true,
        questions: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res => this.setState({
            isLoading: false,
            questions: res.data.slice(0, 10)
        }))
    }
    render() {
        const questionsData = this.state.questions.map(question => {
            return (
                <QuestionItem key={question.id} item={question} history={this.props.history}/>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#590649" size={60} thickness={5} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Nav />
                <div className="questions">
                    <h2>Questionnaire</h2>
                    <div className="top">
                        <input type="text" placeholder="search" />   
                    </div>
                    <List>
                       {questionsData}
                    </List>
                </div>
                <FloatingActionButton style={style} onClick={() => {
                        this.props.history.push('/questionnaire/add')
                    }}>
                        <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}