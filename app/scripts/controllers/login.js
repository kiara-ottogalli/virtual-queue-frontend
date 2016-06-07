'use strict';

/**
 * @ngdoc function
 * @name virtualQueueFrontendApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the virtualQueueFrontendApp
 */
angular.module('virtualQueueFrontendApp')
  .controller('LoginCtrl', ['$scope', '$localStorage', 'authFactory', function ($scope, $localStorage, authFactory) {
    $scope.loginData = {username: 'Kiki'};
    //$scope.loginData = $localStorage.getObject('userinfo', {username:'Kiki'});
    
    $scope.doLogin = function() {
      if($scope.rememberMe){
        $localStorage.storeObject('userinfo', $scope.loginData);
      }
      authFactory.login($scope.loginData);
    };
  }]);
