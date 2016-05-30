'use strict';

/**
 * @ngdoc function
 * @name virtualQueueFrontendApp.controller:DoctorCtrl
 * @description
 * # DoctorCtrl
 * Controller of one doctor.
 */
angular
	.module('virtualQueueFrontendApp')
	.controller('DoctorCtrl', ['$scope', 'userFactory', '$stateParams', function($scope, userFactory, $stateParams) {
		$scope.showDoctor = false;
		$scope.existPatients = false;
		
		userFactory.get(
			{id: $stateParams.id},
			function(response) {
				$scope.doctor = response;
				if($scope.doctor.type === 'doctor') {
					$scope.showDoctor = true;
					if($scope.doctor.patients.length > 0) {
						$scope.existPatients = true;
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
	}]);