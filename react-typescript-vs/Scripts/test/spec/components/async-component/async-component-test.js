/// <reference path="../../../../src/components/react-error-component/index.tsx" />
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var React = require('react');
var chai_1 = require('chai');
var enzyme_1 = require('enzyme');
var async_component_1 = require('../../../../src/components/async-component/async-component');
var loadingpanelcomponent_1 = require('../../../../src/components/loading-panel-component/loadingpanelcomponent');
var index_1 = require('../../../../src/components/react-error-component/index');
var Promise = require('bluebird');
var promisetime = 2000;
var mockResolve = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve({ item: 'OK' });
        }, promisetime);
    });
};
var mockError = function () {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            reject('something wrong');
        }, promisetime);
    });
};
var wrapper = enzyme_1.mount(React.createElement(async_component_1.AsyncComponent, {asyncPromise: mockResolve()}, function (state) {
    if (state.IsLoading) {
        return (React.createElement(loadingpanelcomponent_1.LoadingPanelComponent, null, "Loading.."));
    }
    else if (state.error) {
        return (React.createElement(index_1.ReactError.Error, null, 
            React.createElement(index_1.ReactError.Title, null, "Ohh Snap!!, Something Wrong Happen"), 
            React.createElement(index_1.ReactError.Message, null, "Dude! there was an eeror...")));
    }
    else if (state.resolved) {
        return (React.createElement("div", null, "this resolved..."));
    }
}));
describe('<AsyncComponent1 Component />', function () {
    it('transclude loading state', function () {
        chai_1.expect(wrapper.find(loadingpanelcomponent_1.LoadingPanelComponent)).to.have.length(1);
    });
    it('transclude resolve state', function () {
        setTimeout(function () {
            chai_1.expect(wrapper.find(loadingpanelcomponent_1.LoadingPanelComponent)).to.have.length(0);
            chai_1.expect(wrapper.find(index_1.ReactError.Error)).to.have.length(0);
        }, promisetime);
    });
    it('allow us to set promise & transclude error state', function () {
        wrapper.setProps({
            asyncPromise: mockError()
        });
        setTimeout(function () {
            chai_1.expect(wrapper.find(index_1.ReactError.Error)).to.have.length(1);
        }, promisetime);
    });
});
//# sourceMappingURL=async-component-test.js.map