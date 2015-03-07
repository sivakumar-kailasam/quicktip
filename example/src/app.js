var React = require('react'),
	Quicktip = require('quicktip');

var App = React.createClass({
	render: function() {
		return (
			<div>
				<Quicktip />
			</div>
		)
	}
});

React.render(<App />, document.getElementById('app'));
