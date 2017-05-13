import utilityHelpers from '../src/utility/helpers';
import TestComponent from '../src/TestComponent';
import TestComponentChild from '../src/TestComponentChild';
import React from 'react';
import {shallow} from 'enzyme';

describe('function level', () => {
  it('tests that functions work as expected', () => {
   expect(utilityHelpers.summation(1, 2)).to.equal(3);
   expect(utilityHelpers.division(1, 2)).to.equal(0.5);
   expect(utilityHelpers.multiplication(1, 2)).to.equal(2);
   expect(utilityHelpers.subtraction(1, 2)).to.equal(-1);
   expect(utilityHelpers.exponent(1, 2)).to.equal(1);
   expect(utilityHelpers.bitwiseRight(2, 8)).to.equal(512);
   expect(utilityHelpers.bitwiseLeft(8, 2)).to.equal(2);
  });
});

describe('component level', () => {
  it('tests that functions in components work as expected', () => {
    const testComponent = shallow(<TestComponent />);
    const instance = testComponent.instance();
    expect(instance.getChildComponent).to.be.a('function');
    expect(instance.getChildComponent().type).to.equal(TestComponentChild);
  });
});

describe('page level', () => {
  it('tests that components pass things to each other nicely', () => {
    const testComponent = shallow(<TestComponent />);
    const instance = testComponent.instance();
    const randomPropFromTestComponent = instance.state.randomPropValue;
    const childComponent = instance.getChildComponent();
    const observedRandomProp = childComponent.props.randomProp;
    expect(observedRandomProp).to.equal(randomPropFromTestComponent);
  });
});
