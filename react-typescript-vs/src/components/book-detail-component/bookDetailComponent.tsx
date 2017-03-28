// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { connect } from 'react-redux';
import { BookDetailViews } from './view/book-detail-view';
import { BookVm } from '../../models/book/book-model';

interface IBookDetailComponentProp {
    activeBook: BookVm
}

class BookDetailComponent extends React.Component<IBookDetailComponentProp, any>{

    render() {
        if (!this.props.activeBook) {
            return (<div>Book not Selected...</div>)
        }

        return BookDetailViews.getView(this.props.activeBook);
    }
}

function ResolveProps(state : any) {
    return {
        activeBook: state.activeBook
    }
}

export default connect(ResolveProps)(BookDetailComponent);