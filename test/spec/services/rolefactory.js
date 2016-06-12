'use strict';

describe('Service: roleFactory', function () {

  // load the service's module
  beforeEach(module('virtualQueueFrontendApp'));

  // instantiate service
  var roleFactory;
  beforeEach(inject(function (_roleFactory_) {
    roleFactory = _roleFactory_;
  }));

  it('should do something', function () {
    expect(!!roleFactory).toBe(true);
  });

});
