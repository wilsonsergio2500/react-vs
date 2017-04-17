// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { Link } from 'react-router';
import { Panel, Collapse } from 'react-bootstrap';

export class Nav extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            async: { open: false }
        }
    }

    render() {
        return (<nav id="mainNav" className="navbar navbar-inverse navbar-fixed-top">

            <a className="navbar-brand" href="#" >React Components</a>
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav side-nav">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">
                            <i className="fa fa-fw fa-home"></i> About
                          </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reactshow" className="nav-link">
                            <i className="fa fa-fw fa-bolt"></i> React Show
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reactrepeat" className="nav-link">
                            <i className="fa fa-fw fa-bolt"></i> React Repeat
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/loadingpanel" className="nav-link">
                            <i className="fa fa-fw fa-bolt"></i> Loading Panel
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reacterror" className="nav-link">
                            <i className="fa fa-fw fa-bolt"></i> React Error Panel
                    </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/loadingbutton" className="nav-link">
                            <i className="fa fa-fw fa-bolt"></i> Loading Button
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a onClick={() => this.setState({ async: { open: !this.state.async.open } })} >
                           React Async
                            <i className="fa fa-fw fa-caret-down"></i> 
                        </a>
                        
                        <Collapse  in={this.state.async.open}>
                            <ul >
                                <li className="nav-item">
                                    <Link to="/reactasync1" className="nav-link">
                                        <i className="fa fa-fw fa-bolt"></i>
                                        React Async 1
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/reactasync2" className="nav-link">
                                        <i className="fa fa-fw fa-bolt"></i>
                                        React Async 2
                                    </Link>
                                </li>

                            </ul>
                        </Collapse>
                    </li>
                    <li>
                        <Link to="/reacthttp" className="nav-link">
                            <i className="fa fa-fw fa-bolt"></i> React Http
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>)

    }
}

