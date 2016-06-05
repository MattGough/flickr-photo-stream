'use strict';

flickrApp.controller('PhotoListCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.getPhotoList = function() {
    $http.get('http://localhost:1337/api.flickr.com/services/feeds/photos_public.gne?format=json').success(function(data) {

      if (typeof data === "string" ) {
        data = data.replace('jsonFlickrFeed(', '').replace('})', '}')
        data = data.replace(/\\'/g, "'");
        data = JSON.parse(data);
      }
      $scope.photos = data.items;
    });
  }
}]);
