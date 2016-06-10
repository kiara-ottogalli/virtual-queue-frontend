'use strict';

/**
 * @ngdoc function
 * @name virtualQueueFrontendApp.controller:NumberCtrl
 * @description
 * # NumberCtrl
 * Controller of the virtualQueueFrontendApp
 */
angular.module('virtualQueueFrontendApp')
  .controller('NumberCtrl', ['$scope', 'userFactory', function ($scope, userFactory) {
      
    $scope.doctor = {};
    $scope.line = [];
    $scope.waiting = [];
    
    userFactory.getUsers().get({
        id: $scope.ngDialogData.doctorId
    },
    function(response){
        $scope.doctor = response;
    },
    function(response){
        $scope.message = {
            code: response.status,
			text: response.statusText
        };
    });
      
    userFactory.getPatientLine().query({
        id: $scope.ngDialogData.doctorId
    },
    function(response){
        $scope.line = response;
        var i;
        for(i = 0; i < $scope.line.length; i++) {
            console.log($scope.line[i]);
            if($scope.line[i].status === 'in line') {
                $scope.waiting.push($scope.line[i]);
            }
        }
    },
    function(response){
        $scope.message2 = {
            code: response.status,
			text: response.statusText
        };
    });
    
  }]);
