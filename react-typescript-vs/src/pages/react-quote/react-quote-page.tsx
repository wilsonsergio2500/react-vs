// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { ReactQuote } from '../../components/react-quote/react-quote-component';

export class ReactQuotePage extends React.Component<any, any>{

    render() {
        return (<div>
            <div className="col-md-12">
                <h1 className="page-header">
                    React Quote <small></small>
                </h1>
            </div>
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">Example:</div>
                    <div className="panel-body">
                        // React Quote
                        <ReactQuote author="Albert E.">
                            God does not play dice with the universe
                        </ReactQuote>
                        
                    </div>
                </div>
            </div>
            
        </div>);
    }
}