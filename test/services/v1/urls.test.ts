import app from '../../../src/app';

describe('\'v1/urls\' service', () => {
  it('registered the service', () => {
    const service = app.service('v1/urls');
    expect(service).toBeTruthy();
  });
});
