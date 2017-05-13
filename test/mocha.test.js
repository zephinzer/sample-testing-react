describe('mocha', () => {
  const envA = {};
  const envB = {};
  let currentEnv = null;
  before(() => {
    envA.a = 1;
    envB.a = 2;
  });
  after(() => {
    delete envA.a;
    delete envB.b;
  });
  context('has a context and...', () => {
    beforeEach(() => { currentEnv = Object.assign({}, envA); });
    afterEach(() => { currentEnv = null; });
    it('should work', () => { expect(currentEnv.a).to.equal(1); });
  });
  context('can have another context and...', () => {
    beforeEach(() => { currentEnv = Object.assign({}, envB); });
    it('should still work', () => { expect(currentEnv.a).to.equal(2); });
  });
});
