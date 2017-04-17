// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import * as sinon from 'sinon';
import { LoadingButton, BtnLoadingMessage, BtnMesage } from '../../../../src/components/loading-button-component/index';

const onClickEvent = sinon.spy();
const IsBusy = true;
const wrapper = mount(
    <LoadingButton buttonClass="btn btn-primary" type="button" IsWorking={IsBusy} OnClick={onClickEvent}>
        <BtnMesage>
            Update
                    </BtnMesage>
        <BtnLoadingMessage>
            Loading..
                </BtnLoadingMessage>
    </LoadingButton>

);
const exam = () => { return (<div>yello </div>); }

describe('<LoadingButton Component />', () => {

    it('allow us to set properties', () => {

        expect(wrapper.props().IsWorking).to.be.equal(true);
        expect(wrapper.props().buttonClass).to.be.equal('btn btn-primary');
        expect(wrapper.props().OnClick).to.be.equal(onClickEvent);
        expect(wrapper.props().type).to.be.equal('button');
    });

    

    it('property change bind to children', () => {

        wrapper.setProps({
            IsWorking: false
        });

        expect(wrapper.find(BtnMesage).props().IsWorking).to.be.equal(false);
        expect(wrapper.find(BtnLoadingMessage).props().IsWorking).to.be.equal(false);

    });

    it('button click works', () => {

        wrapper.find('button').simulate('click');
        expect(onClickEvent.called).to.be.equal(true);
    });


      describe('<BtnMessage Child Component />', () => {
                it('element was transcluded', () => {
                    expect(wrapper.find(BtnMesage)).to.have.length(1);
                });
                it('property was set in component', () => {
                    expect(wrapper.find(BtnMesage).props().IsWorking).to.be.equal(false);
                });
    });

      describe('<BtnLoadingMessage Child Component />', () => {
          it('element was transcluded', () => {
              expect(wrapper.find(BtnLoadingMessage)).to.have.length(1);
          });
          it('property was set in component', () => {
              expect(wrapper.find(BtnLoadingMessage).props().IsWorking).to.be.equal(false);
          });
      });


});