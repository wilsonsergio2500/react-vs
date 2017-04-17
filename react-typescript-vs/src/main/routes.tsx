// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { Route, IndexRoute } from 'react-router'
import { App } from './app';

import { LoadingButtonPage } from '../pages/loading-button/loading-buton-page';
import { ReactShowPage } from '../pages/react-show/react-show';
import { LoadingPanelPage } from '../pages/loading-panel/loading-panel';
import { ReactRepeatPage } from '../pages/react-repeat/react-repeat-page';
import { AsyncComponent1Page } from '../pages/react-async/react-async1-page';
import { AsyncComponent2Page } from '../pages/react-async/react-async2-page';
import { ReactHttpPage } from '../pages/react-http/react-http-page';
import { HomePage } from '../pages/home/home';
import { ReactErrorPage } from '../pages/react-error/react-error-page';
import { UnitTestPage } from '../pages/unit-test/unit-test-page';

export const Routes = (
    <Route path="/" component={App} >
        
        <IndexRoute component={HomePage} />

        <Route path="home" component={HomePage} />
        <Route path="reactshow" component={ReactShowPage} />
        <Route path="reactrepeat" component={ReactRepeatPage} />
        <Route path="loadingpanel" component={LoadingPanelPage} />
        <Route path="reacterror" component={ReactErrorPage} />
        <Route path="loadingbutton" component={LoadingButtonPage} />

        <Route path="reactasync1" component={AsyncComponent1Page} />
        <Route path="reactasync2" component={AsyncComponent2Page} />
        <Route path="reacthttp" component={ReactHttpPage} />
        <Route path="unittest" component={UnitTestPage} />
        
        
    </Route>
);
