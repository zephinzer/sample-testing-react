describe('sinon', () => {
  const testFunctions = {
    toBeCalled: (arg) => {},
    caller: () => {
      testFunctions.toBeCalled('a');
    },
  };

  it('spies on functions', () => {
    const toBeCalledSpy = sinon.spy(testFunctions, 'toBeCalled');
    testFunctions.caller();
    expect(toBeCalledSpy).to.be.calledOnce;
    expect(toBeCalledSpy).to.be.calledWith('a');
  });
});
