/// <reference path="../../../../src/components/react-error-component/index.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import * as sinon from 'sinon';
import { AsyncComponent, IAsyncComponentState } from '../../../../src/components/async-component/async-component';
import { LoadingPanelComponent } from '../../../../src/components/loading-panel-component/loadingpanelcomponent';
import { ReactError } from '../../../../src/components/react-error-component/index';
import * as Promise from 'bluebird';

const promisetime = 2000;

const mockResolve = () : Promise<any> => {
    return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
            resolve({ item: 'OK' });
        }, promisetime);
    });
}
const mockError = (): Promise<any>  => {
    return new Promise<any>((resolve, reject) => {
        setTimeout(() => {
            reject('something wrong');
        }, promisetime);
    });
}

let wrapper = mount(<AsyncComponent asyncPromise={mockResolve()} >
    {
        (state: IAsyncComponentState<any>) => {
            if (state.IsLoading) {
                return (<LoadingPanelComponent>Loading..</LoadingPanelComponent>);
            } else if (state.error) {
                return (
                    <ReactError.Error>
                        <ReactError.Title>
                            Ohh Snap!!, Something Wrong Happen
                                            </ReactError.Title>
                        <ReactError.Message>
                            Dude! there was an eeror...
                        </ReactError.Message>
                    </ReactError.Error>
                )
            } else if (state.resolved) {
                return (<div>this resolved...</div>);
            }
        }
    }
</AsyncComponent>);

describe('<AsyncComponent1 Component />', () => {

    it('transclude loading state', () => {
        expect(wrapper.find(LoadingPanelComponent)).to.have.length(1);
    });

    it('transclude resolve state', () => {
        setTimeout(() => {
            expect(wrapper.find(LoadingPanelComponent)).to.have.length(0);
            expect(wrapper.find(ReactError.Error)).to.have.length(0);
        }, promisetime);
    });

    it('allow us to set promise & transclude error state', () => {
        wrapper.setProps({
            asyncPromise: mockError()
        });
        setTimeout(() => {

            expect(wrapper.find(ReactError.Error)).to.have.length(1);
        }, promisetime);
    });
    
});