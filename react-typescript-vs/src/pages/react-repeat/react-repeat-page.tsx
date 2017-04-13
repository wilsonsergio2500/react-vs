// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { ReactRepeaterComponentUsage } from '../../usage/repeater-component/repeater-component-usage';
import { docco } from 'react-syntax-highlighter/dist/styles';

const iframeStyle = { flex: 100 }
export class ReactRepeatPage extends React.Component<any, any>{

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">
                        React Repeat <small>emulates an angular ngRepeat</small>
                    </h1>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Info</div>
                        <div className="panel-body">
                            <p>The repeat component provides a handler in order to pass the template of the repeat array. This way .map function does not have to be call each time and the developer
                                can remain Dry.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Usage</div>
                        <div className="panel-body">

                            <SyntaxHighlighter language='javascript' style={docco}>
                                {
`<ReactRepeater array={getBooks()}
ParentTag="div"
ParentTagClass="row"
RepeatItemHandler={this.repeatHandler}></ReactRepeater>
//or
<ReactRepeater array={getBooks()}
ParentTag="div"
ParentTagClass="row"
RepeatItemHandler={(book: IBookVM, index: number) => {
return (<div className="col-md-12" key={index}> {book.title} <b>By:</b> <code>{book.author}</code></div>);
    }}>
</ReactRepeater>
`
                                }</SyntaxHighlighter>
                        </div>
                    </div>

                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Example:</div>
                        <div className="panel-body">
                            <ReactRepeaterComponentUsage />
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="panel panel-default">
                        <div className="panel-heading">Implementation:</div>
                        <div className="panel-body">
                            <div className="responsive-iframe">
                                <iframe height='265' scrolling='no' title='ReactShow (ngShow Equivalent)' src='//codepen.io/wilsonsergio2500/embed/mWoOQQ/?height=400&theme-id=light&default-tab=js,result&embed-version=2' style={iframeStyle} frameBorder={'no'} allowTransparency={true} allowFullScreen={true} >See the Pen
                                    <a href='https://codepen.io/wilsonsergio2500/pen/mWoOQQ/'>ReactShow (ngShow Equivalent)</a> by Sergio Wilson (<a href='http://codepen.io/wilsonsergio2500'>@wilsonsergio2500</a>) on <a href='http://codepen.io'>CodePen</a>.
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}