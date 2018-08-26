import React, { Component } from 'react'
import axios from 'axios'
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Nav from '../Nav'

import { CircularProgress } from 'material-ui/Progress';

const style = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  };

export default class Gallery extends Component {
    state = {
        isLoading: true,
        posts: []
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res => this.setState({
            isLoading: false,
            posts: res.data.slice(0, 10)
        }))
    }
    handleClick = (post) => {
        this.props.history.push(`/gallery/${post.id}`, post)
    }
    render() {
        const postData = this.state.posts.map((post) => {
            return (
                <img key={post.id} src={post.url} className="gallery-photos" alt='gallery' onClick={() => this.handleClick(post)}/>
            )
        })
        if(this.state.isLoading) {
            return (
                <div>
                    <Nav />
                    <div className="loader">
                        <CircularProgress color="#847671" size={80} thickness={5} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <Nav />
                <div className="gallery">
                    <h2>Gallery</h2>
                    {postData}
                </div>
                <Button variant="fab" color="primary" aria-label="add" >
                    
                </Button>
            </div>
        )
    }
}