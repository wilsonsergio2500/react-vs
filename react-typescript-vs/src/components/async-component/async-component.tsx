// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX


import * as React from 'react';
import * as Promise from 'bluebird';

interface IAsyncComponentProps {
    asyncPromise: Promise<any>
    asyncDelay?: number; //in milliseconds.
}
export interface IAsyncComponentState<T> {
    resolved?: T;
    error?: any;
    IsLoading: boolean;
}

export class AsyncComponent extends React.Component<IAsyncComponentProps, IAsyncComponentState<any>>{

    constructor(props: IAsyncComponentProps) {
        super(props);

    }
    componentWillMount() {
       
        this.setState({ IsLoading: true });
        this.promiseHandler(this.props.asyncPromise);
    }
    promiseHandler(promise: Promise<any>) {
        let completed = false;
        if (promise.isFulfilled()) {
            this.bindState({ resolved: promise.value(), IsLoading: false });
            completed = true;
        } 
        if (promise.isRejected()) {
            this.bindState({ error: promise.reason(), IsLoading: false });
            completed = true;
        }
        if (!completed) {
            
            promise.then((r) => {
                this.bindState({ resolved: r, IsLoading: false });
            }).catch((e) => {
                this.bindState({ error: e, IsLoading: false });
            })
        }
    }
    bindState(state: IAsyncComponentState<any>) {
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
    componentWillReceiveProps(nextProps: IAsyncComponentProps) {
       
        if (nextProps.asyncPromise != this.props.asyncPromise) {
            this.setState({ IsLoading: true, resolved: null });
            this.promiseHandler(nextProps.asyncPromise);
        }

    }

    render() {
        let child = this.props.children as any;
        return (child(this.state));
    }
}