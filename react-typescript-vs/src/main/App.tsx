// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


import * as React from 'react';
import  BookComponent  from '../components/book-component/bookcomponent';
import BookDetailComponent from '../components/book-detail-component/bookdetailcomponent';
import { StockComponent } from '../components/stock-component/stockcomponent';

import { LoadingPanelComponent } from '../components/loading-panel-component/loadingpanelcomponent';

import { LoadingButtonTest } from '../components/loading-button-component/test';
import { RepeaterTest } from '../components/repeater-component/test';
import { AsyncComponentTest, AsyncComponentStockSymbol } from '../components/async-component/test';
import { ReactHttpComponentExample } from '../components/react-http/test';


export class App extends React.Component<any, {}> {
    render() {
        return (<div>

            <h3>Stock Component (Fetch Http Internally)</h3>
            <StockComponent ticket="GOOGL" />
            <StockComponent ticket="MSFT" />
          
            <StockComponent ticket="GWZ" />
            <h3>Repeater (Attempt to Emulates an ngRepeat)</h3>
            <RepeaterTest />
            <h3>Loading Button (Nested Component with Transclusion)</h3>
            <LoadingButtonTest />
            <h3>Loading Panel (Loading Panel with Transclusion)</h3>
            <LoadingPanelComponent>
                Loading..
            </LoadingPanelComponent>
            <h3>Async Component (Emulates Angular 2 Async Pipe)</h3>
            <p>Component Handles Async Request</p>
            <AsyncComponentTest>
            </AsyncComponentTest>
            <AsyncComponentStockSymbol />
            <h3>Http Request Component (Emulates Polymer Http Request Component)</h3>
            <ReactHttpComponentExample/>

        </div>);
    }
}