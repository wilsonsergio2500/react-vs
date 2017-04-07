/// <reference path="../../apis/fetch/fetchasync.ts" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { String } from '../../helpers/stringextended';
import { fetchAsync  } from '../../apis/fetch/fetchasync';

interface IReactHttpComponentProps{
    url: string;
    queryProps?: any[];
    asyncDelay?: number;
}
export interface IReactHttpComponentState<T> {


    resolved?: T;
    error?: any;
    IsLoading: boolean;
}

export class ReactHttp extends React.Component<IReactHttpComponentProps, IReactHttpComponentState<any>> {
    componentWillMount() {
        this.handleProps();
    }
    
    handleProps() {
        if (this.props.queryProps) {
            if (this.props.queryProps.length > 0) {
                let uri = String.format(this.props.url, this.props.queryProps);
                
                this.setState({ IsLoading: true, resolved: null });
                this.handlePromise(uri);
            }
        }
    }

    handlePromise(uri : string) {
        let that = this;
        fetchAsync(uri).then((r) => {
            that.bindState({ resolved: r, IsLoading: false });
        }).catch((e) => {
            that.bindState({ error: e, IsLoading: false });
            });
    }
    bindState(state: IReactHttpComponentState<any>) {
        let that = this;
        if (!!this.props.asyncDelay) {
            setTimeout(() => {
                that.setState(state);
            }, that.props.asyncDelay);
        } else {
            setTimeout(() => {
                that.setState(state)
            }, 1)
        }

    }
    componentWillReceiveProps(nextProps: IReactHttpComponentProps) {

        

    }

    render() {
        let child: any = this.props.children;
        return (child)(this.state);
    }
}