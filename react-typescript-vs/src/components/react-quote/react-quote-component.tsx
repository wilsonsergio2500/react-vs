// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';

interface IReactQuoteProps {
    author: string
    IsBookWriter?: boolean;
}
interface IReactQuoteState {
    IsBusy : boolean
}

export class ReactQuote extends React.Component<IReactQuoteProps, IReactQuoteState>{

    constructor(props: IReactQuoteProps) {
        super(props);
    }

    componentWillReceiveProps(nextprop: IReactQuoteState) {
        if (nextprop.IsBusy != this.state.IsBusy) {
        }
    }

componentDidMount() {
}

componentWillUnmount() {
    }

    componentWillMount() {
        this.setState({ IsBusy: true });
    }

    render() {
        return (<div>
            <div className="block-quote">
                <p>
                    <i className="fa fa-quote-left"></i> {this.props.children} <i className="fa fa-quote-right"></i>
                </p>
            </div>
            <div>
                <b>--- {this.props.author}</b>
            </div>
        </div>);

    }
}