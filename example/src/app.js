var React = require('react'),
	Quicktip = require('quicktip');

var App = React.createClass({

	getDefaultProps: function(){
		return {
			useCases:  [{
				message: 'This is the tooltip right',
				direction: 'right',
				contentToDisplay: 'Tooltip on right'
			}, {
				message: 'This is the tooltip left',
				direction: 'left',
				contentToDisplay: 'Tooltip on left'
			}, {
				message: 'This is the tooltip top',
				direction: 'top',
				contentToDisplay: 'Tooltip on top'
			}, {
				message: 'This is the tooltip on bottom',
				direction: 'bottom',
				contentToDisplay: 'Tooltip on bottom'
			}, {
				message: 'I should show success theme',
				contentToDisplay: 'Add additional class like success',
				additionalClasses: 'success'
			}]
		};

	},
	render: function() {

		return (
			<div>
				{this.props.useCases.map(function(useCase){
					return (
						<div className="usecase">
							<Quicktip message={useCase.message}  direction={useCase.direction} classesToAdd={useCase.additionalClasses}>
								<button className = "fancy-button">{useCase.contentToDisplay}</button>
							</Quicktip>
						</div>
					)					
				})}
				
			
			</div>
		)
	}
});

React.render(<App /> , document.getElementById('app'));