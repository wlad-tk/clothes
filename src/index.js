import ReactDOM from "react-dom";
import React from "react";
import {browserHistory, Router, Route, IndexRoute} from "react-router";

import RootBlock from './components/root_block';
import Home from './components/content/Home';
import Gallery from './components/content/Gallery';
import Tailoring from './components/content/Tailoring';

import './style/css/style.less'

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={RootBlock}>
            <IndexRoute component={Home}/>
            <Route path='/gallery' component={Gallery} />
            <Route path='/tailoring' component={Tailoring} />
        </Route>
    </Router>,
    document.getElementById('first')
);