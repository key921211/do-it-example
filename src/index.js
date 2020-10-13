import React from 'react';
import ReactDOM from 'react-dom';
import './doit-ui/app.css';
import CoinApp from './08/CoinApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<CoinApp />, document.getElementById('root'));
serviceWorker.unregister();
