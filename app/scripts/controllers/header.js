'use strict';

/**
 * @ngdoc function
 * @name virtualQueueFrontendApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the virtualQueueFrontendApp
 */
angular.module('virtualQueueFrontendApp')
  .controller('HeaderCtrl', ['$scope', '$rootScope', '$window', '$localStorage', 'authFactory', function ($scope, $rootScope, $window, $localStorage, authFactory) {
    
    $scope.token = $localStorage.getObject('Token', '{}');
    
    $scope.logout = function() {
      authFactory.logout();
      $rootScope.loggedIn = false;
      $rootScope.username = '';
      $window.location.href = '#';
    };
    
    if(!authFactory.isAuthenticated()){
      $window.location.href = '#';
    }
    
  }]);
