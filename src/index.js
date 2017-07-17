import ReactDOM from "react-dom";
import React from "react";
import {browserHistory, Router, Route, IndexRoute} from "react-router";

import RootBlock from './components/root_block';
import Home from './components/content/Home';
import Home2 from './components/content/Home2';
// import Horeca from './components/content/Horeca';
// import Clothes from './components/content/Clothes';
// import Decol from './components/content/Decol';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={RootBlock}>
            <IndexRoute component={Home}/>
            <Route path='/home2' component={Home2} />
            {/*<Route path='/clothes' component={Clothes} />*/}
            {/*<Route path='/decol' component={Decol} />*/}
        </Route>
    </Router>,
    document.getElementById('first')
);