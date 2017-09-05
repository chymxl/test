import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Info from './containers/Info';
import Test from './containers/Test'
import 'antd/dist/antd.css'


import './main.css';

ReactDom.render(
    <Router>
        <div>
            <Route exact path="/" component={Info} />
            <Route path="/test" component={Test} />
        </div>
    </Router>,
    document.getElementById("root")
);