// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { ReactErrorTitle } from './react-error-title/react-error-title';
import { ReactErrorMessage } from './react-error-message/react-error-message'
import { ReactErrorComponent } from './react-error'

export namespace ReactError {

    export const Title = ReactErrorTitle;
    export const Message = ReactErrorMessage;

    export const Error = ReactErrorComponent;
}