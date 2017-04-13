// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { ReactShow } from '../../components/react-show-component/reactshow';

export class ReactShowComponentUsage extends React.Component<any, any> {
    constructor(props : any) {
        super(props);
        this.state = {};
        this.state.IsShow = true;
    }
    
    clickHandler() {
        this.setState({ IsShow: !this.state.IsShow })
    }

    render() {
        let IsShow = true;

        return (

            <div className="col-md-112">
                <button type="button" className="btn btn-primary"
                    onClick={() => this.clickHandler()}>
                    {this.state.IsShow ? 'Hide Me' : 'Show Me'}
                </button>
                <ReactShow show={this.state.IsShow}>
                    <code>Item Shown</code>

                </ReactShow>
            </div>

        );
    }
}