// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { ReactError } from '../../components/react-error-component/index';

export class ReactErrorComponentUsage extends React.Component<any, any> {

    render() {
        return (
            <ReactError.Error>
                <ReactError.Title>
                    Ohh Snap!!, Somthing Wrong Happen
                </ReactError.Title>
                <ReactError.Message>
                    Dude You did Something wrong...
                </ReactError.Message>
            </ReactError.Error>
        );
    }
}