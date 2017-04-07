

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { connect } from 'react-redux';
import { GetStockPrice } from '../../apis/stock-nasdaq/stock-api-nasdaq';
import { StockViews } from './view/stock-view';
import { IStock } from '../../models/stock/stock';
import { LoadingPanelComponent } from '../loading-panel-component/loadingpanelcomponent'
import { ErrorComponent } from '../error-component/errorcomponent';

interface IStockComponentProps {
    ticket: string;
}
interface IStockComponentState {
    stockInfo?: Array<IStock>;
    error?: any;
    IsWorking: boolean;
}

export class StockComponent extends React.Component<IStockComponentProps, IStockComponentState>{
    constructor(props: IStockComponentProps) {
        super(props);

       
    }
    private fetch: any;
    componentWillMount() {
        this.setState({ IsWorking: true });
        this.fetchStock(this.props.ticket);

       

    }
  
    componentWillReceiveProps(nextprop: IStockComponentProps) {
        if (!!nextprop.ticket) {
            this.fetchStock(nextprop.ticket);
        }
    }

    fetchStock(ticketSymbol : string) {
        GetStockPrice(ticketSymbol).then((x) => {
            if (!!x.error) {
          
                this.setState({ error: x.error, IsWorking: false });
            } else {
                this.setState({ stockInfo: x.payload, IsWorking: false });
            }
        });
    }
    render() {



        if (this.state.IsWorking) {
            return (<LoadingPanelComponent>
                retrieving {this.props.ticket}...
            </LoadingPanelComponent>);
        }
        if (!!this.state.error) {
            return (
                <ErrorComponent>
                        <span>Look dude, The stock <b>{this.props.ticket} </b> is not in the Exchange: <b>NASDAQ</b>
                        </span>
                </ErrorComponent>
            );
        }

        return StockViews.GetView(this.state.stockInfo[0]);
    }

}