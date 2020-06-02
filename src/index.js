import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/div.css';
import './css/grid.css';
import './css/form.css';
import './css/span.css';
import './css/ball.css';
import './css/socket.css';
import './css/after.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
