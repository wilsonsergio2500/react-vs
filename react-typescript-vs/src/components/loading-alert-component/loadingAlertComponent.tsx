﻿/// <reference path="view/loading-alert-view.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { LoadingAlertViews } from './view/loading-alert-view';

export class LoadingAlertComponent extends React.Component<any, any>{
    render() {
        return LoadingAlertViews.GetView();
    }
}