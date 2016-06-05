'use strict';

describe('PhotoListCtrl', function() {
  var scope, ctrl, $httpBackend, response;

  beforeEach(module('flickrApp'));
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    response = jsonFlickrFeed({ "items": [
	   {
			"title": "2016-06-05_06-20-20",
			"link": "https://www.flickr.com/photos/egypt_01/26865337104/",
			"media": {"m":"https://farm8.staticflickr.com/7629/26865337104_b68ebea7ea_m.jpg"},
			"date_taken": "2016-06-06T00:02:27-08:00",
			"description": " <p><a href=\"https://www.flickr.com/people/egypt_01/\">Sy Tai<\/a> posted a photo:<\/p> <p><a href=\"https://www.flickr.com/photos/egypt_01/26865337104/\" title=\"2016-06-05_06-20-20\"><img src=\"https://farm8.staticflickr.com/7629/26865337104_b68ebea7ea_m.jpg\" width=\"240\" height=\"160\" alt=\"2016-06-05_06-20-20\" /><\/a><\/p> ",
			"published": "2016-06-05T11:20:22Z",
			"author": "nobody@flickr.com (Sy Tai)",
			"author_id": "26162828@N05",
			"tags": ""
    } ] })
    $httpBackend.expectGET('http://cors.io/?u=https://api.flickr.com/services/feeds/photos_public.gne?format=json').respond(response);

    scope = $rootScope.$new();
    ctrl = $controller('PhotoListCtrl', {$scope: scope});
  }));

  it('should make an API request and access photo array', function() {
    expect(scope.photos).toBeUndefined();
    scope.getPhotoList();
    $httpBackend.flush();

    expect(scope.photos[0].title).toEqual("2016-06-05_06-20-20");
  });
});
