var React = require('react');
var classSet = require('react/lib/cx');

var Quicktip = React.createClass({

	getInitialState: function() {
		return {
			isTooltipHidden: true
		}
	},

	componentDidMount: function() {

	},

	showTooltip: function(){
		this.setState({'isTooltipHidden': false});
	},

	hideTooltip: function(){
		this.setState({'isTooltipHidden': true});
	},

	componentWillUnmount: function() {

	},

	render: function() {

		var classesToUse = classSet({
			'quicktip__content': true,
			'quicktip__content--hide': this.state.isTooltipHidden
		});

		return (
			<div className="quicktip__container">
				<span onMouseOver={this.showTooltip} onMouseOut={this.hideTooltip}>
					{this.props.children}
				</span>
				<div className={classesToUse}> 
					{this.props.message}
				</div> 
			</div>
		);
	}

});

module.exports = Quicktip;