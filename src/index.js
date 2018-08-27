import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<BrowserRouter>
                    <Route component={App} />
                </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
