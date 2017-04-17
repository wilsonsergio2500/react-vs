// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { ReactErrorTitle } from './react-error-title/react-error-title';
import { ReactErrorMessage } from './react-error-message/react-error-message';

export class ReactErrorComponent extends React.Component<any, any>{

    private getChildrenArray() : JSX.Element[] {
        return React.Children.map<JSX.Element>(this.props.children, (element: React.ReactChild, index: number) => {
            return (element as JSX.Element);
        });
    }

    getTitleInstance() {
        
        return this.getChildrenArray().filter((item: JSX.Element, index: number) => {
            return (item.type == ReactErrorTitle);
        });
        
    }
    getMessageInstance() {
        return this.getChildrenArray().filter((item: JSX.Element, index: number) => {
            return (item.type == ReactErrorMessage);
        });
    }

    render() {
        return (
        <div className="col-md-12 text-center">
                <div className="col-xs-12">
                    <i className="fa fa-exclamation-triangle fa-3x text-danger" aria-hidden="true"></i>
                </div>
                <br />
                {this.getTitleInstance()}
                <br />
                {this.getMessageInstance()}
        </div>
        );
    }
}