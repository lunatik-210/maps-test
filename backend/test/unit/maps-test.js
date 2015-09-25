import backend from '../../src/maps-test';

describe('backend', () => {
  describe('Greet function', () => {
    beforeEach(() => {
      spy(backend, 'greet');
      backend.greet();
    });

    it('should have been run once', () => {
      expect(backend.greet).to.have.been.calledOnce;
    });

    it('should have always returned hello', () => {
      expect(backend.greet).to.have.always.returned('hello');
    });
  });
});
