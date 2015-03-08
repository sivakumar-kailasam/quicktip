'use strict';
var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin; //Awesome mixin!
var classNames = require('classNames');

var Quicktip = React.createClass({

	mixins: [PureRenderMixin],

	propTypes: {
		classesToAdd: React.PropTypes.oneOfType([
			React.PropTypes.string,
			React.PropTypes.array
		]),
		direction: React.PropTypes.oneOf(['top', 'right', 'left', 'bottom']),
		message: React.PropTypes.string,
		closeDelay: React.PropTypes.number
	},


	getDefaultProps: function() {
		return {
			classesToAdd: '',
			direction: 'left',
			message: '',
			closeDelay: 200
		};
	},


	getInitialState: function() {
		return {
			isTooltipHidden: true
		};
	},


	showTooltip: function() {
		this.setState({
			'isTooltipHidden': false
		});
	},


	hideTooltip: function() {
		var _this = this;
		setTimeout(function() {
			_this.setState({
				'isTooltipHidden': true
			});
		}, _this.props.closeDelay);
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