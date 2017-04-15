/// <reference path="../usage/async-component/async-component-usage2.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


import * as React from 'react';
import  BookComponent  from '../components/book-component/bookcomponent';
import BookDetailComponent from '../components/book-detail-component/bookdetailcomponent';
import { StockComponent } from '../components/stock-component/stockcomponent';
import { Link } from 'react-router';

import { Nav } from './views/nav';



import { AsyncComponentUsage } from '../usage/async-component/async-component-usage';
import { AsyncComponentUsage2 } from '../usage/async-component/async-component-usage2';
import { LoadingPanelComponentUsage } from '../usage/loading-panel-component/loading-panel-component-usage';
import { ReactRepeaterComponentUsage } from '../usage/repeater-component/repeater-component-usage';
import { LoadingButtonComponentUsage } from '../usage/loading-button-component/loading-button-component-usage';
import { ReactHttpComponentUsage } from '../usage/react-http-component/react-http-component-usage';
import { ReactShowComponentUsage } from '../usage/react-show-component/react-show-component-usage';

const iframeStyle = { flex: 100 }
const sample = (
    <div>
    <h3>Stock Component (Fetch Http Internally)</h3>
    <StockComponent ticket="GOOGL" />
    <StockComponent ticket="MSFT" />

    <StockComponent ticket="GWZ" />

    <h3>React Show</h3>
    <ReactShowComponentUsage />

    <h3>Repeater (Attempt to Emulates an ngRepeat)</h3>
    <ReactRepeaterComponentUsage />

    <h3>Loading Button (Nested Component with Transclusion)</h3>
    <LoadingButtonComponentUsage />

    <h3>Loading Panel (Loading Panel with Transclusion)</h3>
    <LoadingPanelComponentUsage />

    <h3>Async Component (Emulates Angular 2 Async Pipe)</h3>

    <p>Component Handles Async Request</p>
    <AsyncComponentUsage />
    <p>Component Handles Async Request</p>
    <AsyncComponentUsage2/>

    <h3>Http Request Component (Emulates Polymer Http Request Component)</h3>
    <ReactHttpComponentUsage />

    
    </div>    
        );

export class App extends React.Component<any, {}> {
    render() {
        
        return (
            <div>
                
                <Nav></Nav>

                    <div className="content-wrapper py-3">
                    <div className="container-fluid main-content">

                       
                            <div className="row">
                                
                            </div>

                            {this.props.children}
                        

                     
                                        
                                        
                    </div>
                    </div>
            

            


        </div>);
    }
}