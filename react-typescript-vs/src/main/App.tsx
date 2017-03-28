/// <reference path="../components/loading-alert-component/loadingalertcomponent.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


import * as React from 'react';
import  BookComponent  from '../components/book-component/bookcomponent';
import BookDetailComponent from '../components/book-detail-component/bookdetailcomponent';
import { StockComponent } from '../components/stock-component/stockcomponent';
import { LoadingAlertComponent } from '../components/loading-alert-component/loadingalertcomponent';

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
        </div>);
    }
}