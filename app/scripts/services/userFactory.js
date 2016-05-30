'use strict';

angular
	.module('virtualQueueFrontendApp')
	.factory('userFactory', ['$resource', 'baseURL', function($resource, baseURL) {
		return $resource(baseURL + 'users/:id', null, {'update': {method:'PUT'}});
	}]);