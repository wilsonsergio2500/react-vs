/// <reference path="../components/repeater-component/test.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


import * as React from 'react';
import  BookComponent  from '../components/book-component/bookcomponent';
import BookDetailComponent from '../components/book-detail-component/bookdetailcomponent';
import { StockComponent } from '../components/stock-component/stockcomponent';
import { LoadingAlertComponent } from '../components/loading-alert-component/loadingalertcomponent';

import { LoadingButtonTest } from '../components/loading-button-component/test';
import { RepeaterTest } from '../components/repeater-component/test';

//export class App extends React.Component<any, {}> {
//    render(){
//        return(<div>
//            <BookComponent />
//            <BookDetailComponent />
//            <StockComponent ticket="GOOGL" />                                     
//            <StockComponent ticket="MSFT" />
//            <StockComponent ticket="CSCO" />
//            <StockComponent ticket="GWZ" />
//            <LoadingAlertComponent />
//                </div>);
//    }
//}

export class App extends React.Component<any, {}> {
    render() {
        return (<div>
           
            <StockComponent ticket="GOOGL" />
            <StockComponent ticket="MSFT" />
            <StockComponent ticket="CSCO" />
            <StockComponent ticket="GWZ" />
            <RepeaterTest/>
            <LoadingButtonTest/>

        </div>);
    }
}