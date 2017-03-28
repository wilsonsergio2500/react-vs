



// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


import * as React from 'react';
import { BookVm } from '../../../models/book/book-model';

export class BookViews {
 
    static getBookItem(key: number | string, bookVm: BookVm, selectFunction : Function)
    {
        return (<li key={key} className="list-group col-sm-4" onClick={() => selectFunction(bookVm)}>{bookVm.title}</li>);
    }
}

