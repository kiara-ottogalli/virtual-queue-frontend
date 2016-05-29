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
		
		specialtyFactory.getSpecialties().query(
			function(response) {
				$scope.specialties = response;
				$scope.showSpecialties = true;
			},
			function(response) {
				$scope.message = 'Error: ' + response.status + ' ' + response.statusText;
			});
	}]);
