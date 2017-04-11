import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom';

import App from './App';
import User from './user/User';


import './main.css';

ReactDom.render(
    <Router>
        <App>
            <Route exact path="/" component={User} />
        </App>
    </Router>,
    document.getElementById("root")
);