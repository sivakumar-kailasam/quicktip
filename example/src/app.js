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
			}, {
				message: 'I will close a little after you move the cursor out',
				contentToDisplay: 'Close with more delay',
				closeDelay: 1000
			}]
		};

	},
	render: function() {

		return (
			<div>
				{this.props.useCases.map(function(useCase,i ){
					return (
						<div className="usecase" key={i}>
							<Quicktip message={useCase.message}  direction={useCase.direction} classesToAdd={useCase.additionalClasses} closeDelay={useCase.closeDelay}>
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