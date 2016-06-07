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
      element(by.className('image')).click();
      element(by.className('title')).click();
      expect(browser.driver.getCurrentUrl()).toMatch('https://www.flickr.com');
    });

    it ('should display the author for each post as a link', function() {
      browser.get('/');
      browser.sleep(5000);
      element(by.className('image')).click();
      browser.sleep(5000);
      element(by.className('author')).click();
      browser.sleep(5000);
      expect(browser.driver.getCurrentUrl()).toMatch('https://www.flickr.com');
    });
  });

  describe ('Search tags', function() {
    it ('should search flickr for a given tag', function() {
      browser.get('/');
      element(by.id('search')).sendKeys('cat');
      var enter = browser.actions().sendKeys(protractor.Key.ENTER);
      enter.perform();
      browser.sleep(5000);
      element(by.className('image')).click();

      element.all(by.repeater('photo in photos')).then(function(photos) {
        var photoTag = photos[0].element(by.className('tags'));
        expect(photoTag.getText()).toContain('cat');
      });
    });
  });
});
