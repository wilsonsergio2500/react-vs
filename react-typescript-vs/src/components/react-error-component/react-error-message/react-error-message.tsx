// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';

export class ReactErrorMessage extends React.Component<any, any> {

    render(){
        return (
            <span className="text-danger">
              {this.props.children}
            </span>
        );
    }
}