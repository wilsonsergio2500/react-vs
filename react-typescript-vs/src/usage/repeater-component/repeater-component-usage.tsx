// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { ReactRepeater } from '../../components/repeater-component/reactrepeatercomponent'

interface IBookVM {
    title: string;
    author: string;
}

const getBooks = () => {
    let books: IBookVM[] = [];
    books.push({ title: 'The greates Salesman in The World', author: 'Og Mandino' });
    books.push({ title: 'Burro Genius', author: 'Victor Villaseñor' });
    books.push({ title: 'Flash Boys', author: 'Michael Lewis' });
    books.push({ title: 'Chaos Monkeys', author: 'Antonio Garcia Martinez' });
    return books;
}

export class ReactRepeaterComponentUsage extends React.Component<any, any> {


    repeatHandler(book: IBookVM, index: number) {

        return (<div className="col-md-12" key={index}>
            {book.title} <b>By:</b>
            <code>{book.author}</code>
        </div>);
    }

    render() {

        return (

            <div className="col-md-112">
                <ReactRepeater array={getBooks()}
                    ParentTag="div"
                    ParentTagClass="row"
                    RepeatItemHandler={this.repeatHandler}></ReactRepeater>
            </div>

        );
    }

}