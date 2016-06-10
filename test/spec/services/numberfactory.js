'use strict';

describe('Service: numberFactory', function () {

  // load the service's module
  beforeEach(module('virtualQueueFrontendApp'));

  // instantiate service
  var numberFactory;
  beforeEach(inject(function (_numberFactory_) {
    numberFactory = _numberFactory_;
  }));

  it('should do something', function () {
    expect(!!numberFactory).toBe(true);
  });

});
