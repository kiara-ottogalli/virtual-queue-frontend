'use strict';

/**
 * @ngdoc service
 * @name virtualQueueFrontendApp.authFactory
 * @description
 * # authFactory
 * Factory in the virtualQueueFrontendApp.
 */
angular.module('virtualQueueFrontendApp')
  .factory('$localStorage', ['$window', function ($window) {
    return {
      store: function (key, value) {
        $window.localStorage[key] = value;
      },
      get: function (key, defaultValue) {
        return $window.localStorage[key] || defaultValue;
      },
      remove: function (key) {
        $window.localStorage.removeItem(key);
      },
      storeObject: function (key, value) {
        $window.localStorage[key] = JSON.stringify(value);
      },
      getObject: function (key, defaultValue) {
        return JSON.parse($window.localStorage[key] || defaultValue);
      }
    };
  }])
  .factory('authFactory', ['$http', '$localStorage', '$resource', 'baseURL', '$rootScope', function ($http, $localStorage, $resource, baseURL, $rootScope) {
    var authFac = {};
    var TOKEN_KEY = 'Token';
    var isAuthenticated = false;
    var username = '';
    var authToken;
    
    function useCredentials(credentials) {
      isAuthenticated = true;
      username = credentials.username;
      authToken = credentials.token;
      // Set the token as header for your requests!
      $http.defaults.headers.common['x-access-token'] = authToken;
    }
    
    function loadUserCredentials() {
      var credentials = $localStorage.getObject(TOKEN_KEY,'{}');
      if (credentials.username !== undefined) {
        useCredentials(credentials);
      }
    }
    
    function storeUserCredentials(credentials) {
      $localStorage.storeObject(TOKEN_KEY, credentials);
      useCredentials(credentials);
    }
    
    function destroyUserCredentials() {
      authToken = undefined;
      username = '';
      isAuthenticated = false;
      $http.defaults.headers.common['x-access-token'] = authToken;
      $localStorage.remove(TOKEN_KEY);
    }
     
    authFac.login = function(loginData) {
      $resource(baseURL + 'AppUsers/login').save(
        loginData,
        function(response) {
          storeUserCredentials({username:loginData.username, token: response.token});
          $rootScope.$broadcast('login:Successful');
        },
        function(response){
          isAuthenticated = false;
          console.log(response);
          //ngDialog.openConfirm({ template: 'loginUnsuccessful.html', controller: {name: response.data.err.name, message: response.data.err.message}});
        }
      );
    };
    
    authFac.logout = function() {
      $resource(baseURL + 'AppUsers/logout').get(function(){});
      destroyUserCredentials();
    };
    
    authFac.isAuthenticated = function() {
        return isAuthenticated;
    };
    
    authFac.getUsername = function() {
        return username;  
    };
    
    loadUserCredentials();
    
    return authFac;
  }]);
