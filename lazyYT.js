/*!
* lazyYT (lazy load YouTube videos)
* v1.2.1 - 2015-09-04
* (CC) This work is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.
* http://creativecommons.org/licenses/by-sa/4.0/
* Contributors: https://github.com/tylerpearson/lazyYT/graphs/contributors || https://github.com/daugilas/lazyYT/graphs/contributors
* 
* Usage: <div class="lazyYT" data-youtube-id="laknj093n" data-parameters="rel=0">loading...</div>
*/

;(function ($) {
    'use strict';

    function setUp($el, settings) {
        var width = $el.data('width'),
            height = $el.data('height'),
            title = $el.attr('title') || $el.data('title'),
            display_title = $el.data('display-title'),
            ratio = ($el.data('ratio')) ? $el.data('ratio') : settings.default_ratio,
            display_duration = $el.data('display-duration'),
            id = $el.data('youtube-id'),
            padding_bottom,
            innerHtml = [],
            $thumb,
            thumb_img,
            loading_text = $el.text() ? $el.text() : settings.loading_text,
            youtube_parameters = $el.data('parameters') || '';
        
        ratio = ratio.split(":");
        
        youtube_parameters += '&' + settings.youtube_parameters;
        
        if (typeof display_title != "boolean") {
            display_title = settings.display_title;
        }
        
        if (typeof display_duration != "boolean") {
            display_duration = settings.display_duration;
        }
        
        // width and height might override default_ratio value
        if (typeof width === 'number' && typeof height === 'number') {
            $el.width(width);
            padding_bottom = height + 'px';
        } else if (typeof width === 'number') {
            $el.width(width);
            padding_bottom = (width * ratio[1] / ratio[0]) + 'px';
        } else {
            width = $el.width();
		        
            // no width means that container is fluid and will be the size of its parent
            if (width == 0) {
                width = $el.parent().width();
            }
		        
            padding_bottom = (ratio[1] / ratio[0] * 100) + '%';
        }
        
        //
        // This HTML will be placed inside 'lazyYT' container
        
        innerHtml.push('<div class="ytp-thumbnail">');
        
          // Play button from YouTube (exactly as it is in YouTube)
          innerHtml.push('<button class="ytp-large-play-button ytp-button" tabindex="23" aria-live="assertive"');
          if (width <= 320) {
            innerHtml.push(' style="transform: scale(0.61);"');
          } else if (width <= 640) {
            innerHtml.push(' style="transform: scale(0.85);"');
          }
          if (display_title && title) innerHtml.push(' aria-label="', title, '"');
          innerHtml.push('>');
          innerHtml.push('<svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">');
            innerHtml.push('<path class="ytp-large-play-button-bg" d="m .66,37.62 c 0,0 .66,4.70 2.70,6.77 2.58,2.71 5.98,2.63 7.49,2.91 5.43,.52 23.10,.68 23.12,.68 .00,-1.3e-5 14.29,-0.02 23.81,-0.71 1.32,-0.15 4.22,-0.17 6.81,-2.89 2.03,-2.07 2.70,-6.77 2.70,-6.77 0,0 .67,-5.52 .67,-11.04 l 0,-5.17 c 0,-5.52 -0.67,-11.04 -0.67,-11.04 0,0 -0.66,-4.70 -2.70,-6.77 C 62.03,.86 59.13,.84 57.80,.69 48.28,0 34.00,0 34.00,0 33.97,0 19.69,0 10.18,.69 8.85,.84 5.95,.86 3.36,3.58 1.32,5.65 .66,10.35 .66,10.35 c 0,0 -0.55,4.50 -0.66,9.45 l 0,8.36 c .10,4.94 .66,9.45 .66,9.45 z" fill="#1f1f1e" fill-opacity="0.9"></path>');
            innerHtml.push('<path d="m 26.96,13.67 18.37,9.62 -18.37,9.55 -0.00,-19.17 z" fill="#fff"></path>');
            innerHtml.push('<path d="M 45.02,23.46 45.32,23.28 26.96,13.67 43.32,24.34 45.02,23.46 z" fill="#ccc"></path>');
          innerHtml.push('</svg>');
          innerHtml.push('</button>'); // end of .ytp-large-play-button
        
          // video time from YouTube (exactly as it is in YouTube)
          if (display_duration) {
            innerHtml.push('<span class="video-time" style="display:none;"></span>');
          }
        innerHtml.push('</div>'); // end of .ytp-thumbnail
        
        // Video title (info bar)
        if (display_title) {
            innerHtml.push('<div class="ytp-gradient-top"></div>');
            innerHtml.push('<div class="ytp-chrome-top">');
            innerHtml.push('<div class="ytp-title">');
            innerHtml.push('<div class="ytp-title-text">');
            innerHtml.push('<a id="lazyYT-title-', id, '" class="ytp-title-link" tabindex="13" target="_blank" data-sessionlink="feature=player-title" href="https://www.youtube.com/watch?v=', id, '">');
            innerHtml.push((title) ? title : loading_text);
            innerHtml.push('</a>');
            innerHtml.push('</div>'); // /.ytp-title-text
            innerHtml.push('</div>'); // /.ytp-title
            innerHtml.push('</div>'); // /.ytp-chrome-top
        }

        $el.css({
            'padding-bottom': padding_bottom
        })
          .html(innerHtml.join(''));
        
        if (width > 640) {
            thumb_img = 'maxresdefault.jpg';
        } else if (width > 480) {
            thumb_img = 'sddefault.jpg';
        } else if (width > 320) {
            thumb_img = 'hqdefault.jpg';
        } else if (width > 120) {
            thumb_img = 'mqdefault.jpg';
        } else if (width == 0) { // sometimes it fails on fluid layout
            thumb_img = 'hqdefault.jpg';
        } else {
            thumb_img = 'default.jpg';
        }
        
        $thumb = $el.find('.ytp-thumbnail').css({
            'background-image': ['url(http://img.youtube.com/vi/', id, '/', thumb_img, ')'].join('')
        })
            .addClass('lazyYT-image-loaded')
            .on('click', function (e) {
                e.preventDefault();
                if (!$el.hasClass('lazyYT-video-loaded') && $thumb.hasClass('lazyYT-image-loaded')) {
                    $el.html('<iframe src="//www.youtube.com/embed/' + id + '?' + youtube_parameters + '&autoplay=1" frameborder="0" allowfullscreen></iframe>')
                        .addClass(settings.video_loaded_class);

                    // execute callback
                    if (typeof settings.callback == 'function') { // make sure the callback is a function
                        settings.callback.call($el); // brings the scope to the callback
                    }
                }
            });

        if ((!title && display_title) || display_duration) {
            var youtube_data_url = ['https://www.googleapis.com/youtube/v3/videos?id=', id, '&key=', settings.yt_api_key, '&part=snippet'];
            if (display_duration) youtube_data_url.push(',contentDetails'); // this extra info now costs some quota points, so we retrieve it only when necessary. More on quota: https://developers.google.com/youtube/v3/getting-started#quota
            
            $.getJSON(youtube_data_url.join(''), function (data) {
                var item = data.items[0];
                // console.log(item.snippet.title);
                
                $el.find('#lazyYT-title-' + id).text(item.snippet.title);
                
                if (display_duration) {
                    $el.find('.video-time')
                        .text(parseDuration(item.contentDetails.duration, settings))
                        .show();
                }
                
            });
        }

    };
    
    function parseDuration(PT, settings) {
        var output = [];
        var durationInSec = 0;
        var matches = PT.match(/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)W)?(?:(\d*)D)?T(?:(\d*)H)?(?:(\d*)M)?(?:(\d*)S)?/i);
        var parts = [
            { // years
                pos: 1,
                multiplier: 86400 * 365
            },
            { // months
                pos: 2,
                multiplier: 86400 * 30
            },
            { // weeks
                pos: 3,
                multiplier: 604800
            },
            { // days
                pos: 4,
                multiplier: 86400
            },
            { // hours
                pos: 5,
                multiplier: 3600
            },
            { // minutes
                pos: 6,
                multiplier: 60
            },
            { // seconds
                pos: 7,
                multiplier: 1
            }
        ];
        
        for (var i = 0; i < parts.length; i++) {
            if (typeof matches[parts[i].pos] != 'undefined') {
                durationInSec += parseInt(matches[parts[i].pos]) * parts[i].multiplier;
            }
        }
        
        // Hours extraction
        if (durationInSec > 3599) {
            output.push(parseInt(durationInSec / 3600));
            durationInSec %= 3600;
        }
        // Minutes extraction with leading zero
        output.push(('0' + parseInt(durationInSec / 60)).slice(-2));
        // Seconds extraction with leading zero
        output.push(('0' + durationInSec % 60).slice(-2));
        
        return output.join(':');
    };

    $.fn.lazyYT = function (yt_api_key, newSettings) {
        var defaultSettings = {
            yt_api_key: yt_api_key,
            
            youtube_parameters: 'rel=0',
            loading_text: 'Loading...',
            display_title: true,
            default_ratio: '16:9',
            display_duration: false,
            callback: null,
            
            // Advanced settings
            video_loaded_class: 'lazyYT-video-loaded',
            container_class: 'lazyYT-container'
        };
        var settings = $.extend(defaultSettings, newSettings);
        
        return this.each(function () {
            var $el = $(this).addClass(settings.container_class);
            setUp($el, settings);
        });
    };

}(jQuery));
