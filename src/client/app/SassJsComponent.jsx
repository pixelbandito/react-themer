import React from 'react';

let sass = require('sass.js/dist/sass.sync.js');

// Sass.setWorkerUrl('../../../node_modules/sass.js/dist/sass.worker.js');
// let sass = new Sass();

class SassJsComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			color: 'white',
			themeCss: ''
		};
		this.randomizeColor = this.randomizeColor.bind(this);
	}

	randomizeColor() {
		let newColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
		let component = this;
		component.setState({color: newColor});
		let scss = '$someVar: ' + newColor + '; .theme-btn-rnd { background-color: $someVar; }';
		sass.compile(scss, function(result) {
			console.log(result);
			component.setState({themeCss: result.text});
		});
	}

	render() {
		return (
			<div>
				<div>
					<style>{this.state.themeCss}</style>
					<button className="btn theme-btn-rnd">Random colored button</button>
					<button className="btn btn-danger" onClick={this.randomizeColor}>Randomize color</button>
				</div>
			</div>
		)
	}

};

export default SassJsComponent;
