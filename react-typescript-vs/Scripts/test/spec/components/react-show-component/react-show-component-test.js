"use strict";
// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
var React = require('react');
var enzyme_1 = require('enzyme');
var reactshow_1 = require('../../../../src/components/react-show-component/reactshow');
var item = (React.createElement("span", null, "You will Hide me"));
var componentShown = enzyme_1.shallow(React.createElement(reactshow_1.ReactShow, {show: true}, item));
var componentHidden = enzyme_1.shallow(React.createElement(reactshow_1.ReactShow, {show: false}, item));
describe('<ReactShow Component/>', function () {
    it('component show element', function () {
    });
});
//# sourceMappingURL=react-show-component-test.js.map