/*! LazyYT (lazy load Youtube videos plugin) - v0.1.5 - 2013-01-13
* Usage: <div class="lazyYT" data-youtube-id="laknj093n" data-width="300" data-height="200">loading...</div>
* Copyright (c) 2014 Tyler Pearson; Licensed MIT */

;(function ($) {
    'use strict';

    var titleStyle = [
            'z-index:100!important',
            'color:#fff!important',
            'font-family:sans-serif!important',
            'font-size:12px!important',
            'top:10px!important',
            'left:12px!important',
            'position:absolute!important',
            'margin:0!important',
            'padding:0!important',
            'line-height:1!important',
            'font-style:normal!important',
            'font-weight:normal!important'
        ].join(';'),
        buttonStyle = [
            'position:absolute!important',
            'margin-left:-30px!important',
            'margin-top:-20px!important',
            'z-index:100!important',
            'left:50%!important',
            'top:50%!important'
        ].join(';'),
        buttonImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAApCAYAAABp50paAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABV9JREFUeNrcWk1IK1cUvrmZGBOjJvr6xKe+Slvroi6kK6GrUkSxO12IC6GgUFBcuOlC8GdRulERV3VRQV0IKhRU0NJupK3tpi1dCRaxffWHGjWZPJNnNJlMz9FzX+ZNkzylcxP1wMdMZiYz97vnu+ee+2Njmc0GyANwgANQDCgAuABOwGOAG6AAiuh+MV3Lo+fc9KyN3qGYvnEBSAA0QBTwAnBp+P0ccAxQ6bkw/T4HRABn9B+8F6f/ZiRktjJANaCSUE0kkVApoBDgAeQTIeM7dAKjAuiG6+b7wniKstgMv+2m5xMGslgZIUAAEAOcAv4GHAL+BDwDBNMRxvOPAZ8C3iUPOVNUiGaCfgOV3MZe9z5OlSDAUzxzQZXyC+BLwM+pCtMJGCTvCTJxOlpBxGpLVzF2ajqiMvyAzwDfGuXyPuALkmyY5KGZ5GVGri1duXRyVIyOPsA7gO9R/iIYtQLKiSy7Q6T+b2UkSN7vAT4U7QGDz9Mbtp/7SPySjh9gj8EpApeyh2/YoyicuhlvhuBkVU3n2jA/cBkJxyUVjBuipz2HEf0qYcKs5w1ify6DbFVVVbSrq0s9ODhQlpaWClRVdUtWUyqLE0cPEn5CXkhI8HC8ubk5ODw8XJBIJOJNTU2H/f39j/f29jxZDJI2Iowq9nJiLk1KZWWYqcKHOC9pa2t7c21tLdTR0XHgdDo1kng22rdGQaucU2YlraY1TRPJACrIXldXVzU/P+8YHR09rqysVIkwz1JWxjmNZqQRBimbBxdIvLyvr8+7uroabGxs9NP1bAS0fOmE09Q2SsxdX19fsbCw4BgcHNzzeDxhGrDItCJO2s52hiVIO3w+X+nIyEgxRPCjmpqaE8lp7VU/nCeTMASrTO++GrTDM8UQzStB4uHOzs5niqIkJLRrLIeTG2QkpVZtthu9Fgk6amtrn8zMzLgmJyePvV7vmcVl0kUuncfuhumkiIqenh7f4uJiAJKWMwuDmS4krdyxURKOYz0Qvd0NDQ1Ri9+tKIbh050Zx+q6fjg1NaWtr6/7SO5WvTuq0ABZuNyWY7L6ycnJ0dDQ0OXc3FxFJBKxW0w4opCEcmnYrDh4Vd3c3FS7u7t929vbj6ipWT3IuOREOFeeRQ/GQqGQf2xsLNDS0vIIyBbRdU2Cgl5K2pYD+SKpF1tbW0cDAwOu5eXlKkleNdqVpMMyk3eQaioJ6zCo8M/OzsZh6Fi0v79fYsi+ZNpzJByU6WHD4AEJ4QxpfHd392hiYuJyenq64vz8XGGvrlJIHSbix46lavc60xISVjc2NsK9vb0ukHKZYeIhG00I7WpeOirxQ3xnZwc99w90MaHx8fFAa2trMZAtYcl542wYOhbXoU7xox8BvmLJFTxLCRcWFkbb29tVv9+vrKyseOnj2SL6MqUEHAA+QcJ1gDl2PTcdldCexeKXCEq5GIrizOzvgC5OUTrI/rtua1ncYsl1nlzm7CjpCKcTld3vtaQbZVlY+SJoBR4wUeHIPUyykDBOwP8mZgTYw1pQQy755N2fsGlxurgO+JUmAxyGh/V7VgHmMjspNn0D+IEZZhOwDf/FrheOn7Lkdgexkm43vfB18rF8JuQGvYCD4DSUH69/B/gccJSqgG+z630euJb6Fv3JaSCfjpBm6McTFqWKNvbqPg6eIefXSbYXVAbc8PIH4EfA1+x620NGj2Cf7KMOG7cm4fi0hK5XUw0KiG1MeHQTHBZGVrFjJ0znuEXpjIItdnX7FHRPCeLeITPt4LmtBEWNiz1XYj7MxZJbmPIJpSy5pUlUXDrPxAzKiBBJN53vk9fE/q0okY4ZVBS7jaL+FWAA/y++OTUmOgsAAAAASUVORK5CYII=';

    function setUp(el) {
        var $el = el,
            width = $el.data('width'),
            height = $el.data('height'),
            id = $el.data('youtube-id'),
            youtubeParameters = $el.data('parameters') || '';

        if (typeof width === 'undefined' || typeof height === 'undefined' || typeof id === 'undefined') {
            throw new Error('lazyYT is missing a required data attribute.');
        }

        $el.css({
            'position': 'relative',
            'height': height,
            'width': width,
            'background': 'url(http://img.youtube.com/vi/' + id + '/maxresdefault.jpg) center center no-repeat',
            'cursor': 'pointer',
            '-webkit-background-size': 'cover',
            '-moz-background-size': 'cover',
            '-o-background-size': 'cover',
            'background-size': 'cover'
        })
            .html('<p style="' + titleStyle + '" id="lazyYT-title-' + id + '" class="lazyYT-title"></p><img style="' + buttonStyle + '" src="' + buttonImage + '" />')
            .addClass('lazyYT-image-loaded');

        $.getJSON('https://gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json', function (data) {
            $('#lazyYT-title-' + id).text(data.entry.title.$t);
        });

        $el.on('click', function (e) {
            e.preventDefault();
            if (!$el.hasClass('lazyYT-video-loaded') && $el.hasClass('lazyYT-image-loaded')) {
                $el.html('<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' + id + '?autoplay=1&' + youtubeParameters + '" frameborder="0" allowfullscreen></iframe>')
                    .removeClass('lazyYT-image-loaded')
                    .addClass('lazyYT-video-loaded');
            }
        });

    }

    $.fn.lazyYT = function () {
        return this.each(function () {
            var $el = $(this).css('cursor', 'pointer');
            setUp($el);
        });
    };

}(jQuery));
