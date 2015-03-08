"use strict";

var React = require("react");
var PureRenderMixin = require("react/addons").addons.PureRenderMixin; //Awesome mixin!
var classNames = require("classNames");

var Quicktip = React.createClass({
	displayName: "Quicktip",

	mixins: [PureRenderMixin],

	propTypes: {
		classesToAdd: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]),
		direction: React.PropTypes.oneOf(["top", "right", "left", "bottom"]),
		message: React.PropTypes.string,
		closeDelay: React.PropTypes.number
	},

	getDefaultProps: function getDefaultProps() {
		return {
			classesToAdd: "",
			direction: "left",
			message: "",
			closeDelay: 200
		};
	},

	getInitialState: function getInitialState() {
		return {
			isTooltipHidden: true
		};
	},

	showTooltip: function showTooltip() {
		this.setState({
			isTooltipHidden: false
		});
	},

	hideTooltip: function hideTooltip() {
		var _this = this;
		setTimeout(function () {
			_this.setState({
				isTooltipHidden: true
			});
		}, _this.props.closeDelay);
	},

	render: function render() {

		var directionClassNamesMap = {
			left: "quicktip__direction--left",
			right: "quicktip__direction--right",
			top: "quicktip__direction--top",
			bottom: "quicktip__direction--bottom"
		};

		var classesToUse = classNames({
			quicktip__content: true,
			"quicktip__content--hide": this.state.isTooltipHidden
		}, this.props.classesToAdd, directionClassNamesMap[this.props.direction]);

		return React.createElement(
			"div",
			{ className: "quicktip__container" },
			React.createElement(
				"span",
				{ onMouseOver: this.showTooltip, onMouseOut: this.hideTooltip },
				this.props.children
			),
			React.createElement(
				"div",
				{ className: classesToUse },
				React.createElement("div", { className: "quicktip__arrow" }),
				React.createElement(
					"div",
					{ className: "quicktip__message" },
					this.props.message
				)
			)
		);
	}

});

module.exports = Quicktip;