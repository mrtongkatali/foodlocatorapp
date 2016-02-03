var appServices = angular.module('appServices',[]);

appServices.factory('GMapsGeoQuery', ['$resource', '$rootScope',
	function($resource, $rootScope){
		return $resource('http://maps.googleapis.com/maps/api/geocode/json', {}, {
  			get: {method: 'GET', params:{name : "roti+mediterranean+grill", radius: '500', types: 'food', address: '@address', sensor: false,}, isArray: false},
    	});
}]);

/*

appServices.factory('MapsGeoQuery', ['$resource', '$rootScope',
  function($resource, $rootScope){
    return $resource($rootScope.CONFIG.apiUrl+'/account-devices/:id/', { id: '@id'}, {
        get: {method: 'GET', params:{id: '@id'}, isArray: false},
        query: {method:'GET', params:{page: 1, limit: 100,}, isArray: false},
        submit: {method:'POST', params:{},},
      });
}]);

*/

//http://maps.googleapis.com/maps/api/geocode/json?name=roti+mediterranean+grill&address=60523&radius=500&types=food&sensor=false
// http://maps.googleapis.com/maps/api/geocode/json?address=roti+mediterranean+grill+60062&sensor=false
