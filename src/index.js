import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import {Canvas} from './Canvas';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Canvas />, document.getElementById('root'));
registerServiceWorker();
