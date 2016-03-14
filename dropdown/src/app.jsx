var React = require('react');
var Dropdown = require('./dropdown');


var options = {
    title: 'Favorite Sport',//what should show up on the button to open/close dropdown
    items: [ 
    'Football',
    'Basketball',
    'Soccer'
    
    ]
  };



  var element = React.createElement(Dropdown, options);
  React.render(element, document.querySelector('.container'));