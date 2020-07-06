import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import 'src/index.scss';
import * as serviceWorker from 'src/serviceWorker';
import {Login} from 'src/views/login/Login';
import {Register} from "src/views/register/Register";

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Switch>
            <Route path="/login" exact component={ Login } />
            <Route path="/register" exact component={ Register } />
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
