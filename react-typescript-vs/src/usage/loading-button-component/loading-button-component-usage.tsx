/// <reference path="../../components/loading-button-component/index.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { LoadingButton, BtnMesage, BtnLoadingMessage } from '../../components/loading-button-component/index';
export interface ILoadingButtonTest {
    gotBusy: boolean;
}

export class LoadingButtonComponentUsage extends React.Component<any, ILoadingButtonTest> {
    componentWillMount() {
        this.setState({ gotBusy: false })
    }

    OnClick() {
        this.setState({
            gotBusy: true
        });

        let that = this;
        setTimeout(() => {
            that.setState({ gotBusy: false });
        }, 8000);
    }

    render() {
        return (
            <div className="row">
              
                <div className="col-md-2">
                    <LoadingButton buttonClass="btn btn-primary" type="button" IsWorking={this.state.gotBusy} OnClick={() => this.OnClick()}>
                        <BtnMesage>
                            Update
                        </BtnMesage>
                        <BtnLoadingMessage>
                            Loading..
                        </BtnLoadingMessage>
                    </LoadingButton>

                </div>
                <div className="col-md-2">
                    <LoadingButton buttonClass="btn btn-danger" type="button" IsWorking={this.state.gotBusy} OnClick={() => this.OnClick()}>
                        <BtnMesage >
                            <i className="fa fa-trash-o"></i>
                        </BtnMesage>
                        <BtnLoadingMessage>
                            Deleting Stuff...
                        </BtnLoadingMessage>
                    </LoadingButton>
                </div>
            </div>
        );
    }

}