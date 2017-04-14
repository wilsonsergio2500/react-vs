// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/styles';
import { ReactHttpComponentUsage } from '../../usage/react-http-component/react-http-component-usage'

const iframeStyle = { flex: 100 }
export class ReactHttpPage extends React.Component<any, any>{

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">
                        React Http <small>Alternative to Polymer Http Component</small>
                    </h1>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Info</div>
                        <div className="panel-body">
                            <p>Component will handle an http GET request, and enables to inject some url parameters. It will manage the state simiat to React Asnc  </p>
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
<ReactHttp url="https://query.yahooapis.com/v1/public/yql?format=json&diagnostics=true&q={0}" queryProps={[query]}>
{
    (state: IAsyncComponentState<any>) =>{
        if (state.IsLoading){
        ...
        } else if(state.error){
        ...
        } else if (state.resolved){ 
        ...
        }

    }
}
</ReactHttp>
`
                                }</SyntaxHighlighter>
                        </div>
                    </div>

                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Example:</div>
                        <div className="panel-body">
                            <ReactHttpComponentUsage />
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Implementation:</div>
                        <div className="panel-body">
                            <div className="responsive-iframe">
                                <iframe height='265' scrolling='no' title='ReactShow (ngShow Equivalent)' src='//codepen.io/wilsonsergio2500/embed/pPzWbw/?height=400&theme-id=light&default-tab=js,result&embed-version=2' style={iframeStyle} frameBorder={'no'} allowTransparency={true} allowFullScreen={true} >See the Pen
                                    <a href='https://codepen.io/wilsonsergio2500/pen/pPzWbw/'>ReactShow (ngShow Equivalent)</a> by Sergio Wilson (<a href='http://codepen.io/wilsonsergio2500'>@wilsonsergio2500</a>) on <a href='http://codepen.io'>CodePen</a>.
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}