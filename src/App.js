import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main'
import './App.css';
import accountStore from './stores/Account';

class App extends Component {
  componentDidMount() {
    this.auth()
  }

  auth() {
    let data = JSON.parse(localStorage.getItem('admin'))
    if(data) {
      accountStore.setAuth(data)
    }
    else {
      return null
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <Route component={Main} />
      </MuiThemeProvider>
    );
  }
}

export default App;
