


// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index';
import thunk from 'redux-thunk';
import { Routes } from './main/routes';


import { Router, browserHistory, hashHistory } from 'react-router';

import { App } from './main/app';



const storeWisthMiddleware = applyMiddleware(thunk)(createStore);

ReactDOM.render(
    <Provider store={storeWisthMiddleware(reducer)}>
        <Router history={hashHistory} routes={Routes}/>
        
     </Provider>

    , document.querySelector("#app")
);