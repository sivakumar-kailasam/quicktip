var React = require('react');
var classNames = require('classNames');

var Quicktip = React.createClass({

	getInitialState: function() {
		return {
			isTooltipHidden: true
		}
	},

	getDefaultProps: function() {
		return {
			classesToAdd: '',
			direction: 'left',
			message: ''
		}
	},

	componentDidMount: function() {

	},

	showTooltip: function() {
		this.setState({
			'isTooltipHidden': false
		});
	},

	hideTooltip: function() {
		this.setState({
			'isTooltipHidden': true
		});
	},

	componentWillUnmount: function() {

	},

	render: function() {

		var directionClassNamesMap = {
			left: 'quicktip__direction--left',
			right: 'quicktip__direction--right',
			top: 'quicktip__direction--top',
			bottom: 'quicktip__direction--bottom'
		};

		var classesToUse = classNames({
				'quicktip__content': true,
				'quicktip__content--hide': this.state.isTooltipHidden
			},
			this.props.classesToAdd,
			directionClassNamesMap[this.props.direction]
		);

		return (
			<div className="quicktip__container">
				<span onMouseOver={this.showTooltip} onMouseOut={this.hideTooltip}>
					{this.props.children}
				</span>
				<div className={classesToUse}> 
					<div className="quicktip__arrow"></div>
					<div className="quicktip__message">{this.props.message}</div>
				</div> 
			</div>
		);
	}

});

module.exports = Quicktip;