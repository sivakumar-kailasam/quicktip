var React = require('react'),
	Quicktip = require('quicktip');

var App = React.createClass({
	render: function() {
		return (
			<Quicktip message="This is the tooltip content">
				<button className="fancy-button">Siva</button>
			</Quicktip>
		)
	}
});

React.render(<App />, document.getElementById('app'));
