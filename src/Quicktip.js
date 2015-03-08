var React = require('react');
var classNames = require('classNames');

var Quicktip = React.createClass({

	getInitialState: function() {
		return {
			isTooltipHidden: true
		}
	},

	getDefaultProps: function(){
		return {
			message: '',
			classesToAdd: ''
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

		var classesToUse = classNames({
			'quicktip__content': true,
			'quicktip__content--hide': this.state.isTooltipHidden
		}, this.props.classesToAdd);

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