/// <reference path="../book-component/reducer/book-reducer.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX



import * as React from 'react';
import * as ReactDOM from "react-dom";
import { BookReducer } from '../book-component/reducer/book-reducer';

interface IRepeaterProps<T>
{
    array: Array<T>;
    RepeatItemHandler: ((item: T, index: number) => JSX.Element) | ((item: T) => JSX.Element);
    ParentTag: string;
    ParentTagClass: string;
}

interface IParentTagsProps {
    TagName: string;
    ElementClass: string;
}
interface IParentTagsState {
    TagName: any;
}
export class ParentTag extends React.Component<IParentTagsProps, IParentTagsState> {
    constructor(props: IParentTagsProps) {
        super(props);
        this.state = { TagName: this.props.TagName };
    }
    render() {
        return (<this.state.TagName >{this.props.children}</this.state.TagName>);
    }
}

export class ReactRepeater extends React.Component<IRepeaterProps<any>, any>{

    getList() {


        let resolvedArray = this.props.array.map(this.props.RepeatItemHandler);
        return resolvedArray;
    }
    


    render() {

        
        return (<ParentTag TagName={this.props.ParentTag} ElementClass={this.props.ParentTagClass}>
            {this.getList()}
        </ParentTag>

            );

    }


}
     







