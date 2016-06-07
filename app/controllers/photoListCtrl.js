'use strict';

flickrApp.controller('PhotoListCtrl', ['$scope', '$http', 'DataService', '$rootScope', function($scope, $http, DataService, $rootScope) {

  $scope.getPhotoList = function() {
    $http.get('https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?format=json').success(function(data) {
      DataService.jsonParse(data);
    });
  }

  $scope.searchTags = function(field) {
    $http.get('https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?tags=' + field + '&format=json&page=2').success(function(data) {
      DataService.jsonParse(data);
    });
  }
}]);
