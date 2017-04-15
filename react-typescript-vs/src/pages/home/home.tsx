// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';

export class HomePage extends React.Component<any, any>{

    componentWillMount() {
    }
    componentWillReceiveProps(nextprop: any) {
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }

    render() {
        return (<div>
            <div className="col-md-12">
                <h1 className="page-header">
                    About Example <small></small>
                </h1>
            </div>
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">Getting Started</div>
                    <div className="panel-body">
                        <p>get started by cloning the repo @ <a href="https://github.com/wilsonsergio2500/react-vs.git" target="_blank">
                                https://github.com/wilsonsergio2500/react-vs.git
                            </a>
                        </p>
                        <p>Install NodeJs If not already @ <a href="https://nodejs.org/en/" target="_blank">
                                https://nodejs.org/en/
                            </a>
                        </p>
                        <p>Run Command: <code> npm install -g webpack typescript typings </code>
                        </p>
                        <p>Run Command: <code> npm link typescript </code> under folder <b>react-typescript-vs</b>
                        </p>
                        <p>Run Command: <code> npm install </code> under folder <b>react-typescript-vs</b> or open Visual Studio and let package.json do his thing
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="panel panel-default">
                    <div className="panel-heading">Motivation</div>
                    <div className="panel-body">
                    </div>
                </div>
            </div>
        </div>);
    }

}