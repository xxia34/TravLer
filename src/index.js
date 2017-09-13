import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ActionBar from './ActionBar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ActionBar />, document.getElementById('action-bar'));
ReactDOM.render(<App />, document.getElementById('main'));
registerServiceWorker();
