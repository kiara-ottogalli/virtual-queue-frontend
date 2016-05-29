'use strict';

/**
 * @ngdoc overview
 * @name virtualQueueFrontendApp
 * @description
 * # virtualQueueFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('virtualQueueFrontendApp', [
    'ngResource',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('app', {
		url: '/',
		views: {
			'header': { templateUrl: 'views/header.html' },
			'content': { templateUrl: 'views/main.html', controller: 'MainCtrl' },
			'footer': { templateUrl: 'views/footer.html' }
		}
      })
	  .state('app.about', {
		url: 'about',
		views: {
			'header': { templateUrl: 'views/header.html' },
			'content@': { templateUrl: 'views/about.html', controller: 'AboutCtrl' },
			'footer': { templateUrl: 'views/footer.html' }
		}
      });
	  $urlRouterProvider.otherwise('/');
  });
