// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX

import * as React from 'react';
import { LoadingPanelComponent } from '../../../../src/components/loading-panel-component/loadingpanelcomponent';
import { expect } from 'chai';
import { shallow } from 'enzyme';

const component = shallow(<LoadingPanelComponent>something</LoadingPanelComponent>);
describe('<Loading Panel Component/>', () => {

    it('transclude something', () => {
        expect(component.text()).to.equal('something');
    });

    it('transclusion is not incorrect',() => {
        expect(component.text()).to.not.equal('something else...');
    });

    it('should have loading font', () => {
        expect(component.find('.fa-circle-o-notch')).to.have.length(1);
    });
});