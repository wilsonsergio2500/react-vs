// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import * as ReactDOM from "react-dom";
import { BookReducer } from '../book-component/reducer/book-reducer';
import { ReactRepeater } from './reactrepeatercomponent';
import { BookVm } from '../../models/book/book-model';

export class RepeaterTest extends React.Component<any, any> {

    repeatHandler(book: BookVm, index: number) {

        return (<div className="col-md-3" key={index}>{book.title}</div>);
    }

    render() {
        let array = BookReducer.ReducerFunction()
       
        return (
            <div className="container">
                <div className="">
                    <code>The below is data from a <b>Repeater</b>, like <b>ngRepeat:</b></code>
                </div>
                <div className="col-md-112">
                        <ReactRepeater array={array}
                        ParentTag="div"
                        ParentTagClass="row"
                        RepeatItemHandler={this.repeatHandler}></ReactRepeater>
                </div>
             </div>
                );
    }
}