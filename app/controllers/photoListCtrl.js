'use strict';

flickrApp.controller('PhotoListCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.getPhotoList = function() {
    $http.get('http://localhost:8080/https://api.flickr.com/services/feeds/photos_public.gne?format=json').success(function(data) {

      if (typeof data === "string" ) {
        data = data.replace('jsonFlickrFeed(', '').replace('})', '}')
        data = data.replace(/\\'/g, "'");
        data = JSON.parse(data);
      }

      for (var i = 0; i < data.items.length; i++ ) {
        var string = data.items[i].author
        data.items[i].author_name = string.replace('nobody@flickr.com (', '').slice(0,-1);
      }
      $scope.photos = data.items;
    });
  }
}]);
