// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';

export class LoadingAlertViews{

    static GetView(children : JSX.Element ){
        return (<div className="col-md-12 text-center">
            <div className="col-xs-12">
                <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
             </div>
            {children}
                </div>);
    }
    
}