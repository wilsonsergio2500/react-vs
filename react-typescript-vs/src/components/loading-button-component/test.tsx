/// <reference path="index.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';

import { LoadingButton, BtnMesage, BtnLoadingMessage } from './index';
export interface ILoadingButtonTest {
    gotBusy: boolean;
}


export class LoadingButtonTest extends React.Component<any, ILoadingButtonTest> {
    componentWillMount() {
        this.setState({gotBusy: false})
    }

    OnClick() {
        console.log('you clicked me', 'I am on parent');
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
            <div className="container">
                <div className="">
                    
                </div>
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