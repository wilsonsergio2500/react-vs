"use strict";
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require('react');
var chai_1 = require('chai');
var enzyme_1 = require('enzyme');
var sinon = require('sinon');
var index_1 = require('../../../../src/components/loading-button-component/index');
var onClickEvent = sinon.spy();
var IsBusy = true;
var wrapper = enzyme_1.mount(React.createElement(index_1.LoadingButton, {buttonClass: "btn btn-primary", type: "button", IsWorking: IsBusy, OnClick: onClickEvent}, 
    React.createElement(index_1.BtnMesage, null, "Update"), 
    React.createElement(index_1.BtnLoadingMessage, null, "Loading..")));
var exam = function () { return (React.createElement("div", null, "yello ")); };
describe('<LoadingButton Component />', function () {
    it('allow us to set properties', function () {
        chai_1.expect(wrapper.props().IsWorking).to.be.equal(true);
        chai_1.expect(wrapper.props().buttonClass).to.be.equal('btn btn-primary');
        chai_1.expect(wrapper.props().OnClick).to.be.equal(onClickEvent);
        chai_1.expect(wrapper.props().type).to.be.equal('button');
    });
    it('property change bind to children', function () {
        wrapper.setProps({
            IsWorking: false
        });
        chai_1.expect(wrapper.find(index_1.BtnMesage).props().IsWorking).to.be.equal(false);
        chai_1.expect(wrapper.find(index_1.BtnLoadingMessage).props().IsWorking).to.be.equal(false);
    });
    it('button click works', function () {
        wrapper.find('button').simulate('click');
        chai_1.expect(onClickEvent.called).to.be.equal(true);
    });
    describe('<BtnMessage Child Component />', function () {
        it('element was transcluded', function () {
            chai_1.expect(wrapper.find(index_1.BtnMesage)).to.have.length(1);
        });
        it('property was set in component', function () {
            chai_1.expect(wrapper.find(index_1.BtnMesage).props().IsWorking).to.be.equal(false);
        });
    });
    describe('<BtnLoadingMessage Child Component />', function () {
        it('element was transcluded', function () {
            chai_1.expect(wrapper.find(index_1.BtnLoadingMessage)).to.have.length(1);
        });
        it('property was set in component', function () {
            chai_1.expect(wrapper.find(index_1.BtnLoadingMessage).props().IsWorking).to.be.equal(false);
        });
    });
});
//# sourceMappingURL=loading-button-component-test.js.map