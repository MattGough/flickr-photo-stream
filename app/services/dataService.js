flickrApp.service('DataService', ['$rootScope', function($rootScope) {

 this.jsonParse = function(data) {

   if (typeof data === "string" ) {
     data = data.replace('jsonFlickrFeed(', '').replace('})', '}')
     data = data.replace(/\\'/g, "'");
     data = JSON.parse(data);
   }
   for (var i = 0; i < data.items.length; i++ ) {
     var string = data.items[i].author
     data.items[i].author_name = string.replace('nobody@flickr.com (', '').slice(0,-1);
   }
   $rootScope.photos = data.items;
 }
}]);
