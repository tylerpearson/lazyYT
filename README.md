# lazyYT.js

## Description

This is a jQuery plugin to lazy load Youtube videos. On the initial load, the `div` will be appended by a preview `img` of the video. On click of the image, the preview `img` will be replaced by the autoplaying `iframe` Youtube video.

## Intro

To read more information on the plugin and access a demo, view the intro post on [newmediacampaigns.com](http://www.newmediacampaigns.com/blog/lazyytjs-a-jquery-plugin-to-lazy-load-youtube-videos).

## Demo

1. [Demo of v1.0.1](http://works.daugilas.com/lazyYT/demo/index.html)
2. [View the demo.](http://tylerp.me/lazyYT) (older version)

## Setup

```html
<div class="lazyYT" data-youtube-id="_oEA18Y8gM0" data-ratio="16:9">loading...</div>
```

1. Include the lazyYT JS and CSS files.
2. Add a `div` where you want the video to be located. Add the id of the Youtube video to the data attribute `youtube-id`.
3. Either add the video width and height to `data-width` and `data-height`, or add an ascpent ratio like `16:9` to `data-ratio`, none are required.
5. Any [optional parameters you wanted passed to the iframe url](https://developers.google.com/youtube/player_parameters) should be added to `data-parameters`.
6. Get it started with `$('.lazyYT').lazyYT();`


## License

(CC) [Creative Commons](http://creativecommons.org/licenses/by-sa/4.0/)
