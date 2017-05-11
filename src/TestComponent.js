import React, {Component} from 'react';
import TestComponentChild from './TestComponentChild';

export default class TestComponent extends Component {
  render() {
    return (
      <div className="test-component">
        <TestComponentChild />
      </div>
    );
  }
};
