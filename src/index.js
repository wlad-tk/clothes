import ReactDOM from "react-dom";
import React from "react";
import {browserHistory, Router, Route, IndexRoute} from "react-router";

import RootBlock from './components/root_block';

import './style/css/style.less'


const errorLoading = (error) => {
    throw new Error(`Dynamic page loading failed: ${error}`);
};

const loadRoute = (cb) => {
    return module => cb(null, module.default);
};

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={RootBlock}>
            <IndexRoute
                getComponent={(location, cb) => {System.import('./components/content/Home').then(loadRoute(cb)).catch(errorLoading);}}
            />
            <Route path='/gallery'
                   getComponent={(location, cb) => {System.import('./components/content/Gallery').then(loadRoute(cb)).catch(errorLoading);}}
            />
            <Route path='/tailoring'
                   getComponent={(location, cb) => {System.import('./components/content/Tailoring').then(loadRoute(cb)).catch(errorLoading);}}
            />
            <Route path='/print'
                   getComponent={(location, cb) => {System.import('./components/content/Printing').then(loadRoute(cb)).catch(errorLoading);}}
            />
            <Route path='/contact'
                   getComponent={(location, cb) => {System.import('./components/content/Contact').then(loadRoute(cb)).catch(errorLoading);}}
            />
        </Route>
    </Router>,
    document.getElementById('first')
);