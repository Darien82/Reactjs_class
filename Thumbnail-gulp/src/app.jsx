var React = require('react');
var ThumbnailList = require('./thumbnail-list');


var options = {
    thumbnailData: [{
    title: 'Show Courses',
    number: 12,
    header: 'Learn React',
    description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/React.js_logo.svg/2000px-React.js_logo.svg.png'
    }, {
    title: 'Show Courses',
    number: 25,
    header: 'Learn Gulp',
    description: 'Gulp wll speed up your work development flow',
    imageUrl: 'https://avatars0.githubusercontent.com/u/6200624?v=3&s=400'
    }]
  };



  var element = React.createElement(ThumbnailList, options);
  React.render(element, document.querySelector('.container'));