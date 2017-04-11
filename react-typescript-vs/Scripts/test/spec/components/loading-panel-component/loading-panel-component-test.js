// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
"use strict";
var React = require('react');
var loadingpanelcomponent_1 = require('../../../../src/components/loading-panel-component/loadingpanelcomponent');
var chai_1 = require('chai');
var enzyme_1 = require('enzyme');
var component = enzyme_1.shallow(React.createElement(loadingpanelcomponent_1.LoadingPanelComponent, null, "something"));
describe('<Loading Panel Component/>', function () {
    it('transclude something', function () {
        chai_1.expect(component.text()).to.equal('something');
    });
    it('transclusion is not incorrect', function () {
        chai_1.expect(component.text()).to.not.equal('something else...');
    });
    it('should have loading font', function () {
        chai_1.expect(component.find('.fa-circle-o-notch')).to.have.length(1);
    });
});
//# sourceMappingURL=loading-panel-component-test.js.map