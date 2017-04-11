// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
import * as React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import { ReactShow } from '../../../../src/components/react-show-component/reactshow';


const item = (<span>You will Hide me</span>);
const componentShown = shallow(<ReactShow show={true} >
    {item}
</ReactShow>);
const componentHidden = shallow(<ReactShow show={false} >
    {item}</ReactShow>);

describe('<ReactShow Component/>', () => {
    it('component show element', () => {
        
    });
});