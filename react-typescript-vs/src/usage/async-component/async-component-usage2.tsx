﻿// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { fetchYQLPlace } from '../../apis/yql-place/yql-place';
import { LoadingPanelComponent } from '../../components/loading-panel-component/loadingpanelcomponent';
import { AsyncComponent, IAsyncComponentState } from '../../components/async-component/async-component';
import { AsyncComponent2 } from '../../components/async-component/async-component-2';
import { IYqlQuery } from '../../models/yqlplace/yqlplace';
import { GetStockDetails } from '../../apis/stock/stock-details';
import { IStock } from '../../models/stock/stock';

enum promiseType {
    google = 1,
    gwz = 2,
}

export class AsyncComponentUsage2 extends React.Component<any, any>{


    componentWillMount() {
        this.setState({ PromiseType: promiseType.google, promiseToSolve: GetStockDetails('NASDAQ', 'GOOGL') });
    }
    changePromise() {
        if (this.state.PromiseType == promiseType.google) {
            this.setState({ PromiseType: promiseType.gwz, promiseToSolve: GetStockDetails('NASDAQ', 'GWZ') });
        } else {
            this.setState({ PromiseType: promiseType.google, promiseToSolve: GetStockDetails('NASDAQ', 'GOOGL') });
        }
    }

    onSuccess(payload: IStock[]) {
        let stock = payload[0];
        let IsUp = (stock.c.charAt(0) == '+');
        let containerClasses = (status: boolean) => { return (status) ? 'bs-callout bs-callout-success' : 'bs-callout bs-callout-danger' };
        return (
            <div className="col-md-12">
                <div className={containerClasses(IsUp)}>
                    <h4>{stock.e}:{stock.t}- {stock.lt}</h4>


                    <span>{stock.l_cur}USD </span>
                    <span className="small"></span>

                    <span className={IsUp ? 'text-success' : 'text-danger'}>
                        <i className={IsUp ? 'fa fa-arrow-up' : 'fa fa-arrow-down'}></i>
                        <strong>{stock.c_fix}({stock.cp}%)</strong>
                    </span>
                </div>
            </div>
        );
    }
    onerror(error: any) {
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

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-12">
                    <button className="btn btn-primary" onClick={() => { this.changePromise() } }>Change Injected Promise</button>
                </div>
                <div className="col-md-12">
                    <AsyncComponent2 asyncPromise={this.state.promiseToSolve} asyncDelay={3000} onSuccess={this.onSuccess}>
                       
                    </AsyncComponent2>
                </div>
            </div>
        );
    }
}