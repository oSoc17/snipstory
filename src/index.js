import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import Root from './containers/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));

registerServiceWorker();
