'use strict';

describe ('flickrApp', function() {

  describe ('Photo list', function() {

    it ('should display a list of 20 photos', function() {
      var photoList = element.all(by.repeater('photo in photos'));

      browser.get('/');
      expect(photoList.count()).toBe(20);
    });
  });
});
