'use strict';

/**
 * @ngdoc function
 * @name virtualQueueFrontendApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the virtualQueueFrontendApp
 */
angular.module('virtualQueueFrontendApp')
  .controller('HeaderCtrl', ['$scope', '$rootScope', '$window', 'authFactory', function ($scope, $rootScope, $window, authFactory) {
    
    $scope.logout = function() {
      authFactory.logout();
      $rootScope.loggedIn = false;
      $rootScope.username = '';
      $window.location.href = '#';
    };
    
  }]);
