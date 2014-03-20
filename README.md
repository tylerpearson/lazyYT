# lazyYT.js

## Description

This is a jQuery plugin to lazy load Youtube videos. On the initial load, the `div` will be replaced by a preview `img` of the video. On click of the image, the preview `img` will be replaced by the autoplaying `iframe` Youtube video.

## Intro

To read more information on the plugin and access a demo, view the intro post on [newmediacampaigns.com](http://www.newmediacampaigns.com/blog/lazyytjs-a-jquery-plugin-to-lazy-load-youtube-videos).

## Demo

[View the demo.](http://tylerp.me/lazyYT)

## Setup

```html
<div class="lazyYT" data-youtube-id="_oEA18Y8gM0" data-width="300" data-height="200">loading...</div>
```

1. Include the lazyYT JS and CSS files.
2. Add a `div` where you want the video to be located. Add the id of the Youtube video to the data attribute `youtube-id`.
3. Add the video width to `data-width`. A percentage is fine for fluid videos.
4. Add the video height to `data-height`.
5. Any [optional parameters you wanted passed to the iframe url](https://developers.google.com/youtube/player_parameters) should be added to `data-parameters`.
6. Get it started with `$('.lazyYT').lazyYT();`


## License

MIT
