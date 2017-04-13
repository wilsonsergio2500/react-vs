// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { Link } from 'react-router';

export const Nav = (
    <nav id="mainNav" className="navbar navbar-inverse navbar-fixed-top">

        <a className="navbar-brand" href="#" >React Components</a>
        <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav side-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#"><i className="fa fa-fw fa-dashboard"></i> Dashboard</a>
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
                    <Link to="/loadingbutton" className="nav-link">
                        <i className="fa fa-fw fa-bolt"></i> Loading Button
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
);