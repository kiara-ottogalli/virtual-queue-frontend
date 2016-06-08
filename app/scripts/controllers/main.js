'use strict';

/**
 * @ngdoc function
 * @name virtualQueueFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the virtualQueueFrontendApp
 */
angular
	.module('virtualQueueFrontendApp')
	.controller('MainCtrl', ['$scope', 'specialtyFactory', function($scope, specialtyFactory) {
		$scope.specialties = [];
		$scope.showSpecialties = false;
		$scope.existSpecialties = false;
		
		specialtyFactory.getSpecialties().query(
			function(response) {
				$scope.specialties = response;
				$scope.showSpecialties = true;
				if($scope.specialties.length > 0) {
					$scope.existSpecialties = true;
				}
			},
			function(response) {
				$scope.message = {
					code: response.status,
					text: response.statusText
				};
			});
	}]);
