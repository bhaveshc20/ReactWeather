var React = require('react');

// var About = React.createClass({
//   render: function () {
//     return (
//       <h3>About component</h3>
//     )
//   }
// });

var About = (props) => {
  return(
    <div>
        <h1 className="text-center">About component</h1>
        <p>A web app build on react. I have built this for the complete React web app developer course</p>
        <p>Here are some tools that I used:</p>
        <ul>
          <li>
            <a href="https://facebook.github.io/react">React</a> -This was the javascript framework used
          </li>
          <li>
            <a href="http://openweathermap.org">Open weather map</a>
          </li>
        </ul>
    </div>

  )
};
module.exports = About;
