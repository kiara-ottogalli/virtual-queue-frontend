'use strict';

angular
	.module('virtualQueueFrontendApp')
	.factory('userFactory', ['$resource', 'baseURL', function($resource, baseURL) {
		var userFact = {};
		
		userFact.getUsers = function() {
			return $resource(baseURL + 'AppUsers/:id', null, {'update': {method:'PUT'}});
		};
        
        userFact.getPatientLine = function() {
			return $resource(baseURL + 'AppUsers/:id/patientNumbers?filter[include]=patient', null, {'update': {method:'PUT'}});
		};
        
		return userFact;
	}]);