var React = require('react');
var {Link} = require('react-router');
// var Examples = React.createClass({
//   render: function () {
//     return (
//       <h3>Examples component</h3>
//     )
//   }
// });
var Examples = (props) => {
  return (
    <div><h1 className="text-center page-title">Example</h1>
    <p>Here are a few example locations to try out:</p>
    <ol>
      <li>
        <Link to='/?location="San Francisco"'>San Francisco, CA</Link>
      </li>
      <li>
        <Link to='/?location="New Delhi"'>New Delhi, India</Link>
      </li>
    </ol>
    </div>

  )
};
module.exports = Examples;
