import React from 'react';
import {shallow} from 'enzyme';
import TestComponent from '../src/TestComponent';
import TestComponentChild from '../src/TestComponentChild';

describe('enzyme', function() {
  let testComponentRenderSpy;
  let render;

  before(() => {
    testComponentRenderSpy = sinon.spy(TestComponent.prototype, 'render');
    render = shallow(<TestComponent />);
  });

  it('can render the test component', () => {
    expect(testComponentRenderSpy.callCount).to.eq(1);
  });

  it('also renders the child component inside the test component', () => {
    const childComponent = render.find(TestComponentChild);
    expect(childComponent).to.have.length(1);
  });
});
