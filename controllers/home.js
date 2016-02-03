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

appControllers.controller('homeCtrl', ['$scope','$timeout','$routeParams','uiGmapGoogleMapApi','uiGmapIsReady','GMapsGeoQuery',
  function($scope, $timeout, $routeParams,uiGmapGoogleMapApi,uiGmapIsReady,GMapsGeoQuery) {

    $scope.maps = {
      center: {latitude: 40.1451, longitude: -99.6680 },
      control   : {},
      zoom      : 11,
      dragging  : true,
      refresh   : false,
      options   : {},
      events    : {},
      bounds    : {},
      pan       : true,
      zip_query : '',
    };

    uiGmapGoogleMapApi.then(function(maps) {
      
    });

    uiGmapIsReady.promise(1).then(function(instances) {
        instances.forEach(function(inst) {
          //angular.element('.angular-google-map-container').attr("style", "height: " + (angular.element(window).height() - 50) + "px !important;");
          //google.maps.event.trigger(inst.map, 'resize');
        });
    });

    $scope.deviceMarkers = [];
    $scope.searchAllRotiRestaurant = function() {
      var a = "60523";

      GMapsGeoQuery.get({address : parseInt(a)},function(data) {
        var counter = 1;
        if(data.results) {
          angular.forEach(data.results, function(loc) {

              $scope.maps.center = {
                latitude : loc.geometry.location.lat,
                longitude : loc.geometry.location.lng,
              };

              //var point = {"type" : "Point", "coordinates" : [loc.geometry.location.lat, loc.geometry.location.lng] };
              var point = {latitude : loc.geometry.location.lat, longitude : loc.geometry.location.lng};
              $scope.deviceMarkers.push({
                id : counter,
                coords : point,
              });

              counter++;
              console.log(loc.geometry.location);
          });

          console.log("DM",$scope.deviceMarkers);
        }
      });
    };
}]);
