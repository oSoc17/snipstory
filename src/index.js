import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
const flexibility = require('flexibility');
window.jQuery = require('jquery');
window.Tether = require('tether');
require('bootstrap');

ReactDOM.render(<Root />, document.getElementById('root'));
flexibility(document.getElementById('root'));

registerServiceWorker();
