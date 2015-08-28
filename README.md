# lazyYT.js

## Description

This is a jQuery plugin to lazy load Youtube videos. On the initial load, the `div` will be appended by a preview `img` of the video. On click of the image, the preview `img` will be replaced by the autoplaying `iframe` Youtube video.

Since 2015-07-08 it uses [Youtube API v3](https://developers.google.com/youtube/v3/). 


## Demo

1. [Demo of v1.1.1](http://works.daugilas.com/lazyYT/demo/index.html)

## Setup

```html
<div class="lazyYT" data-youtube-id="_oEA18Y8gM0" data-ratio="16:9" data-display-duration="true">loading...</div>
```

1. Get Your [Youtube API_KEY](https://developers.google.com/youtube/v3/getting-started#before-you-start). It should look something like this: `AIzaSyCawA87g_pgTbSNPhiWAemy-mFKszJGl4M`.
2. Include the lazyYT JS and CSS files.
3. Add a `div` where you want the video to be located. Add the id of the Youtube video to the data attribute `youtube-id`.
4. Either add the video width and height to `data-width` and `data-height`, or add an ascpent ratio like `16:9` to `data-ratio`, none are required.
5. Any [optional parameters you wanted passed to the iframe url](https://developers.google.com/youtube/player_parameters) should be added to `data-parameters`.
6. Get it started with `$('.lazyYT').lazyYT(YOUR_YOUTUBE_API_KEY);`

Note: make sure to crate your own API_KEY, the one used in demo will not work for your domain for long.

### Parameters / Settings

Default parameters:

```javascript
$('.js-lazyYT').lazyYT({
  youtube_parameters: 'rel=0', // youtube URL parameters: https://developers.google.com/youtube/player_parameters#Parameters
  loading_text: 'Loading...', // displayed instead of video title while its loading
  display_title: true, // display title in video's info bar
  default_ratio: '16:9',
  display_duration: false, // display video duration in bottom right
  callback: function() {
    console.log(this);
  },
  
  // Advanced settings
  video_loaded_class: 'lazyYT-video-loaded', // adds this class after video loads into container
  container_class: 'lazyYT-container' // default CSS depends on this class
});
```

## License

(CC) [Creative Commons](http://creativecommons.org/licenses/by-sa/4.0/)
