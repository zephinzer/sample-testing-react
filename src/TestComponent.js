import React, {Component} from 'react';
import TestComponentChild from './TestComponentChild';

export default class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.getChildComponent = this.getChildComponent.bind(this);
    this.state = {
      randomPropValue: Math.random() * 100,
    };
  }

  getChildComponent() {
    return (
      <TestComponentChild
        randomProp={this.state.randomPropValue}
      />
    );
  }

  render() {
    return (
      <div className="test-component">
        {this.getChildComponent()}
      </div>
    );
  }
};
