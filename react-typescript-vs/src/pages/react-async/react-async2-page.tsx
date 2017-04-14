// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { AsyncComponentUsage } from '../../usage/async-component/async-component-usage';
import { docco } from 'react-syntax-highlighter/dist/styles';

const iframeStyle = { flex: 100 }
export class AsyncComponent2Page extends React.Component<any, any>{

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">
                        React Async 2 <small>Alternative solution to Angular 2 async pipe state parameter</small>
                    </h1>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Info</div>
                        <div className="panel-body">
                            <p>This component will take a promise and handle its state. Somehow similar to Angular 2 async filter. The difference between this one an React Async 1 is that this component
                                will take the callback state as a parameter rather than in the chidl transculsion callback </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Usage</div>
                        <div className="panel-body">

                            <SyntaxHighlighter language='javascript' style={docco}>
                                {
`
...
onSuccess(payload: IStock[]) {
        let stock = payload[0];
        let IsUp = (stock.c.charAt(0) == '+');
        let containerClasses = (status: boolean) => { return (status) ? 'bs-callout bs-callout-success' : 'bs-callout bs-callout-danger' };
        return (
            <div className="col-md-12">
                <div className={containerClasses(IsUp)}>
                    <h4>{stock.e}:{stock.t}- {stock.lt}</h4>


                    <span>{stock.l_cur}USD </span>
                    <span className="small"></span>

                    <span className={IsUp ? 'text-success' : 'text-danger'}>
                        <i className={IsUp ? 'fa fa-arrow-up' : 'fa fa-arrow-down'}></i>
                        <strong>{stock.c_fix}({stock.cp}%)</strong>
                    </span>
                </div>
            </div>
        );
    }
...
<AsyncComponent2 asyncPromise={this.state.promiseToSolve} asyncDelay={3000} onSuccess={this.onSuccess}>

</AsyncComponent2>`
                                }</SyntaxHighlighter>
                        </div>
                    </div>

                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Example:</div>
                        <div className="panel-body">
                            <AsyncComponentUsage />
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Implementation:</div>
                        <div className="panel-body">
                            <div className="responsive-iframe">
                                <iframe height='265' scrolling='no' title='ReactShow (ngShow Equivalent)' src='//codepen.io/wilsonsergio2500/embed/vmExOm/?height=400&theme-id=light&default-tab=js,result&embed-version=2' style={iframeStyle} frameBorder={'no'} allowTransparency={true} allowFullScreen={true} >See the Pen
                                    <a href='https://codepen.io/wilsonsergio2500/pen/vmExOm/'>ReactShow (ngShow Equivalent)</a> by Sergio Wilson (<a href='http://codepen.io/wilsonsergio2500'>@wilsonsergio2500</a>) on <a href='http://codepen.io'>CodePen</a>.
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}