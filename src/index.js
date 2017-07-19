import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';
window.jQuery = require('jquery');
window.Tether = require('tether');
require('bootstrap');

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
