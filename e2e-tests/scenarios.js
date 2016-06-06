'use strict';

describe ('flickrApp', function() {

  describe ('Photo list', function() {
    it ('should display a list of 20 posts', function() {
      var photoList = element.all(by.repeater('photo in photos'));

      browser.get('/');
      expect(photoList.count()).toBe(20);
    });

    it ('should display the image for each post', function() {
      expect(element(by.className('image')).isPresent()).toBe(true);
    });
  });
});
