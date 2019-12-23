import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/*import Form from './Form';
import Feed from './Feed';*/
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/*ReactDOM.render(<Form />,document.getElementById('form'));
ReactDOM.render(<Feed />,document.getElementById('feed'));*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
