describe('chai', () => {
  it('allows you to expect things', () => {
    expect(1 === 1).to.be.true;
    expect({a: 1, b: 2}).to.have.keys(['a', 'b']);
    expect([1, 2, 3, 4]).to.have.length(4);
    expect(()=>1).to.be.a('function');
    expect('string').to.be.a('string');
  });
});
