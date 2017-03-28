/// <reference path="view/erro-view.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


import * as React from 'react';
import { ErrorViews } from './view/erro-view';
interface IErrorComponentProps {
    errorMessage: string;
}
export class ErrorComponent extends React.Component<any, any> {

    render() {
        return ErrorViews.getView(this.props.children);
    }
}