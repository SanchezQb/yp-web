import React, { Component } from 'react'
import axios from 'axios'
import Nav from '../Nav'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import CircularProgress from 'material-ui/CircularProgress';

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
                        <CircularProgress color="#847671" size={60} thickness={5} />
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
                <FloatingActionButton style={style} onClick={() => {
                    this.props.history.push('/gallery/add')
                }}>
                    <ContentAdd />
                </FloatingActionButton>
            </div>
        )
    }
}