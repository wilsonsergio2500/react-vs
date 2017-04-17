// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { fetchYQLPlace } from '../../apis/yql-place/yql-place';
import { LoadingPanelComponent } from '../../components/loading-panel-component/loadingpanelcomponent';
import { AsyncComponent, IAsyncComponentState } from '../../components/async-component/async-component'
import { IYqlQuery } from '../../models/yqlplace/yqlplace';
import { GetStockDetails } from '../../apis/stock/stock-details';
import { IStock } from '../../models/stock/stock';
import { ReactError } from '../../components/react-error-component/index';

enum promiseType {
    google = 1,
    gwz = 2,
}

export class AsyncComponentUsage extends React.Component<any, any>{


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

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-12">
                    <button className="btn btn-primary" onClick={() => { this.changePromise() } }>Change Injected Promise</button>
                </div>
                <div className="col-md-12">
                    <AsyncComponent asyncPromise={this.state.promiseToSolve} asyncDelay={3000}>
                        {
                            (childstate: IAsyncComponentState<IStock[]>) => {
                                if (childstate.IsLoading) {
                                    return (<LoadingPanelComponent>Retrieving</LoadingPanelComponent>)
                                }
                                if (childstate.resolved) {
                                    let stock = childstate.resolved[0];
                                    let IsUp = (stock.c.charAt(0) == '+');
                                    let containerClasses = (status: boolean) => { return (status) ? 'bs-callout bs-callout-success' : 'bs-callout bs-callout-danger' }
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
                                if (childstate.error) {
                                    return (
                                        <ReactError.Error>
                                            <ReactError.Title>
                                                Ohh Snap!!, Something Wrong Happen
                                            </ReactError.Title>
                                            <ReactError.Message>
                                                Dude! that stock! does not exist in Exhange NASDAQ- Error returned: {childstate.error}
                                            </ReactError.Message>
                                        </ReactError.Error>
                                        );
                                }
                            }
                        }
                    </AsyncComponent>
                </div>
            </div>
        );
    }
}