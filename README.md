lazyYT.js
======

## Description

This is a jQuery plugin to lazy load Youtube videos. On the initial load, the `div` will be replaced by a preview `img` of the video. On hover, the preview `img` will be replaced by the `iframe` Youtube video.

## Blog Post

To read more information on the plugin and access a demo, view the intro post on [newmediacampaigns.com](http://www.newmediacampaigns.com/blog/lazyytjs-a-jquery-plugin-to-lazy-load-youtube-videos).

## Setup

```html
<div class="lazyYT" data-youtube-id="laknj093n" data-width="300" data-height="200">loading...</div>
```

1. Add a `div` where you want the video to be located. Add the id of the Youtube video to the data attribute `youtube-id`.
2. Add the width the video should be to `data-width`. A percentage is fine for fluid videos.
3. Add the height the video should be to `data-height`.
4. Get it started with `$('.lazyYT').lazyYT();`


## License

MIT
