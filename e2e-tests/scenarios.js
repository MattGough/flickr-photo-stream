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

    it ('should display the title for each post as a link', function() {
      element(by.className('title')).click();
      expect(browser.driver.getCurrentUrl()).toMatch('https://www.flickr.com');
    });

    it ('should display the author for each post as a link', function() {
      browser.get('/');
      element(by.className('author')).click();
      expect(browser.driver.getCurrentUrl()).toMatch('https://www.flickr.com');
    });
  });
});
