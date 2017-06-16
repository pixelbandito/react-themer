import React from 'react';

let sass = require('sass.js/dist/sass.sync.js');
let bootstrapThemeScss = require('./bootstrapThemeScss.js').default();

// Sass.setWorkerUrl('../../../node_modules/sass.js/dist/sass.worker.js');
// let sass = new Sass();

class SassJsComponent extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			color: 'white',
			themeCss: '',
			theme: {
				colors: {
					primary: '#0000ff',
					good: '#00ff00',
					bad: '#ff0000'
				},
				roundness: 0.25
			}
		};
		this.randomizeColor = this.randomizeColor.bind(this);
		this.changedColorPrimary = this.changedColorPrimary.bind(this);
	}

	randomizeColor() {
		let newColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16),
			component = this,
			scssFiles = bootstrapThemeScss.keys,
			varsIndex = scssFiles.indexOf('variables'),
			beforeScss = scssFiles.slice(0, varsIndex),
			afterScss = scssFiles.slice(varsIndex),
			scss = '';
		const {colors, roundness} = this.state.theme;

		component.setState({color: colors.primary});
		console.log(`"Randomizer" got ${colors.primary}`);
		scss = `${bootstrapThemeScss.getText(beforeScss)}\n` +
			`$theme-brand-primary: ${colors.primary}; $theme-brand-good: ${colors.good}; $theme-brand-bad: ${colors.bad}; $theme-border-radius: ${roundness}rem;\n` +
			`${bootstrapThemeScss.getText(afterScss)}`;
		sass.compile(scss, function(result) {
			component.setState({themeCss: result.text});
			console.log(`compiled with $theme-brand-primary: ${colors.primary}`)
		});
	}

	changedColorPrimary(event) {
		console.log(event.target.value);
		let theme = this.state.theme;
		theme.colors.primary = event.target.value;
		this.setState({theme: theme});
	}

	render() {
		const {colors, roundness} = this.state.theme;

		return (
			<div>
				<style>{this.state.themeCss}</style>
				<div>
					<form
						className="form"
					>
						<input
							className="form-control"
							defaultValue={colors.primary}
							onChange={this.changedColorPrimary}
						/>
						<span>{colors.primary}</span>
					</form>
					<button className="btn btn-default">Button key color: {colors.primary}</button>
					<button className="btn btn-danger" onClick={this.randomizeColor}>Randomize color</button>
				</div>
			</div>
		)
	}

};

export default SassJsComponent;
