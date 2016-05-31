'use strict';

/**
 * @ngdoc function
 * @name virtualQueueFrontendApp.controller:DoctorCtrl
 * @description
 * # DoctorCtrl
 * Controller of doctors view.
 */
angular
	.module('virtualQueueFrontendApp')
	.controller('DoctorCtrl', ['$scope', 'specialtyFactory', '$stateParams', function($scope, specialtyFactory, $stateParams) {
		$scope.specialty = {};
		$scope.showSpecialty = false;
		$scope.existDoctors = false;
        
		specialtyFactory.getSpecialties().get(
			{id: $stateParams.id},
			function(response) {
				$scope.specialty = response;
				$scope.showSpecialty = true;
				if($scope.specialty.doctors.length > 0) {
					$scope.existDoctors = true;
				}
			},
			function(response) {
				$scope.message = {
					code: response.status,
					text: response.statusText
				};
			});
	}]);