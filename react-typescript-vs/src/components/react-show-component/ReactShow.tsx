// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import *  as React from 'react';
import * as ReactDOM from "react-dom";

interface IreactShowProps {
    show: any;
}



export class ReactShow extends React.Component<IreactShowProps, any> {

    componentWillUnmount() {
    }

    componentWillReceiveProps(nextprop: IreactShowProps) {

    }

    render() {
        if (!!this.props.show) {
            return React.cloneElement(this.props.children as JSX.Element);
        }
        else {
            let style = {
                display: 'none'
            }
            return React.cloneElement(this.props.children as JSX.Element, { style: style });

        }


    }
}