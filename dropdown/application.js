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

 

  var element = React.createElement(Thumbnaillist, options);
  React.render(element, document.querySelector('.container'));
  
  var Badge = React.createClass({displayName: "Badge",
    render: function() {
      return React.createElement("button", {className: "btn btn-primary", type: "button"}, 
        this.props.title, " ", React.createElement("span", {className: "badge"}, this.props.number)
      )
    }
  });

var Thumbnaillist = React.createClass({displayName: "Thumbnaillist",
    render: function() {
var list = this.props.thumbnailData.map(function(thumbnailProps){
        return React.createElement(Thumbnail, React.__spread({},  thumbnailProps))
       });
      return React.createElement("div", null, 
      list
      )
    }
  });
var Thumbnail = React.createClass({displayName: "Thumbnail",
    render: function() {
      return React.createElement("div", {className: "col-sm-6 col-md-4"}, 
        React.createElement("div", {className: "thumbnail"}, 
          React.createElement("img", {src: this.props.imageUrl, alt: "..."}), 
          React.createElement("div", {className: "caption"}, 
            React.createElement("h3", null, this.props.header), 
            React.createElement("p", null, this.props.description), 
            React.createElement("p", null, 
              React.createElement(Badge, {title: this.props.title, number: this.props.number})
            )
          )
        )
      )
    }
  });
