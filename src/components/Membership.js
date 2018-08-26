import React, { Component } from 'react'
import Nav from './Nav'
import RaisedButton from 'material-ui/RaisedButton';
import accountStore from '../stores/Account'
import { observer } from 'mobx-react'

@observer
class Membership extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="wrap">
                    <h2>{accountStore.price}</h2>
                    <div className="price-change">
                        <label id="membership" htmlFor="price">Current membership Price: NGN5,000</label><br/>
                        <input type="number" id="price" />
                        <RaisedButton label="Update Price" backgroundColor="#663271" labelColor="#fff" onClick={() => accountStore.changePrice()}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Membership