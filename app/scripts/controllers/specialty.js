'use strict';

/**
 * @ngdoc function
 * @name virtualQueueFrontendApp.controller:SpecialtyCtrl
 * @description
 * # SpecialtyCtrl
 * Controller of one specialty.
 */
angular
	.module('virtualQueueFrontendApp')
	.controller('SpecialtyCtrl', ['$scope', 'specialtyFactory', '$stateParams', function($scope, specialtyFactory, $stateParams) {
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