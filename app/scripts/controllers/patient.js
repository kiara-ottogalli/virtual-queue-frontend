'use strict';

/**
 * @ngdoc function
 * @name virtualQueueFrontendApp.controller:PatientCtrl
 * @description
 * # PatientCtrl
 * Controller the patients view.
 */
angular
	.module('virtualQueueFrontendApp')
	.controller('PatientCtrl', ['$scope', 'userFactory', '$stateParams', function($scope, userFactory, $stateParams) {
		$scope.showDoctor = false;
		$scope.existPatients = false;
        $scope.doctor = {};
        $scope.current = null;
        $scope.line = [];
        $scope.attended = [];
        
        var separateByType = function(patients){
            patients.forEach(function(item) {
                switch(item.status){
                    case 'currently attending':
                        $scope.current = item;
                        break;
                    case 'in line':
                        $scope.line.push(item);
                        break;
                    case 'attended':
                    case 'did not arrive':
                        $scope.attended.push(item);
                        break;
                }
            });
        };
        
		userFactory.get(
			{id: $stateParams.id},
			function(response) {
				$scope.doctor = response;
				if($scope.doctor.type === 'doctor') {
					$scope.showDoctor = true;
					if($scope.doctor.patients.length > 0) {
						$scope.existPatients = true;
                        separateByType($scope.doctor.patients);
					}
				}
				else {
					$scope.message = {
						code: 404,
						text: 'The user is not a doctor.'
					};
				}
			},
			function(response) {
				$scope.message = {
					code: response.status,
					text: response.statusText
				};
			});
        
        $scope.callNext = function(){
            $scope.current = {patient:{name: 'Hola', lastname: 'Mundo', phone: 123, email: 'a@a.com'}, status:'currently attending'};
        };
        
	}]);