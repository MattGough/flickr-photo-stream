## Flickr Photo Stream

This is a web app built for this [Flickr Challenge](https://github.com/holidayextras/culture/blob/master/recruitment/developer-flickr-task.md). The main task is to display a photo stream with relevant photo info from the Flickr Api.

This app is built using [AngularJS](https://angularjs.org/), with [Protractor](http://www.protractortest.org/#/) for feature testing and [Karma](https://karma-runner.github.io/0.13/index.html) for unit testing.

### Pre-build Issues

Before building the Angular Web App, I tested the Flickr API, using previous Angular projects to make the API call and process the response. I found there to be two main issues with using the Flickr API:

1. Making cross origin requests from client side javascript was not allowed by the browser resulting in this error message: “No 'Access-Control-Allow-Origin' header is present on the requested resource”.
2. The response returned from the API request was wrapped in a function and as such was not immediately workable.

To solve the first issue I ran a CORS Proxy using the node package [corsproxy](https://www.npmjs.com/package/corsproxy) which allowed the request to be made by prefixing the http request with the proxy. i.e.
```
http://localhost:1337/api.flickr.com/services/feeds/photos_public.gne?format=json
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
