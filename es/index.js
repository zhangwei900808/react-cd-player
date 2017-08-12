import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
registerServiceWorker();