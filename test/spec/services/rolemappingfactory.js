'use strict';

describe('Service: roleMappingFactory', function () {

  // load the service's module
  beforeEach(module('virtualQueueFrontendApp'));

  // instantiate service
  var roleMappingFactory;
  beforeEach(inject(function (_roleMappingFactory_) {
    roleMappingFactory = _roleMappingFactory_;
  }));

  it('should do something', function () {
    expect(!!roleMappingFactory).toBe(true);
  });

});
