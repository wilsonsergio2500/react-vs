// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { LoadingPanelComponent } from '../../components/loading-panel-component/loadingpanelcomponent';

export class LoadingPanelComponentUsage extends React.Component<any, any>{
    render() {

        return (<LoadingPanelComponent>
            Loading Message Goes Here....
        </LoadingPanelComponent>);
    }
}