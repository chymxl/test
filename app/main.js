import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import App from './App';
import User from './user/User';


import './main.css';

ReactDom.render(
    <Router>
        <div>
            <div><Link to="/user">用户</Link></div>
            <Route exact path="/" component={User} />
            <Route exact path="/user" component={User} />
        </div>
    </Router>,
    document.getElementById("root")
);