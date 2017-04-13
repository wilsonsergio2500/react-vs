/// <reference path="../../usage/react-show-component/react-show-component-usage.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { ReactShowComponentUsage } from '../../usage/react-show-component/react-show-component-usage';
import { docco } from 'react-syntax-highlighter/dist/styles';

const iframeStyle = { flex: 100 }
export class ReactShowPage extends React.Component<any, any>{

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">
                        React Show <small>emulates angular ngShow</small>
                    </h1>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Info</div>
                        <div className="panel-body">
                            <p>Hide the elment from the dom based on the show property, property could be a json object, undefined or null will hide the element</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Usage</div>
                        <div className="panel-body">
                            
                    <SyntaxHighlighter language='javascript' style={docco}>
                    {
`<ReactShow show={this.state.IsShow}>
<code> Item Shown</code>
</ReactShow>`
                    }</SyntaxHighlighter>
                        </div>
                    </div>

                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Example:</div>
                        <div className="panel-body">
                            <ReactShowComponentUsage/>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Implementation:</div>
                        <div className="panel-body">
                            <div className="responsive-iframe">
                                <iframe height='265' scrolling='no' title='ReactShow (ngShow Equivalent)' src='//codepen.io/wilsonsergio2500/embed/OpGaLr/?height=400&theme-id=light&default-tab=js,result&embed-version=2' style={iframeStyle} frameBorder={'no'} allowTransparency={true} allowFullScreen={true} >See the Pen <a href='https://codepen.io/wilsonsergio2500/pen/OpGaLr/'>ReactShow (ngShow Equivalent)</a> by Sergio Wilson (<a href='http://codepen.io/wilsonsergio2500'>@wilsonsergio2500</a>) on <a href='http://codepen.io'>CodePen</a>.
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            );
    }

}