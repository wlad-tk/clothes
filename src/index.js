import ReactDOM from "react-dom";
import React from "react";
import {browserHistory, Router, Route, IndexRoute} from "react-router";

import RootBlock from './components/root_block';
import Home from './components/content/Home';
import Home2 from './components/content/Home2';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={RootBlock}>
            <IndexRoute component={Home}/>
            <Route path='/home2' component={Home2} />
        </Route>
    </Router>,
    document.getElementById('first')
);