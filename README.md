# lazyYT.js

## Description

This is a jQuery plugin to lazy load Youtube videos. On the initial load, the `div` will be appended by a preview `img` of the video. On click of the image, the preview `img` will be replaced by the autoplaying `iframe` Youtube video.

## Intro

To read more information on the plugin and access a demo, view the intro post on [newmediacampaigns.com](http://www.newmediacampaigns.com/blog/lazyytjs-a-jquery-plugin-to-lazy-load-youtube-videos).

## Demo

1. [Demo of v1.0.2](http://works.daugilas.com/lazyYT/demo/index.html)
2. [View the demo.](http://tylerp.me/lazyYT) (older version)

## Setup

```html
<div class="lazyYT" data-youtube-id="_oEA18Y8gM0" data-ratio="16:9" data-display-duration="true">loading...</div>
```

1. Include the lazyYT JS and CSS files.
2. Add a `div` where you want the video to be located. Add the id of the Youtube video to the data attribute `youtube-id`.
3. Either add the video width and height to `data-width` and `data-height`, or add an ascpent ratio like `16:9` to `data-ratio`, none are required.
4. Any [optional parameters you wanted passed to the iframe url](https://developers.google.com/youtube/player_parameters) should be added to `data-parameters`.
5. Get it started with `$('.lazyYT').lazyYT();`

### Parameters / Settings

Default parameters:

```javascript
$('.js-lazyYT').lazyYT({
  loading_text: 'Loading...', // displayed instead of video title while its loading
  default_ratio: '16:9',
  display_duration: false, // display video duration in bottom right
  
  // Advanced settings
  container_class: 'lazyYT-container' // default CSS depends on this class
});
```

## License

(CC) [Creative Commons](http://creativecommons.org/licenses/by-sa/4.0/)
