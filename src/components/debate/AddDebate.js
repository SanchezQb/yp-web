import React, { Component } from 'react'
import Nav from '../Nav'
import RaisedButton from 'material-ui/RaisedButton';
import axios from 'axios'

export default class AddDebate extends Component {

    state = {
        error: false,
        disabled: false,
        description: '',
        topic: '',
        startDate: Date.now(),
        endDate: Date.now(),
        members: [{}]
    }


    // addDebate = async () => {
    //     await axios({
    //       url: `https://ypn-node.herokuapp.com/api/v1/convos/type/2`, 
    //       method: 'POST', 
    //       data: this.state,
    //       headers: {
    //           "Content-Type": "application/json",
    //           "Authorization": `${accountStore.user.token}`
    //       },
    //   })
    //   .then(res => {
    //     this.setState({
    //         disabled: false
    //     })
    //     this.props.history.push('/debate')
    //   })
    //   .catch(error => {
    //       this.setState({
    //           disabled: false,
    //           error: true
    //       })
    //   })
    // }
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>Add Debate Topic</h2>
                    <form className="edit-form">
                        <label htmlFor="title">Title</label><br/>
                        <input type="text" id="title"/><br/>
                        <RaisedButton label="Save" backgroundColor="#64DD17" labelColor="#fff" onClick={this.handleClick}/>
                    </form>
                </div>
            </div>
        )
    }
}