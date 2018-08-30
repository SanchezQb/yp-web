import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Main from './components/Main'
import './App.css';
import accountStore from './stores/Account';


class App extends Component {

  componentWillMount() {
    accountStore.loadData()
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
