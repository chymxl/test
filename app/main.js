import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Info from './containers/Info';


import './main.css';

ReactDom.render(
    <Router>
        <div>
            <Route exact path="/" component={Info} />
            <Route exact path="/user" component={Info} />
        </div>
    </Router>,
    document.getElementById("root")
);