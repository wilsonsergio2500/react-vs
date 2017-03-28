// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { BookVm } from '../../../models/book/book-model';

export class BookDetailViews {

    static getView(book : BookVm) {

        return (<div>
            <h1>Detail:</h1>
            <h2>{book.title}</h2>
            <span>{book.IsBestSeller ? 'TRUE': 'FALSE'}</span>
        </div>)
    }
}