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
        $scope.doctors = [];
		$scope.showSpecialty = false;
		$scope.existDoctors = false;
        
		specialtyFactory.getSpecialtiesWithDoctors().get(
			{id: $stateParams.id},
			function(response) {
				$scope.specialty = response;
				$scope.showSpecialty = true;
                $scope.doctors = $scope.specialty.doctors;
                if($scope.doctors.length > 0){
                    $scope.existDoctors = true;
                }
			},
			function(response) {
				$scope.message = {
					code: response.status,
					text: response.statusText
				};
			});
        
        $scope.getNumber = function() {
            
        };
        
	}]);