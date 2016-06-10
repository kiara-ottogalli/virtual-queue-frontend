'use strict';

describe('Controller: NumberCtrl', function () {

  // load the controller's module
  beforeEach(module('virtualQueueFrontendApp'));

  var NumberCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NumberCtrl = $controller('NumberCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(NumberCtrl.awesomeThings.length).toBe(3);
  });
});
