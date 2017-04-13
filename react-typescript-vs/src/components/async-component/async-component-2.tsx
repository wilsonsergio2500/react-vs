/// <reference path="../loading-panel-component/loadingpanelcomponent.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import * as Promise from 'bluebird';

import { AsyncComponent, IAsyncComponentProps, IAsyncComponentState } from './async-component'
import { LoadingPanelComponent } from '../loading-panel-component/loadingpanelcomponent'

interface IAsyncComponent2Props extends IAsyncComponentProps{
    onSuccess: (payLoad: any) => JSX.Element;
    onError?: (error: any) => JSX.Element;
    onLoading?: () => JSX.Element;
}

interface IAsynccomponent2State extends IAsyncComponentProps {
    onError?: (error: any) => JSX.Element;
    onLoading?: () => JSX.Element;
}

export class AsyncComponent2 extends React.Component<IAsyncComponent2Props, IAsynccomponent2State>{

    constructor(props: IAsyncComponent2Props) {
        super(props);
        this.getChildState = this.getChildState.bind(this);
    }

    componentWillMount() {
        this.initState();
       
    }
    initState() {
        this.setState({
            asyncPromise: this.props.asyncPromise, asyncDelay: this.props.asyncDelay
            , onError: (!!this.props.onError) ? this.props.onError : this.onError
            , onLoading: (!!this.props.onLoading) ? this.props.onLoading : this.onLoading
        });

    }
    onError(error: any) {
        return (<div className="col-md-12 text-center">
            <div className="col-xs-12">
                <i className="fa fa-exclamation-triangle fa-3x text-danger" aria-hidden="true"></i>
            </div>
            <span className="text-danger">
                <b>Ohh Snap!!, Somthing Wrong Happen</b>
            </span>
            <br />
            <span className="text-danger">
                Dude! that stock! does not exist in Exhange NASDAQ- Error returned: {error}
            </span>
        </div>);
    }
    onLoading() {
        return (<LoadingPanelComponent>
                Fetching data..
            </LoadingPanelComponent>)
    }

    getChildState(state: IAsyncComponentState<any>) {
        
        if (state.IsLoading) {
            if (this.state.onLoading) {
                return this.state.onLoading()
            }
        } else if (state.error) {
            if (this.state.onError) {
                return this.state.onError(state.error);
            }
        } else {
            return this.props.onSuccess(state.resolved);
        }
        return (<div></div>);
    }

    componentWillReceiveProps(nextProps: IAsyncComponentProps) {

        if (nextProps.asyncPromise != this.props.asyncPromise) {
            this.setState({ asyncPromise : nextProps.asyncPromise });
        }

    }

    render() {
        return (
            <AsyncComponent asyncPromise={this.state.asyncPromise} asyncDelay={this.state.asyncDelay}>
                {
                    this.getChildState
                }
            </AsyncComponent>
            
            )
    }
}