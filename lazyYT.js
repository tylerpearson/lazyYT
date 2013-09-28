(function(w, d){
  'use strict';
  w.lazyYT = function() {
    var divs = w.document.getElementsByTagName('div');

    for(var i = 0, dl = divs.length; i < dl; i++){
      if(divs[i].className.match(/(?:\s|^)(lazyYT)(?:\s|$)/)){
        var div = divs[i],
        width = div.getAttribute('data-width') || '480',
        height = div.getAttribute('data-height') || '360',
        id = div.getAttribute('data-youtube-id') || 'dQw4w9WgXcQ',
        oReq = new XMLHttpRequest(),
        titleP = d.createElement('p'),
        playButton = d.createElement('img'),
        videoEmbed = d.createElement('iframe'),

        handleYouTubeData = function(){
          var youTubeData = JSON.parse(this.responseText);
          titleP.innerHTML = youTubeData.entry.title.$t;
        };

        oReq.onload = handleYouTubeData;
        oReq.open('get', 'https://gdata.youtube.com/feeds/api/videos/' + id + '?v=2&alt=json', true);
        oReq.send();

        div.style['position'] = 'relative';
        div.style['width'] = width + 'px';
        div.style['height'] = height + 'px';
        div.style['background'] = 'url(http://img.youtube.com/vi/' + id + '/0.jpg) center center no-repeat';
        div.style['cursor'] = 'pointer';
        div.style['-webkit-background-size'] = 'cover';
        div.style['-moz-background-size'] = 'cover';
        div.style['-o-background-size'] = 'cover';
        div.style['background-size'] = 'cover';

        titleP.id = 'laztYT-title-' + id;
        titleP.className = 'lazyYT-title';
        titleP.style.setProperty('z-index', '100', 'important');
        titleP.style.setProperty('color', '#fff', 'important');
        titleP.style.setProperty('font-family', 'sans-serif', 'important');
        titleP.style.setProperty('font-size', '12px', 'important');
        titleP.style.setProperty('top', '10px', 'important');
        titleP.style.setProperty('left', '12px', 'important');
        titleP.style.setProperty('position', 'absolute', 'important');
        titleP.style.setProperty('margin', '0', 'important');
        titleP.style.setProperty('padding', '0', 'important');
        titleP.style.setProperty('line-height', '1', 'important');
        titleP.style.setProperty('font-style', 'normal', 'important');
        titleP.style.setProperty('font-weight', 'normal', 'important');

        playButton.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAApCAYAAABp50paAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABV9JREFUeNrcWk1IK1cUvrmZGBOjJvr6xKe+Slvroi6kK6GrUkSxO12IC6GgUFBcuOlC8GdRulERV3VRQV0IKhRU0NJupK3tpi1dCRaxffWHGjWZPJNnNJlMz9FzX+ZNkzylcxP1wMdMZiYz97vnu+ee+2Njmc0GyANwgANQDCgAuABOwGOAG6AAiuh+MV3Lo+fc9KyN3qGYvnEBSAA0QBTwAnBp+P0ccAxQ6bkw/T4HRABn9B+8F6f/ZiRktjJANaCSUE0kkVApoBDgAeQTIeM7dAKjAuiG6+b7wniKstgMv+2m5xMGslgZIUAAEAOcAv4GHAL+BDwDBNMRxvOPAZ8C3iUPOVNUiGaCfgOV3MZe9z5OlSDAUzxzQZXyC+BLwM+pCtMJGCTvCTJxOlpBxGpLVzF2ajqiMvyAzwDfGuXyPuALkmyY5KGZ5GVGri1duXRyVIyOPsA7gO9R/iIYtQLKiSy7Q6T+b2UkSN7vAT4U7QGDz9Mbtp/7SPySjh9gj8EpApeyh2/YoyicuhlvhuBkVU3n2jA/cBkJxyUVjBuipz2HEf0qYcKs5w1ify6DbFVVVbSrq0s9ODhQlpaWClRVdUtWUyqLE0cPEn5CXkhI8HC8ubk5ODw8XJBIJOJNTU2H/f39j/f29jxZDJI2Iowq9nJiLk1KZWWYqcKHOC9pa2t7c21tLdTR0XHgdDo1kng22rdGQaucU2YlraY1TRPJACrIXldXVzU/P+8YHR09rqysVIkwz1JWxjmNZqQRBimbBxdIvLyvr8+7uroabGxs9NP1bAS0fOmE09Q2SsxdX19fsbCw4BgcHNzzeDxhGrDItCJO2s52hiVIO3w+X+nIyEgxRPCjmpqaE8lp7VU/nCeTMASrTO++GrTDM8UQzStB4uHOzs5niqIkJLRrLIeTG2QkpVZtthu9Fgk6amtrn8zMzLgmJyePvV7vmcVl0kUuncfuhumkiIqenh7f4uJiAJKWMwuDmS4krdyxURKOYz0Qvd0NDQ1Ri9+tKIbh050Zx+q6fjg1NaWtr6/7SO5WvTuq0ABZuNyWY7L6ycnJ0dDQ0OXc3FxFJBKxW0w4opCEcmnYrDh4Vd3c3FS7u7t929vbj6ipWT3IuOREOFeeRQ/GQqGQf2xsLNDS0vIIyBbRdU2Cgl5K2pYD+SKpF1tbW0cDAwOu5eXlKkleNdqVpMMyk3eQaioJ6zCo8M/OzsZh6Fi0v79fYsi+ZNpzJByU6WHD4AEJ4QxpfHd392hiYuJyenq64vz8XGGvrlJIHSbix46lavc60xISVjc2NsK9vb0ukHKZYeIhG00I7WpeOirxQ3xnZwc99w90MaHx8fFAa2trMZAtYcl542wYOhbXoU7xox8BvmLJFTxLCRcWFkbb29tVv9+vrKyseOnj2SL6MqUEHAA+QcJ1gDl2PTcdldCexeKXCEq5GIrizOzvgC5OUTrI/rtua1ncYsl1nlzm7CjpCKcTld3vtaQbZVlY+SJoBR4wUeHIPUyykDBOwP8mZgTYw1pQQy755N2fsGlxurgO+JUmAxyGh/V7VgHmMjspNn0D+IEZZhOwDf/FrheOn7Lkdgexkm43vfB18rF8JuQGvYCD4DSUH69/B/gccJSqgG+z630euJb6Fv3JaSCfjpBm6McTFqWKNvbqPg6eIefXSbYXVAbc8PIH4EfA1+x620NGj2Cf7KMOG7cm4fi0hK5XUw0KiG1MeHQTHBZGVrFjJ0znuEXpjIItdnX7FHRPCeLeITPt4LmtBEWNiz1XYj7MxZJbmPIJpSy5pUlUXDrPxAzKiBBJN53vk9fE/q0okY4ZVBS7jaL+FWAA/y++OTUmOgsAAAAASUVORK5CYII=';
        playButton.style.setProperty('position', 'absolute', 'important');
        playButton.style.setProperty('margin-left', '-30px', 'important');
        playButton.style.setProperty('margin-top', '-20px', 'important');
        playButton.style.setProperty('z-index', '100', 'important');
        playButton.style.setProperty('left', '50%', 'important');
        playButton.style.setProperty('top', '50%', 'important');

        div.innerHTML = '';
        div.appendChild(titleP);
        div.appendChild(playButton);
        div.className += ' lazyYT-image-loaded';

        videoEmbed.width = width;
        videoEmbed.height = height;
        videoEmbed.src = '//www.youtube.com/embed/' + id + '?autoplay=1';
        videoEmbed.frameborder = 0;

        div.addEventListener('click', function(e){
          e.preventDefault();
          if(!div.className.match(/(?:\s|^)(lazyYT-video-loaded)(?:\s|$)/) && div.className.match(/(?:\s|^)(lazyYT-image-loaded)(?:\s|$)/)){
            div.innerHTML = '';
            div.appendChild(videoEmbed);
            div.className = div.className.replace(/(\s|^)(lazyYT-image-loaded)(\s|$)/, '');
            div.className += ' lazyYT-video-loaded';
          }
        }, false);
      }
    }
  };

  if(w.addEventListener){
    w.addEventListener('DOMContentLoaded', function(){
      w.lazyYT();
      w.removeEventListener('load', w.lazyYT, false);
    }, false);
    w.addEventListener('load', w.lazyYT, false);
  }
  else if(w.attachEvent){
    w.attachEvent('onload', w.lazyYT);
  }
}(this, document));
