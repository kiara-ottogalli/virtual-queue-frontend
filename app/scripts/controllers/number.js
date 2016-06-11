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
    $scope.lastNumber = 0;
    $scope.currentNumber = 0;
    $scope.alreadyInLine = false;
    $scope.lineNumber = 0;
    
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
            if($scope.line[i].status === 'in line') {
                if($scope.line[i].patient.id === $scope.ngDialogData.patientId) {
                    $scope.alreadyInLine = true;
                    $scope.lineNumber = i+1;
                }
                $scope.waiting.push($scope.line[i]);
            }
            if($scope.line[i].status === 'currently attending') {
                $scope.currentNumber = i+1;
            }
        }
        $scope.lastNumber = $scope.waiting.length;
    },
    function(response){
        $scope.message2 = {
            code: response.status,
			text: response.statusText
        };
    });
    
  }]);
