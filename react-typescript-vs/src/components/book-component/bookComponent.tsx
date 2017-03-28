



// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


import * as React from 'react';
import { connect } from 'react-redux';
import { BookVm } from '../../models/book/book-model';
import { BookViews } from './view/book-view';
import { bindActionCreators, Dispatch } from 'redux';
import { SelectBook } from '../../actions/book-detail-action';

interface IBookComponentProps{
    books: Array<BookVm>;
    SelectBook: (b: BookVm) => any;
}

class BookComponent extends React.Component<IBookComponentProps, any>{

    getList() {
        let items = this.props.books.map((book, index) => {
            return BookViews.getBookItem(index, book, this.props.SelectBook);
        });
        return items;
    }
    render() {
        return (
            <ul>
                {this.getList()}
            </ul>
            ); 
    }
}

function PropsResolver(state: any) {
    return {
        books: state.books
    };
}
function ActionResolver(dispatch: Dispatch<any>) {
    return bindActionCreators({ SelectBook: SelectBook }, dispatch);
}

export default connect(PropsResolver, ActionResolver)(BookComponent);