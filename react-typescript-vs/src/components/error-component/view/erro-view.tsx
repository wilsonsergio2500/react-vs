// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';

import { Alert } from 'react-bootstrap';

export class ErrorViews {

    static getView(transcludeItem: React.ReactNode){
        return (<div className="col-md-12">
            <Alert bsStyle="danger">
                <strong>Ohhh Snap!!</strong>
                {transcludeItem}
            </Alert>
        </div>);
    }
}