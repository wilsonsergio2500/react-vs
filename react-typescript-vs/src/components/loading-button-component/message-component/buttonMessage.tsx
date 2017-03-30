// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


import * as React from 'react';
import { ILoadingProps } from '../interfaces/iloadingprops';
import { ReactShow } from '../../react-show-component/reactshow';

export class ButtonMessage extends React.Component<ILoadingProps,any> {

    render() {
        
        let NotWorking = (this.props.IsWorking == false);

        return (
            <ReactShow show={NotWorking}>
                <span>
                    {this.props.children}
                </span>
                </ReactShow>
        );
    }
}