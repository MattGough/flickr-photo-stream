'use strict';

describe('PhotoListCtrl', function() {
  var scope, ctrl, $httpBackend, response;

  beforeEach(module('flickrApp'));
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    var response = { items: [{title: "2016-06-05_06-20-20", author:"nobody@flickr.com (johnsmith)"
}]}
    $httpBackend.expectGET('https://cors-anywhere.herokuapp.com/https://api.flickr.com/services/feeds/photos_public.gne?format=json').respond(response);

    scope = $rootScope.$new();
    ctrl = $controller('PhotoListCtrl', {$scope: scope});
  }));

  it('should make an API request and access photo array', function() {
    expect(scope.photos).toBeUndefined();
    scope.getPhotoList();
    $httpBackend.flush();

    expect(scope.photos[0].title).toEqual("2016-06-05_06-20-20");
  });

  it('should parse the author property for each object', function()  {
    expect(scope.photos).toBeUndefined();
    scope.getPhotoList();
    $httpBackend.flush();

    expect(scope.photos[0].author_name).toEqual("johnsmith")
  });
});
