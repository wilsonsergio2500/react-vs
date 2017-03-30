// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';

import { ILoadingProps } from './interfaces/iloadingprops';

interface ILoadingButtonComponentProps extends ILoadingProps {
    buttonClass: string;
    type: string;
    OnClick: React.EventHandler<any>;
}

export class LoadingButtonComponent extends React.Component<ILoadingButtonComponentProps, any>{

    getComponents(busy : boolean) {

        let children = (this.props.children as JSX.Element[]).map((item, index) => {
                return React.cloneElement(item, { IsWorking: busy, key: index });
        });

        return children;
    }

    render() {

        return (<button type={this.props.type}
            className={this.props.buttonClass}
            disabled={this.props.IsWorking}
            onClick={this.props.OnClick} >
            {this.getComponents(this.props.IsWorking)}
        </button>);
    }
}

