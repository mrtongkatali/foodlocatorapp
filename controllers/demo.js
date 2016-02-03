var appControllers = angular.module('appControllers', ['ui.bootstrap','uiGmapgoogle-maps',]);


appControllers.config(['uiGmapGoogleMapApiProvider',
    function(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyA6Sv1tA7RxdhTVjw0UisBmBTwTR1B',
            v: '3.20',
            libraries: "weather,places,geometry,visualization",
            sensor: false,
        });

    }
]);

appControllers.controller('demoCtrl', ['$scope','$timeout','$routeParams','uiGmapGoogleMapApi',
  function($scope, $timeout, $routeParams,uiGmapGoogleMapApi) {
    uiGmapGoogleMapApi.then(function(maps) {
      alert("maps ready");
    });
}]);
