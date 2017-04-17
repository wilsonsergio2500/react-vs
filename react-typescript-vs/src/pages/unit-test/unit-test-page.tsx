// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
const iframeStyle = { flex: 100 }
export class UnitTestPage extends React.Component<any, any> {

    render() {
        return (
            <div className="row"> 
                <div className="col-md-12">
                    <h1 className="page-header">
                        Unit Test <small>Mocha + Enzyme + Sinon</small>
                    </h1>
                </div>
                    <div className="col-md-12">
                        <div className="panel panel-default">
                            <div className="panel-body">

                                <div className="responsive-iframe">
                                    <iframe height='265' scrolling="yes" title='ReactShow (ngShow Equivalent)' src='/test/mch.html' style={iframeStyle} frameBorder={'no'} allowTransparency={true} allowFullScreen={true} >See the Pen
                                     </iframe>
                                </div>
                            </div>
                        </div>
                    </div>

            </div>
            );
    }
}