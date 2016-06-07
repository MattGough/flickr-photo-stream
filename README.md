## Flickr Photo Stream

This is a web app built for this [Flickr Challenge](https://github.com/holidayextras/culture/blob/master/recruitment/developer-flickr-task.md). The main task is to display a photo stream with relevant photo info from the Flickr Api.

This app is built using [AngularJS](https://angularjs.org/) and [Express](http://expressjs.com/), with [Protractor](http://www.protractortest.org/#/) for feature testing and [Karma](https://karma-runner.github.io/0.13/index.html) for unit testing.

![Imgur](http://i.imgur.com/QYsnhPi.png)

Visit the page at https://flickr-photo-stream.herokuapp.com/.

Click on an image to see title, author and tags. Titles link to the image on Flickr and authors link to authors' Flickr page. You can also search image tags on Flickr.

![Imgur](http://i.imgur.com/q4tFLj6.png)

### Run locally

```
$ git clone https://github.com/MattGough/flickr-photo-stream.git
$ cd flickr-photo-stream
$ npm install         // install dependencies
$ node app.js         // run server on localhost:3000
$ npm run protractor  // run e2e tests (protractor)
$ npm test            // run unit tests (karma)
```
In case dependencies do not install correctly, they are listed below

  * [AngularJS](https://angularjs.org/), [Express](http://expressjs.com/), [Protractor](http://www.protractortest.org/#/), [Karma](https://karma-runner.github.io/0.13/index.html).

### Pre-build Issues

Before building the Angular Web App, I tested the Flickr API, using previous Angular projects to make the API call and process the response. I found there to be two main issues with using the Flickr API:

1. Making cross origin requests from client side javascript was not allowed by the browser resulting in this error message: “No 'Access-Control-Allow-Origin' header is present on the requested resource”.
2. The response returned from the API request was wrapped in a function and as such was not immediately workable.

To solve the first issue I ran a CORS Proxy using the node package [cors-anywhere](https://www.npmjs.com/package/cors-anywhere) which allowed the request to be made by prefixing the http request with the proxy. i.e.
```
https://cors-anywhere.herokuapp.com/api.flickr.com/services/feeds/photos_public.gne?format=json
```
 To solve the second issue I used the following steps to parse the response into workable JSON:

```javascript

if (typeof data === "string" ) {
  data = data.replace('jsonFlickrFeed(', '').replace('})', '}')
  data = data.replace(/\\'/g, "'");
  data = JSON.parse(data);
}
```

As the response data was recognised as a string, the wrapper function jsonFlickrFeed could be removed and `\'` replaced with `'` throughout. The data could then be parsed into JSON using the built in `JSON.parse(data)` function.
