'use strict';

describe('PhotoListCtrl', function() {
  var scope, ctrl, $httpBackend, response;

  beforeEach(module('flickrApp'));
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    var response = { items: [{title: "2016-06-05_06-20-20"}]}
    $httpBackend.expectGET('http://localhost:1337/api.flickr.com/services/feeds/photos_public.gne?format=json').respond(response);

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
